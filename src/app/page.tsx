import Logo from '/logoOC.svg'
import Header from '@/components/Header'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import { ArrowBigRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <MaxWidthWrapper>
        <main>
          <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
            {/* TITLE AND SUBTITLE */}
            <div>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Discover <span className='text-primary'>Delicious Recipes</span>{' '}
                That Will Inspire You
              </h1>
              <p className='mt-6 text-lg text-muted-foreground max-w-prose'>
                Welcome to OurCookbook. Join us in bringing back the simple joys
                of cooking and eating with loved ones.
              </p>
              <div className='mt-8 flex gap-4 justify-center'>
                <Link href='/featured' className={buttonVariants()}>
                  Browse Trending
                </Link>
                <Link
                  href='/categories'
                  className={buttonVariants({ variant: 'secondary' })}
                >
                  Explore Categories
                  <ArrowRight size={16} className='ml-2' />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </MaxWidthWrapper>
    </section>
  )
}
