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

const Nav = () => {
  return (
    <nav className='fixed w-screen h-20 top-0 !py-0 !px-6 md:!px-24 2xl:!px-56 flex justify-start content-center items-center z-30'>
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
          return (<li key={el.text} className="text-lg text-bold">
            <Link
              href={el.href}
            >
              {el.text}
            </Link>
          </li>)
        })}
      </ul>
      <a className="text-lg font-bold justify-self-end w-fit ml-auto" href="tel:+1-800-555-0199">+1-800-555-0199</a>
    </nav>
  )
}

export default Nav