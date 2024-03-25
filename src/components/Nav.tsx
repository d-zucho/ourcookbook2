'use client'
import { Button } from './ui/button'
import { useMediaQuery } from 'usehooks-ts'

const Nav = () => {
  const isMobile = useMediaQuery('(max-width: 798px)')
  return (
    <>
      <div>
        {isMobile && (
          <div>
            <Button className='btn'>Sign In</Button>
            <Button className='btn' variant={'ghost'}>
              Join Now
            </Button>
          </div>
        )}
      </div>
    </>
  )
}

export default Nav
