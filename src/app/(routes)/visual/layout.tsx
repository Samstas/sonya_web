export default function VisualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      layout
      <div>{children}</div>
    </div>
  );
}
