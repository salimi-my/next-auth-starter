import { Footer } from '@/components/footer';
import { Navbar } from '@/components/protected/navbar';

export default function ProtectedLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='h-full min-h-[calc(100vh_-_36px_-_48px)] py-10 px-4 w-full flex flex-col gap-y-10 items-center justify-center'>
        <div className='w-full max-w-[600px] overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl'>
          <div className='flex flex-col'>
            <Navbar />
            <div className='p-4 md:p-8'>{children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
