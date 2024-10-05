import clsx from "clsx";
import { LinkType } from "src/utils";

const Links = ({ link, url, className, style }: LinkType) => {
  return (
      <a
      href={url}
      style={style}
      className={clsx(
        'text-[18px] leading-[24px] px-[20px] py-[14px] hover:opacity-80',
        className
      )}
    >
      {link}
    </a>
  )
};

export default Links