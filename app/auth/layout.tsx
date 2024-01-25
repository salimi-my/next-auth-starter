export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-full min-h-screen flex items-center justify-center px-4 md:px-0'>
      {children}
    </div>
  );
}
