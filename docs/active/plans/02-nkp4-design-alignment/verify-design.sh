#!/bin/bash
# Plan 02 release checks (PLAN.md "Verification gates", G3–G5).
# Written for macOS bash 3.2: no mapfile, no timeout, no \u escapes.
#
# Usage:
#   verify-design.sh --selftest            # check the HTML matchers against fixtures
#   verify-design.sh [BASE_URL]            # default http://127.0.0.1:3002
#
# Run from the repository root against a production server:
#   npm run build && npm run start -- --hostname 127.0.0.1 --port 3002

set -u

PASS=0
FAIL=0
ok()   { PASS=$((PASS + 1)); echo "ok   - $1"; }
bad()  { FAIL=$((FAIL + 1)); echo "FAIL - $1"; }

# --- HTML matchers (perl, slurp mode) --------------------------------------

# Prints one line per <a> whose text contains $2: "<href>|<target>"
anchors_with_text() {
  perl -0777 -e '
    my ($needle) = @ARGV; local $/; my $html = <STDIN>;
    while ($html =~ /<a\b([^>]*)>(.*?)<\/a>/sg) {
      my ($attrs, $text) = ($1, $2);
      next unless index($text, $needle) >= 0;
      my ($href) = $attrs =~ /\bhref="([^"]*)"/;
      my ($target) = $attrs =~ /\btarget="([^"]*)"/;
      print(($href // ""), "|", ($target // ""), "\n");
    }' "$2" <<EOF
$1
EOF
}

count_tag() {  # $1 html, $2 tag name
  perl -0777 -e 'my ($t) = @ARGV; local $/; my $h = <STDIN>; my $n = () = $h =~ /<\Q$t\E\b/g; print $n' "$2" <<EOF
$1
EOF
}

section_by_id() {  # $1 html, $2 id -> inner html of <section id=...>
  perl -0777 -e 'my ($id) = @ARGV; local $/; my $h = <STDIN>; print $1 if $h =~ /<section\b[^>]*\bid="\Q$id\E"[^>]*>(.*?)<\/section>/s' "$2" <<EOF
$1
EOF
}

# D-10: every "Work with DigitalMocean" link is the mailto, same tab. Echo "ok" or reason.
check_dm_cta() {
  local lines line href target n=0
  lines=$(anchors_with_text "$1" "Work with DigitalMocean")
  if [ -z "$lines" ]; then echo "no 'Work with DigitalMocean' link"; return; fi
  while IFS= read -r line; do
    n=$((n + 1))
    href=${line%%|*}; target=${line#*|}
    if [ "$href" != "mailto:contact@nkp4.com" ]; then echo "href=$href"; return; fi
    if [ -n "$target" ]; then echo "target=$target"; return; fi
  done <<EOF
$lines
EOF
  echo "ok"
}

selftest() {
  local good badhref newtab home
  good='<main><a class="x" href="mailto:contact@nkp4.com"><span>Technology</span><strong>Work with DigitalMocean</strong></a></main>'
  badhref='<a href="/companies/digitalmocean"><strong>Work with DigitalMocean</strong></a>'
  newtab='<a href="mailto:contact@nkp4.com" target="_blank">Work with DigitalMocean</a>'
  home='<main><header></header><section id="hero"></section><section id="portfolio"><a href="/companies/surehelp">x</a></section><section></section><section></section><section></section><section id="connect"></section><footer></footer></main>'

  [ "$(check_dm_cta "$good")" = "ok" ] && ok "selftest: mailto CTA accepted" || bad "selftest: mailto CTA accepted"
  [ "$(check_dm_cta "$badhref")" != "ok" ] && ok "selftest: detail-page loop rejected" || bad "selftest: detail-page loop rejected"
  [ "$(check_dm_cta "$newtab")" != "ok" ] && ok "selftest: new-tab mailto rejected" || bad "selftest: new-tab mailto rejected"
  [ "$(check_dm_cta '<p>none</p>')" != "ok" ] && ok "selftest: missing CTA rejected" || bad "selftest: missing CTA rejected"
  [ "$(count_tag "$home" section)" = "6" ] && ok "selftest: section count" || bad "selftest: section count"
  [ "$(count_tag "$(section_by_id "$home" portfolio)" button)" = "0" ] && ok "selftest: no portfolio buttons" || bad "selftest: no portfolio buttons"
  [ "$(count_tag "$(section_by_id '<section id="portfolio"><button>All</button></section>' portfolio)" button)" = "1" ] \
    && ok "selftest: portfolio button detected" || bad "selftest: portfolio button detected"
}

if [ "${1:-}" = "--selftest" ]; then
  selftest
  echo "selftest: $PASS passed, $FAIL failed"
  [ "$FAIL" -eq 0 ]
  exit $?
fi

BASE=${1:-http://127.0.0.1:3002}

fetch() { curl -fsS "$BASE$1"; }
status() { curl -s -o /dev/null -w '%{http_code}' "$BASE$1"; }

# --- G3: route surface ------------------------------------------------------
for r in / /companies /companies/digitalmocean /companies/surehelp /companies/manifest-network /about /contact; do
  s=$(status "$r"); [ "$s" = "200" ] && ok "200 $r" || bad "expected 200 for $r, got $s"
done
for r in /companies/nkp4-technology /links /secret; do
  s=$(status "$r"); [ "$s" = "404" ] && ok "404 $r" || bad "expected 404 for $r, got $s"
done

HOME_HTML=$(fetch /)
ABOUT_HTML=$(fetch /about)
CONTACT_HTML=$(fetch /contact)
COMPANIES_HTML=$(fetch /companies)
DM_HTML=$(fetch /companies/digitalmocean)
MANIFEST_HTML=$(fetch /companies/manifest-network)

# --- G4: D-10 DigitalMocean CTA --------------------------------------------
for pair in "/|HOME_HTML" "/contact|CONTACT_HTML" "/companies/digitalmocean|DM_HTML"; do
  route=${pair%%|*}; var=${pair#*|}
  eval "html=\$$var"
  res=$(check_dm_cta "$html")
  [ "$res" = "ok" ] && ok "D-10 mailto CTA on $route" || bad "D-10 CTA on $route: $res"
done
for pair in "/|HOME_HTML" "/about|ABOUT_HTML" "/contact|CONTACT_HTML" "/companies|COMPANIES_HTML" "/companies/digitalmocean|DM_HTML"; do
  route=${pair%%|*}; var=${pair#*|}
  eval "html=\$$var"
  case "$html" in
    *'href="/companies/nkp4-technology"'*) bad "old slug linked from $route" ;;
    *) ok "no old slug link on $route" ;;
  esac
done

# --- G4: homepage structure (decisions 3, 5, 7) -----------------------------
n=$(count_tag "$HOME_HTML" section); [ "$n" = "6" ] && ok "homepage has 6 sections" || bad "homepage sections: $n"
PORTFOLIO=$(section_by_id "$HOME_HTML" portfolio)
[ -n "$PORTFOLIO" ] && ok "homepage #portfolio present" || bad "homepage #portfolio missing"
n=$(count_tag "$PORTFOLIO" button); [ "$n" = "0" ] && ok "no filter buttons in homepage #portfolio" || bad "buttons in #portfolio: $n"
[ -n "$(section_by_id "$HOME_HTML" connect)" ] && ok "homepage #connect present" || bad "homepage #connect missing"
for pair in "/|HOME_HTML" "/about|ABOUT_HTML"; do
  route=${pair%%|*}; var=${pair#*|}
  eval "html=\$$var"
  n=$(count_tag "$html" img); [ "$n" = "0" ] && ok "no <img> on $route" || bad "<img> count on $route: $n"
  n=$(count_tag "$html" ol); [ "$n" -ge 1 ] && ok "progression <ol> on $route" || bad "no <ol> on $route"
  case "$html" in
    *'I sit, observe, immerse myself, then build the thing that gives people their time back.'*) ok "verbatim quote on $route" ;;
    *) bad "verbatim founder quote missing on $route" ;;
  esac
  case "$html" in
    *'<blockquote'*) ok "quote is a <blockquote> on $route" ;;
    *) bad "no <blockquote> on $route" ;;
  esac
  case "$html" in
    *'hq-founder-mark'*) bad "founder monogram tile still rendered on $route" ;;
    *) ok "no founder monogram tile on $route" ;;
  esac
