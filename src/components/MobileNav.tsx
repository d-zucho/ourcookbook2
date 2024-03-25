'use client'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
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
            <SheetTitle>Welcome to ourCookbook!</SheetTitle>
          </SheetHeader>
          <div className='flex flex-col'>
            <Separator />
            <Link href='/' className={buttonVariants({ variant: 'ghost' })}>
              Sign In
            </Link>
            <Link href='/' className={buttonVariants()}>
              Join Now
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default MobileNav
