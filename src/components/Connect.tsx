import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import { CONNECT_FACTS } from '@/data/constants'

const Connect = () => {
  return (
    <section className='py-10 bg-[#F5F5F5] overflow-hidden'>
      <MaxWidthWrapper>
        {/* section flex wrapper */}
        <div className=''>
          {/* left */}
          <div className=''>
            <span className='text-xs font-bold'>CONNECT</span>
            <h2 className='font-bold sm:text-4xl text-3xl '>
              Discover and Share Delicious Recipes with Others
            </h2>
            <p className='text-base text-muted-foreground md:max-w-prose '>
              OurCookbook is a social media platform where you can connect with
              other food enthusiasts, discover new recipes, and share your
              favorites. Join our community today, and embark on a culinary
              journey like no other.
            </p>
            <div className=''>
              {CONNECT_FACTS.map((fact, index) => (
                <div key={index} className=''>
                  <fact.icon size={32} />
                  <div className=''>
                    <h3 className='font-bold text-lg'>{fact.title}</h3>
                    <p className=''>{fact.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right */}
          <div className=''>
            <Image
              src={'/newConnect.png'}
              alt='Connect and Share with Others'
              width={800}
              height={800}
              className=''
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Connect
