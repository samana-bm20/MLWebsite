import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import lightLogo from '../../assets/logo.jpg';
import { IconButton } from '@mui/material';
import { MenuRounded } from '@mui/icons-material';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const paths = ['/MLWebsite/', '/MLWebsite/about', '/MLWebsite/tech-apps', '/MLWebsite/mapdata', '/MLWebsite/contact'];
    const titles = ['HOME', 'ABOUT', 'TECH & APPS', 'DATA & MAPS', 'CONTACT'];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>


            <div className='sticky top-0 z-50 w-full h-[5rem] shadow-xl bg-[#fff]'>
                <nav className='container ml-auto flex items-center justify-between rounded-xl'>
                    <div className='py-2'>
                        <Link to='/MLWebsite/'>
                            <img draggable={false} src={lightLogo} alt='ML INFOMAP' className='w-20 h-auto ml-4' />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className='h-[5rem] w-[40rem] bg-gray-300 flex items-center justify-end rounded-bl-[200px] border-l-4 border-l-[#0c315b] shadow-[0_7px_0_#777]'>
                            <div className='px-3 py-2 w-full'>
                                <ul className='flex justify-around lg:gap-8 font-semibold text-md'>
                                    {paths.map((path, index) => {
                                        return (
                                            <li key={path}>
                                                <NavLink
                                                    to={path}
                                                    end={path === '/MLWebsite/'} 
                                                    className={({ isActive }) =>
                                                        isActive ? 'text-[#B20000] font-bold' : 'hover:text-[#B20000]'
                                                    }
                                                >
                                                    {titles[index]}
                                                </NavLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sm:hidden z-[100] mr-4">
                        <IconButton ref={buttonRef} onClick={toggleMenu}>
                            <MenuRounded fontSize='large' sx={{ color: '#b20000' }} />
                        </IconButton>
                        {isMenuOpen && (
                            <div
                                ref={menuRef}
                                // className="w-[15rem] z-[200] absolute right-0 top-[5rem] rounded-bl-[50px] border-l-4 border-l-[#B20000] shadow-[0_7px_0_#777] bg-gray-300">
                                className={`w-[15rem] z-[1000] absolute right-0 top-[5rem] rounded-bl-[50px] border-l-4 border-l-[#B20000] shadow-[0_7px_0_#777] bg-gray-300
                                    transform transition-transform duration-300 ease-in-out
                                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                            >
                                <ul className='font-semibold text-lg p-6'>
                                    {paths.map((path, index) => {
                                        return (
                                            <li key={path} className="pb-1">
                                                <NavLink
                                                    to={path}
                                                    onClick={closeMenu}
                                                    className={({ isActive }) =>
                                                        isActive ? 'text-[#B20000] font-bold' : 'hover:text-[#B20000]'
                                                    }
                                                >
                                                    {titles[index]}
                                                </NavLink>
                                            </li>
                                        );
                                    })}

                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar