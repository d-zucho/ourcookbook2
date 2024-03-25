import MaxWidthWrapper from './MaxWidthWrapper'

const Connect = () => {
  return (
    <section>
      <MaxWidthWrapper>
        {/* section flex wrapper */}
        <div>
          {/* left */}
          <div>
            <span className='text-xs font-bold'>CONNECT</span>
            <h2 className='font-bold md:text-3xl text-2xl'>
              Discover and Share Delicious Recipes with Others
            </h2>
            <p className='text-base text-muted-foreground'>
              OurCookbook is a social media platform where you can connect with
              other food enthusiasts, discover new recipes, and share your
              favorites. Join our community today, and embark on a culinary
              journey like no other.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Connect
