'use client'
import { ChevronDown, Menu } from 'lucide-react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { useMediaQuery } from 'usehooks-ts'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'
import MobileNav from './MobileNav'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='shadow border-b-2 py-4  sticky top-0 bg-white'>
      <MaxWidthWrapper className='flex-between'>
        {/* left */}
        <div className='flex-center gap-10'>
          <div>
            <Link href='/'>
              <img src={'/logoOC.svg'} alt='' className='w-[60px]' />
            </Link>
          </div>

          <div className='hidden lg:flex-between'>
            <div className='flex-center gap-1'>
              <Link href={'/'} className={buttonVariants({ variant: 'ghost' })}>
                <span>Explore Categories</span>
                <ChevronDown size={20} className='flex-shrink-0' />
              </Link>
            </div>
            <div className='flex-center gap-1'>
              <Link
                href='/featured'
                className={buttonVariants({ variant: 'ghost' })}
              >
                <span>Featured</span>
              </Link>
            </div>
          </div>
        </div>

        {/* right */}
        {/* TODO: replace with Mobile nav (sheet) */}
        <div className='lg:hidden'>
          <MobileNav />
        </div>
        <div className='hidden lg:block space-x-4'>
          <Button className='btn'>Sign In</Button>
          <Button className='btn' variant={'outline'}>
            Join Now
          </Button>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
