import { CheckCircledIcon } from '@radix-ui/react-icons';

interface FormSuccessProps {
  message?: string;
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null;

  return (
    <div className='bg-emerald-500/15 dark:bg-emerald-500/30 p-3 rounded-md flex items-center space-x-2 text-xs md:text-sm text-emerald-500 dark:text-emerald-300'>
      <div className='w-4 h-4'>
        <CheckCircledIcon className='h-4 w-4' />
      </div>
      <p>{message}</p>
    </div>
  );
}
