import Logo from '/logoOC.svg'
import Header from '@/components/Header'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'

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
                {/* Discover Delicious Recipes That Will{' '}
                <span className='text-primary'>Inspire</span> You */}
              </h1>
              <p className='mt-6 text-lg text-muted-foreground max-w-prose'>
                Welcome to OurCookbook. Join us in bringing back the simple joys
                of cooking and eating with loved ones.
              </p>
            </div>
          </div>
        </main>
      </MaxWidthWrapper>
    </section>
  )
}
