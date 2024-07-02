"use client"

import Link from "next/link"

const MainBtn = (props) => {
  return (
    <Link
      href={props.href}
      className="bg-neutral-700 w-fit text-neutral-200 px-12 py-4 rounded-full text-lg 2xl:text-xl"
    >
      {props.text}
    </Link>
  )
}

export default MainBtn