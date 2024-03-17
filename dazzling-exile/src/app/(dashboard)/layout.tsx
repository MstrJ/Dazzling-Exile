export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="size-true">{children}</div>;
}
