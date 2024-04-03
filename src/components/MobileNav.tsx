'use client'
import { ChevronDown, Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { Separator } from './ui/separator'

const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <div>
            <Menu size={32} />
          </div>
        </SheetTrigger>
        <SheetContent className='x max-w-[400px]'>
          <SheetHeader>
            <SheetTitle className='text-2xl'>
              Welcome to ourCookbook!
            </SheetTitle>
          </SheetHeader>
          <div className='flex flex-col justify-between h-full'>
            <div className='flex flex-col mt-10 gap-10'>
              <div className='flex flex-col gap-1'>
                <Link
                  href={'/'}
                  className={buttonVariants({ variant: 'ghost' })}
                >
                  <span className='text-lg'>Explore Categories</span>
                  <ChevronDown size={24} className='flex-shrink-0' />
                </Link>
              </div>
              <div className='flex flex-col gap-1 '>
                <Link
                  href='/featured'
                  className={buttonVariants({ variant: 'ghost' })}
                >
                  <span className='text-lg'>Featured</span>
                </Link>
              </div>
            </div>

            <div className='flex flex-col pb-20 gap-4'>
              <Separator className='mb-4' />
              <Link
                href='/sign-in'
                className={buttonVariants({ variant: 'outline' })}
              >
                Sign In
              </Link>
              <Link href='/sign-up' className={buttonVariants()}>
                Join Now
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default MobileNav
