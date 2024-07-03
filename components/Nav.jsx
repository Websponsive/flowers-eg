import Image from "next/image"
import Link from "next/link"

const links = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "Products",
    href: "/"
  },
  {
    text: "History",
    href: "/"
  },
  {
    text: "Contacts",
    href: "/"
  }
]

const Nav = (props) => {
  return (
    <nav className={`${props.color} transition-colors duration-300 fixed h-20 top-4 sm:top-6 left-1/2 -translate-x-1/2 !py-0 !px-8 2xl:!px-16 rounded-full w-[calc(100vw-24px)] md:w-[calc(100vw-192px)] 2xl:w-[calc(100vw-448px)] flex justify-start content-center items-center z-30`}>
      <Link
        href="/"
      >
        <Image
          height={60}
          width={60}
          src="/next.svg"
          alt="logo"
        />
      </Link>
      <ul className="hidden md:flex justify-evenly w-3/5">
        {links.map((el) => {
          return (<li key={el.text} className="text-lg text-bold text-gray-800 font-heading">
            <Link
              href={el.href}
            >
              {el.text}
            </Link>
          </li>)
        })}
      </ul>
      <a className="text-lg font-bold justify-self-end w-fit ml-auto font-heading text-gray-800 " href="tel:+1-800-555-0199">+1-800-555-0199</a>
    </nav>
  )
}

export default Nav