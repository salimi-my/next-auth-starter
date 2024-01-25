import { Footer } from '@/components/footer';

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='h-full min-h-[calc(100vh_-_36px_-_48px)] flex items-center justify-center px-4 md:px-0'>
        {children}
      </div>
      <Footer />
    </>
  );
}
