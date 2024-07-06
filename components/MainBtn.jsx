"use client"

import Link from "next/link"

const MainBtn = (props) => {
  return (
    <div id={props.id} className="z-0 mt-4">
      <Link
        href={props.href}
        className="bg-orange-400 w-fit font-heading uppercase text-white px-12 py-4 rounded-full text-lg 2xl:text-xl tracking-wider relative group hover:-translate-x-6 transition-all duration-300 hover:bg-orange-500 shadow-lg hover:shadow-xl min-w-fit"
      >
        {props.text}
        <img 
          src="/assets/arrow.svg" 
          alt="arrow point right"
          width={60}
          height={60}
          className="absolute rotate-90 left-full top-1/2 -translate-y-1/2 -translate-x-full -z-10 group-hover:sm:translate-x-0 transition-all duration-300 ease-bounce2"
        />
      </Link>
    </div>
  )
}

export default MainBtn