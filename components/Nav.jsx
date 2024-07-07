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
    <nav className={`${props.color} shadow-xl transition-colors duration-300 fixed h-20 top-4 sm:top-6 left-1/2 -translate-x-1/2 !py-0 !px-8 2xl:!px-16 rounded-full w-[calc(100vw-24px)] md:w-[calc(100vw-192px)] 2xl:w-[calc(100vw-448px)] flex justify-start content-center items-center z-30`}>
      <Link
        href="/"
      >
        <Image
          height={50}
          width={50}
          src="/assets/bouquet.svg"
          alt="logo"
        />
      </Link>
      <ul className="hidden md:flex justify-evenly w-3/5 ">
        {links.map((el) => {
          return (<li key={el.text} className="text-lg text-bold overflow-x-hidden text-gray-800 font-heading relative before:absolute before:w-full before:h-0.5 before:rounded-full before:bottom-0 before:left-0 before:bg-orange-400 before:-translate-x-[110%] hover:before:translate-x-0 before:duration-500 before:transition-transform before:ease-bounce2 ">
            <Link
              href={el.href}
            >
              {el.text}
            </Link>
          </li>)
        })}
      </ul>
      <a className="relative overflow-x-hidden before:absolute before:w-full before:h-0.5 before:rounded-full before:bottom-0 before:left-0 before:bg-orange-400 before:-translate-x-[110%] hover:before:translate-x-0 before:duration-500 before:transition-transform before:ease-bounce2 text-lg font-bold justify-self-end w-fit ml-auto font-heading text-gray-800 " href="tel:+1-800-555-0199">+1-800-555-0199</a>
    </nav>
  )
}

export default Nav