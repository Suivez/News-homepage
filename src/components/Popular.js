import React from 'react'
import imageWeb3Mobile from '../images/image-web-3-mobile.jpg';
import imageWeb3Desktop from '../images/image-web-3-desktop.jpg';

function Popular() {
    return (
        <div className='my-5 flex gap-7 flex-col lg:my-0'>
            <div className='w-full lg:hidden'>
                <img src={imageWeb3Mobile} alt='Popular mobile' />
            </div>
            <div className='hidden lg:flex'>
                <img src={imageWeb3Desktop} alt='Popular desktop' />
            </div>
            <div className='flex flex-col gap-7 lg:flex-row'>
                <h1 className='font-extrabold text-5xl text-veryDarkBlue'>The Bright Future of Web 3.0?</h1>
                <div className='lg:flex-col'>
                    <p className='text-base text-darkGrayishBlue font-normal'>
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </p>
                    <button className='bg-softRed w-40 p-3 text-sm text-veryDarkBlue font-bold uppercase tracking-[0.2rem] mt-5'>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default Popular
