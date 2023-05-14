import React from 'react'
import phoneImg from '../images/phone.svg'
import { useGlobalContext } from '../context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Hire the best freelancers for any job, online.</h1>
          <p>
            World's largest freelance meet point. Any job you can possibly
            imagine of is here. Save more & get quotes for free. Pay only when
            you're 100% satisfied.
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' className='phone-img' />
        </article>
      </div>
    </section>
  )
}

export default Hero
