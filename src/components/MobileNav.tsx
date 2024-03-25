'use client'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'

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
            <h3>Welcome to ourCookbook!</h3>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default MobileNav
