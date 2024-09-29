import { Links } from "src/components/Nav/Nav";
import { FAQsType } from "./types";

export const faqs: FAQsType[] = [
  {
      header: {
        title: 'How much does a Team subscription cost?',
        image: '/images/discord.png',
        imageAlt: 'Team photo'

      },
      content: (
        <p className="leading-[26px] text-[18px] tracking-[0px] max-w-[764px]">
          Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details.
        </p>
      )
  },
  {
      header: {
        title: 'Do I still need to purchase licenses for the Mac app?',

      },
      content: (
        <p className="leading-[26px] text-[18px] tracking-[0px] max-w-[764px]">
          Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details.
        </p>
      )
  },
  {
      header: {
        title: 'What are the differences between Contributors and Viewers?',

      },
      content: (
        <div className="flex sm:flex-row flex-col gap-2 w-full">
          <p className="leading-[26px] text-[18px] tracking-[0px] w-fit">
            Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details.
          </p>
         <div className="w-[30%]">
          <img src="/images/sarah-j-Jlht8SgeGKU-unsplash.jpg" className="w-full rounded-sm " loading='lazy' alt='miss sarah' />
         </div>
        </div>
      )
  },
  {
      header: {
        title: 'How long does the free Teams subscription trial last?',
        image: '/logo192.png',
        imageAlt: 'React photo'

      },
      content: (
        <div className="">
          <p className="leading-[26px] text-[18px] tracking-[0px] max-w-[764px]">
            Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details.
          </p>
          <div className="w-fit flex gap-[20px] pt-[24px]">
                <Links link='Try now!' url='#pricing' className="bg-white" />
                <Links link='Privacy Policies' url='/'  className="hover:italic border-[1px] rounded-sm border-[#151515]" />
            </div>
        </div>
      )
  },
  {
      header: {
        title: 'Will program for Teams replace volume licensing?', 

      },
      content: (
        <p className="leading-[26px] text-[18px] tracking-[0px] max-w-[764px]">
          Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. <a href="/" className="italic text-blue-500 hover:not-italic">Check out our live demo?</a> These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details.
        </p>
      )
  },
]