"use client"

import Link from "next/link"

const MainBtn = (props) => {
  return (
    <Link
      href={props.href}
      className="bg-orange-400 w-fit font-heading uppercase text-white px-12 py-4 rounded-full text-lg 2xl:text-xl tracking-wider"
    >
      {props.text}
    </Link>
  )
}

export default MainBtn