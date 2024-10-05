import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { I8Logo } from 'src/assets';
import { links, LinkType } from 'src/utils';
import { Links } from '../Links';




const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);
  const [visibleLinks, setVisibleLinks] = useState<number[]>([]);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        links.forEach((_, idx) => {
          setTimeout(() => {
            setVisibleLinks((prev) => [...prev, idx]);
          }, 100 * idx);
        });
      }, 350);
      return () => clearTimeout(timer);
    } else {
      setVisibleLinks([]);
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.classList.toggle('scroll-lock', isOpen);
  }, [isOpen]);

  const navClasses = clsx(
    'w-full justify-between items-center hidden lg:flex bg-[#f0f0f0]',
    {
      'fixed mobile_nav top-0 left-0 z-[99] !flex flex-col !justify-start pt-[150px] gap-[40px]':
        isOpen,
      'close_nav': !isOpen && isMobile,
    }
  );

  return (
    <div
      className={clsx('pt-[32px] fixed w-full z-[999]', {
        nav: isMobile,
      })}
    >
      <div className="container flex justify-between items-center">
        <div className="logo mr-[20px] z-[999]">
          <I8Logo />
        </div>
        <div className={navClasses}>
          <div
            className={clsx('mr-auto flex items-center gap-[20px]', {
              'flex-col mr-0 w-full': isOpen,
            })}
          >
            {links.map((link: LinkType, idx: number) => (
              <Links
                key={idx}
                link={link.link}
                url={link.url}
                className={clsx('nav_link', {
                  'w-full py-[24px] text-center': isOpen,
                  '!inline-block': visibleLinks.includes(idx) || !isMobile,
                  hidden: !visibleLinks.includes(idx) && isMobile,
                })}
              />
            ))}
          </div>
          <div className="w-fit flex gap-[20px]">
            <Links link="Login" url="/" className="nav_cta bg-white" />
            <Links
              link="Sign Up"
              url="/"
              className="nav_cta text-white bg-black"
            />
          </div>
        </div>

        {isMobile && (
          <div className="flex lg:hidden z-[999]">
            <button
              className={clsx('menu bg-transparent border-none cursor-pointer flex p-0', {
                opened: isOpen,
              })}
              onClick={toggleMenu}
              aria-label="Main Menu"
              aria-expanded={isOpen}
            >
              <svg width="60" height="60" viewBox="0 0 100 100" className="fill-none">
                {['M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058',
                  'M 20,50 H 80',
                  'M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
                ].map((d, i) => (
                  <path
                    key={i}
                    d={d}
                    className="stroke-current text-black transition-all duration-[600ms]"
                    style={{
                      strokeDasharray: isOpen ? (i === 1 ? '1 60' : '90 207') : (i === 1 ? '60 60' : '60 207'),
                      strokeDashoffset: isOpen ? (i === 1 ? '-30' : '-134') : '0',
                      strokeWidth: '6',
                    }}
                  />
                ))}
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;