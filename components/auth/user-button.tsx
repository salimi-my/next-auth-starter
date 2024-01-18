import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/use-current-user';
import { SignOutButton } from '@/components/auth/sign-out-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function UserButton() {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src={user?.image || ''} alt={user?.name || ''} />
            <AvatarFallback>
              <FaUser />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end'>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none truncate'>
              {user?.name}
            </p>
            <p className='text-xs leading-none text-muted-foreground truncate'>
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='cursor-pointer' asChild>
            <Link href='/server'>Server</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer' asChild>
            <Link href='/client'>Client</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer' asChild>
            <Link href='/settings'>Settings</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <SignOutButton>
          <DropdownMenuItem className='cursor-pointer'>
            Sign out
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
