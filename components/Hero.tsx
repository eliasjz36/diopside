import { BsFillArrowDownCircleFill } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="hero mb-10 md:mb-28">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-[2.25rem] font-bold leading-tight text-dark dark:text-skin md:text-6xl xl:text-7xl">
            The{' '}
            <span className="bg-gradient-to-r from-lightgreen to-green-500 bg-clip-text text-transparent">
              Technology{' '}
            </span>
            world seen through my eyes
          </h1>
          <p className="py-6 text-xl text-dark dark:text-skin">
            Keep up with my recent posts about web development, mobile app
            development, artificial intelligence, blockchain, and data science.
          </p>
          <div className="mt-10 flex justify-center">
            <BsFillArrowDownCircleFill className="h-10 w-10 animate-bounce text-green-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
