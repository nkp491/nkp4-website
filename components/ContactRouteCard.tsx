export type ContactRoute = {
  label: string;
  title: string;
  href: string;
  external?: boolean;
};

export default function ContactRouteCard({
  route,
}: {
  route: ContactRoute;
}) {
  return (
    <a
      href={route.href}
      className="hq-contact-card"
      target={route.external ? "_blank" : undefined}
      rel={route.external ? "noopener noreferrer" : undefined}
    >
      <span>{route.label}</span>
      <strong>{route.title}</strong>
    </a>
  );
}
