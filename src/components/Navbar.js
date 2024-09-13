import React, { useState } from 'react'
import Logo from '../images/logo.svg';
import IconMenuOpen from '../images/icon-menu.svg';
import IconMenuClose from '../images/icon-menu-close.svg';

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!isOpen);
    }

    const linkStyles = "text-veryDarkBlue font-normal text-[0.938rem] hover:text-softOrange cursor-pointer transition delay-0 linear";

    return (
        <>
            <div className='flex w-full sticky top-0 z-50 justify-between items-center py-4 sm:my-10 lg:my-16 lg:py-4'>
                <img src={Logo} alt='Logo' />
                <img src={IconMenuOpen} onClick={openMenu} alt='Open menu' className='sm:hidden' />
                <div className='hidden sm:flex gap-8'>
                    <a className={linkStyles}>Home</a>
                    <a className={linkStyles}>New</a>
                    <a className={linkStyles}>Popular</a>
                    <a className={linkStyles}>Trending</a>
                    <a className={linkStyles}>Categories</a>
                </div>
            </div>
            {isOpen && (
                <div className='w-full flex-row sm:hidden'>
                    <div className='w-[40%] bg-darkGrayishBlue fixed left-0 top-0 h-full opacity-70 z-[51]'></div>
                    <div className='w-[60%] bg-offWhite fixed top-0 right-0 h-full z-[51]'>
                        <div className='flex items-center justify-end py-7 px-5'>
                            <img src={IconMenuClose} onClick={openMenu} alt='Close menu' />
                        </div>
                        <div className='flex flex-col gap-6 px-6 mt-14'>
                            <a className={linkStyles}>Home</a>
                            <a className={linkStyles}>New</a>
                            <a className={linkStyles}>Popular</a>
                            <a className={linkStyles}>Trending</a>
                            <a className={linkStyles}>Categories</a>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