done

# --- G4: /companies filter (decision 3) -------------------------------------
n=$(count_tag "$COMPANIES_HTML" button); [ "$n" = "4" ] && ok "/companies has All + 3 industry chips" || bad "/companies buttons: $n"
case "$COMPANIES_HTML" in *'aria-pressed="true"'*) ok "/companies chips expose aria-pressed" ;; *) bad "/companies aria-pressed missing" ;; esac
case "$COMPANIES_HTML" in *'aria-live="polite"'*) ok "/companies result count is live" ;; *) bad "/companies aria-live missing" ;; esac

# --- G4: other link behavior that must survive salvage ----------------------
res=$(perl -0777 -e 'local $/; my $h = <STDIN>; my $r = "missing";
  while ($h =~ /<a\b([^>]*)>/g) { my $a = $1; next unless $a =~ /\bhref="https:\/\/manifest\.network\/"/;
    $r = ($a =~ /\btarget="_blank"/ && $a =~ /\brel="noopener noreferrer"/) ? "ok" : "attrs: $a"; last }
  print $r' <<EOF
$MANIFEST_HTML
EOF
)
[ "$res" = "ok" ] && ok "Manifest CTA external, new tab" || bad "Manifest CTA $res"
case "$CONTACT_HTML" in
  *'href="https://calendar.google.com/calendar/u/0/appointments/'*) ok "Calendar route present on /contact" ;;
  *) bad "Calendar route missing on /contact" ;;
esac

# --- G4: aria-current on the section routes (T4.10) -------------------------
for pair in "/companies|COMPANIES_HTML" "/about|ABOUT_HTML" "/contact|CONTACT_HTML"; do
  route=${pair%%|*}; var=${pair#*|}
  eval "html=\$$var"
  case "$html" in *'aria-current="page"'*) ok "aria-current=page on $route" ;; *) bad "aria-current missing on $route" ;; esac
done

# --- G4: OG image is a PNG ---------------------------------------------------
case "$HOME_HTML" in
  *'property="og:image" content="https://nkp4.com/og-card.png"'*) ok "og:image points at og-card.png" ;;
  *) bad "og:image is not /og-card.png" ;;
esac
case "$HOME_HTML" in
  *'name="twitter:image" content="https://nkp4.com/og-card.png"'*) ok "twitter:image points at og-card.png" ;;
  *) bad "twitter:image is not /og-card.png" ;;
esac
ct=$(curl -s -o /dev/null -w '%{content_type}' "$BASE/og-card.png")
[ "$ct" = "image/png" ] && ok "og-card.png served as image/png" || bad "og-card.png content-type: $ct"

echo "verify-design: $PASS passed, $FAIL failed"
[ "$FAIL" -eq 0 ]
