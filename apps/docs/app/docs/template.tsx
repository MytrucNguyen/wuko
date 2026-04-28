export default function DocsTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="page-fade">{children}</div>;
}
