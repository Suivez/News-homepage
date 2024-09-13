import React from 'react'

function New() {
    return (
        <div className='flex flex-col w-full gap-8 bg-veryDarkBlue px-4 py-5 h-full max-w-[400px]'>
            <h1 className='text-softOrange font-extrabold text-4xl'>New</h1>
            <div>
                <h2 className='text-white text-xl font-bold mb-2'>Hydrogen VS Electric Cars</h2>
                <p className='text-grayishBlue font-normal'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <hr></hr>
            <div>
                <h2 className='text-white text-xl font-bold mb-2'>The Downsides of AI Artistry</h2>
                <p className='text-grayishBlue font-normal'>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <hr></hr>
            <div>
                <h2 className='text-white text-xl font-bold mb-2'>Is VC Funding Drying Up?</h2>
                <p className='text-grayishBlue font-normal'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </div>
    )
}

export default New
