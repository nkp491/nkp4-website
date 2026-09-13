import type { ContactRoute } from "@/data/contact";

export default function ContactRouteCard({ route }: { route: ContactRoute }) {
  return (
    <a
      href={route.href}
      className="hq-contact-card"
      target={route.external ? "_blank" : undefined}
      rel={route.external ? "noopener noreferrer" : undefined}
    >
      <span>{route.label}</span>
      <strong>
        {route.title}
        {route.external && (
          <>
            <span aria-hidden="true"> ↗</span>
            <span className="hq-visually-hidden">(opens in new tab)</span>
          </>
        )}
      </strong>
    </a>
  );
}
