import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import { CONNECT_FACTS } from '@/data/constants'

const Connect = () => {
  return (
    <section className='py-10 bg-[#F5F5F5] overflow-hidden mt-[100px]'>
      <MaxWidthWrapper>
        {/* section flex wrapper */}
        <div className='flex flex-col lg:flex-row'>
          {/* left */}
          <div className='flex flex-col flex-1 mt-12'>
            <span className='text-xs font-bold text-center lg:text-left'>
              CONNECT
            </span>
            <h2 className='font-bold sm:text-4xl text-3xl py-2 max-w-[90%] mx-auto text-center lg:text-left lg:mx-0'>
              Discover and Share Delicious Recipes with Others
            </h2>
            <p className='text-base text-muted-foreground md:max-w-[80%] mx-auto lg:mx-0 w-[90%]'>
              OurCookbook is a social media platform where you can connect with
              other food enthusiasts, discover new recipes, and share your
              favorites. Join our community today, and embark on a culinary
              journey like no other.
            </p>
            <div className='pt-12 flex flex-col md:flex-row gap-12 justify-around md:justify-evenly'>
              {CONNECT_FACTS.map((fact, index) => (
                <div
                  key={index}
                  className='md:w-[35%] mx-auto md:mx-0 max-w-[50%] text-center md:text-left flex flex-col gap-4 md:gap-6'
                >
                  <fact.icon size={32} className='mx-auto md:mx-0' />
                  <div className=''>
                    <h3 className='font-bold text-lg pb-2'>{fact.title}</h3>
                    <p className=''>{fact.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right */}
          <div className='mt-12'>
            <Image
              src={'/friends-night.jpg'}
              alt='Connect and Share with Others'
              width={400}
              height={600}
              className='rounded-lg shadow-lg  mx-auto xl:w-[auto]'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Connect
