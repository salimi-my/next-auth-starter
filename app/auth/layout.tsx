export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>This is auth navbar</nav>
      {children}
    </div>
  );
}
