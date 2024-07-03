"use client"

import MainBtn from "@/components/MainBtn"
import Nav from "@/components/Nav"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/src/ScrollTrigger"
import { useRef, useState } from "react"

const featured = [
  {
    img: "/assets/placeholder.jpg",
    alt: "placeholder",
    header: "Featured item",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit enim voluptatibus"
  },
  {
    img: "/assets/placeholder.jpg",
    alt: "placeholder",
    header: "Featured item",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit enim voluptatibus"
  },
  {
    img: "/assets/placeholder.jpg",
    alt: "placeholder",
    header: "Featured item",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit enim voluptatibus"
  },
]

const page = () => {
  const main = useRef()
  const [navcolor, setnavcolor] = useState("bg-emerald-200")

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#section1",
      start: "bottom 15%",
      toggleActions: "play none reverse none",
      onEnter: () => setnavcolor("bg-amber-200"),
      onLeaveBack: () => setnavcolor("bg-emerald-200"),
    })

    ScrollTrigger.create({
      trigger: "#section2",
      start: "bottom 15%",
      toggleActions: "play none reverse none",
      onEnter: () => setnavcolor("bg-emerald-200"),
      onLeaveBack: () => setnavcolor("bg-amber-200"),
    })

    ScrollTrigger.create({
      trigger: "#section3",
      start: "bottom 15%",
      toggleActions: "play none reverse none",
      onEnter: () => setnavcolor("bg-amber-200"),
      onLeaveBack: () => setnavcolor("bg-emerald-200"),
    })
  }, {scope: main})

  return (
    <main ref={main} className='[&>*]:px-6 md:[&>*]:px-24 [&>*]:py-32 2xl:[&>*]:px-56'>
      <Nav
        color={navcolor}
      />
      <div id="section1" className='bg-amber-200 min-h-screen grid md:grid-cols-2 content-center gap-16 !pt-36'>
        <div className="grid gap-6 content-center">
          <h1 className="text-4xl 2xl:text-5xl font-bold text-emerald-700 font-heading">Awesome header for this site</h1>
          <h2 className="text-xl 2xl:text-2xl text-stone-600">Short description for this shop, their mission, maybe their dedication to great customer service</h2>
          <MainBtn
            text="Call to action"
            href="/"
          />
        </div>
        <Image
          height={500}
          width={500}
          src="/assets/placeholder.jpg"
          alt="placeholder"
          className="place-self-center"
        />
      </div>


      <div id="section2" className=" bg-emerald-200  grid justify-center">
        <h1 className="text-4xl 2xl:text-5xl font-bold text-orange-500 text-center font-heading">Featured stuff:</h1>

        <div className="grid lg:grid-cols-3 gap-8 2xl:gap-16 mt-24 place-content-center justify-center max-w-5xl">
          {featured.map((el) => {
            return ( <div key={el.header} className="lg:max-w-80 bg-green-200 rounded-3xl grid max-lg:grid-cols-2">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  fill
                  style={{objectFit: "cover"}}
                  src={el.img}
                  alt={el.alt}
                  className="rounded-3xl"
                />
              </div>
              <div className="p-6 grid items-center content-center">
                <h3 className="font-semibold md:text-3xl sm:text-4xl text-2xl max-sm:text-xl text-emerald-700 font-heading">{el.header}</h3>
                <p className="text-base sm:text-lg max-sm:text-sm text-stone-600 pt-1 sm:pt-2">{el.desc}</p>
              </div>
            </div> )
          })}
        </div>
      </div>


      <div id="section3" className="bg-amber-200 grid justify-center justify-items-center gap-16">
        <h1 className="text-4xl 2xl:text-5xl font-bold text-emerald-700 text-center font-heading">Why us ?</h1>

        <div className="bg-orange-200 h-fit w-fit flex max-md:flex-col max-md:rounded-3xl rounded-full max-w-4xl">
          <p className="text-9xl text-orange-700 font-heading font-bold bg-amber-100 max-md:rounded-3xl rounded-full max-md:w-full w-fit md:aspect-square max-md:py-4 px-8 md:px-16 flex items-center text-center">1.</p>
          <div className="px-8 md:pl-8 md:pr-12 max-md:py-6 flex items-center text-xl leading-8 text-stone-600 ">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam possimus vel ipsa adipisci officiis rerum pariatur labore soluta incidunt, ipsam, accusantium unde odio illum quibusdam!</p>
          </div>
        </div>

        <div className="bg-red-200 h-fit w-fit flex max-md:flex-col max-md:rounded-3xl rounded-full max-w-4xl">
          <div className="px-8 md:pl-12 md:pr-8 max-md:py-6 flex items-center text-xl leading-8 text-gray-600">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam possimus vel ipsa adipisci officiis rerum pariatur labore soluta incidunt, ipsam, accusantium unde odio illum quibusdam!</p>
          </div>
          <p className="text-9xl text-red-700 font-heading font-bold bg-red-100 max-md:rounded-3xl rounded-full max-md:w-full w-fit md:aspect-square max-md:py-4 px-8 md:px-16 flex items-center text-center max-md:order-first">2.</p>
        </div>

        <div className="bg-lime-200 h-fit w-fit flex max-md:flex-col max-md:rounded-3xl rounded-full max-w-4xl">
          <p className="text-9xl text-green-700 font-heading font-bold bg-lime-100 max-md:rounded-3xl rounded-full max-md:w-full w-fit md:aspect-square max-md:py-4 px-8 md:px-16 flex items-center text-center">3.</p>
          <div className="px-8 md:pl-8 md:pr-12 max-md:py-6 flex items-center text-xl leading-8 text-gray-600">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam possimus vel ipsa adipisci officiis rerum pariatur labore soluta incidunt, ipsam, accusantium unde odio illum quibusdam!</p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-200 min-h-[80vh] grid place-items-center place-content-center gap-6 relative">
        <h2 className="text-4xl 2xl:text-5xl font-bold text-orange-500 text-center font-heading">Awesome open-ended question</h2>
        <p className="text-xl 2xl:text-2xl text-center text-slate-600">Short supporting encouraging user to take action</p>
        <MainBtn
          text="Call to action"
          href="/"
        />
        <div className="absolute bottom-0 w-full h-24 opacity-25 bg-emerald-300">
          this strip will be filled with svgs
        </div>
      </div>

      <div className="bg-teal-900 !py-6 flex justify-center">
        <a href="https://x.com/eduard_gangan" className="text-xs text-neutral-300 ">Property of Eduard Gangan, 2024</a>
      </div>
    </main>
  )
}

export default page