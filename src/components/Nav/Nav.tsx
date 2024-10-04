import clsx from 'clsx';
import React, { useState } from 'react';
import { I8Logo } from 'src/assets';
import { links } from 'src/utils';
import { NavType } from 'src/utils';

export const Links = ({ link, url, className }: NavType) => {
  return (
    <a href={url} className={`text-[18px] leading-[24px] px-[20px] py-[14px] hover:opacity-80 ${className ? className : ''}`}>
      {link}
    </a>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx("pt-[32px] fixed w-full z-[999]",
        {
            " bg-[#f0f0f0]" : isOpen
        }
    )}>
      <div className="container flex justify-between items-center">
        <div className="logo mr-[20px] z-[999]">
          <I8Logo/>
        </div>
        <div className={clsx("w-full justify-between items-center hidden lg:flex bg-[#f0f0f0]",
            {
                "fixed w-screen h-screen top-0 left-0 z-[99] !flex flex-col !justify-start pt-[150px] gap-[40px]" : isOpen
            }
        )}>
          <div className={clsx("mr-auto flex items-center gap-[20px]",
            {
                "flex-col mr-0 w-full" : isOpen
            }
        )}>
            {links.map((link: { link: string; url: string }, idx: number) => (
              <Links key={idx} link={link.link} url={link.url} className={clsx("",
                {
                    "w-full py-[24px] text-center" : isOpen
                }
            )} />
            ))}
          </div>
          <div className="w-fit flex gap-[20px]">
            <Links link="Login" url="/" className="bg-white" />
            <Links link="Sign Up" url="/" className="text-white bg-black" />
          </div>
        </div>

        {/* Hamburger menu */}
       <div className="flex lg:hidden z-[999]">
        <button
            className={`menu bg-transparent border-none cursor-pointer flex p-0 ${isOpen ? 'opened' : ''}`}
            onClick={toggleMenu}
            aria-label="Main Menu"
            aria-expanded={isOpen}
            >
            <svg width="60" height="60" viewBox="0 0 100 100" className='fill-none'>
                <path
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                className="stroke-current text-black transition-all duration-[600ms]"
                style={{
                    strokeDasharray: isOpen ? '90 207' : '60 207',
                    strokeDashoffset: isOpen ? '-134' : '0',
                    strokeWidth: '6',
                }}
                />
                <path
                d="M 20,50 H 80"
                className="stroke-current text-black transition-all duration-[600ms]"
                style={{
                    strokeDasharray: isOpen ? '1 60' : '60 60',
                    strokeDashoffset: isOpen ? '-30' : '0',
                    strokeWidth: '6',
                }}
                />
                <path
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                className="stroke-current text-black transition-all duration-[600ms]"
                style={{
                    strokeDasharray: isOpen ? '90 207' : '60 207',
                    strokeDashoffset: isOpen ? '-134' : '0',
                    strokeWidth: '6',
                }}
                />
            </svg>
            </button>
       </div>
      </div>
    </div>
  );
};

export default Nav;
