import React from 'react'
import Popular from '../components/Popular';
import New from '../components/New';

function Home() {
    return (
        <div className='flex w-full'>
            <div className='flex flex-col lg:flex-row gap-7'>
                <Popular />
                <New />
            </div>
        </div>
    )
}

export default Home
