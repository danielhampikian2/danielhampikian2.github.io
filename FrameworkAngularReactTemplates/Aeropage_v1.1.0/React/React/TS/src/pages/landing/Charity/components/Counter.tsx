import charityBackgroundImg from '@/assets/images/landing/charity/bg-2.png'

const Counter = () => {
  return (
    <section className="py-20 bg-black bg-bottom" style={{ backgroundImage: `url(${charityBackgroundImg})` }}>
      <div className="container">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="text-center">
            <h2 className="text-4xl font-medium text-white">20 Billion</h2>
            <p className="text-base  text-white/80 mt-2">Raised to Date</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-medium text-white">123</h2>
            <p className="text-base text-white/80 mt-2">Countries Impacting</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-medium text-white">30K+</h2>
            <p className="text-base text-white/80 mt-2">Volunteers</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-medium text-white">218</h2>
            <p className="text-base text-white/80 mt-2">Successful Projects</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter