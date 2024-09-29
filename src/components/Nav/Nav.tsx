import React from 'react'
import { I8Logo } from 'src/assets'
import { links } from 'src/utils'
import { NavType } from 'src/utils'


export const Links = ({link, url, className} : NavType ) => {
    return (
        <a href={url} className={`text-[18px] leading-[24px] px-[20px] py-[14px] hover:opacity-80 ${className ? className : ''}`}>
            {link}
        </a>
    )
}

const Nav = () => {
  return (
    <div className="pt-[32px] fixed w-full z-[999]">
        <div className="container flex justify-between items center">
            <div className="logo mr-[20px]">
                <I8Logo />
            </div>
            <div className="mr-auto flex items-center gap-[20px]">
                {links.map((link: {link: string, url: string}, idx: number) => (
                    <Links key={idx} link={link.link} url={link.url} />
                ))}
            </div>
            <div className="w-fit flex gap-[20px]">
                <Links link='Login' url='/' className="bg-white" />
                <Links link='Sign Up' url='/'  className="text-white bg-black" />
            </div>
        </div>
    </div>
  )
}

export default Nav