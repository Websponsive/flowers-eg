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
    img: "/assets/bouquet1.webp",
    alt: "placeholder",
    header: "Pastel Delight",
    desc: "Soft pastel roses, pink carnations, and eucalyptus"
  },
  {
    img: "/assets/bouquet2.webp",
    alt: "placeholder",
    header: "Sunset Bloom",
    desc: "Roses, tulips, snapdragons, lisianthus, and eucalyptus"
  },
  {
    img: "/assets/bouquet3.webp",
    alt: "placeholder",
    header: "Blushing Charm",
    desc: "Pink roses, peonies, white ranunculus, and eucalyptus"
  },
]

const Page = () => {
  const main = useRef()
  const [navcolor, setnavcolor] = useState("bg-emerald-200")

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#section1",
      start: "bottom 7%",
      toggleActions: "play none reverse none",
      onEnter: () => setnavcolor("bg-amber-200"),
      onLeaveBack: () => setnavcolor("bg-emerald-200"),
    })

    ScrollTrigger.create({
      trigger: "#section2",
      start: "bottom 7%",
      toggleActions: "play none reverse none",
      onEnter: () => setnavcolor("bg-emerald-200"),
      onLeaveBack: () => setnavcolor("bg-amber-200"),
    })

    ScrollTrigger.create({
      trigger: "#section3",
      start: "bottom 7%",
      toggleActions: "play none reverse none",
      onEnter: () => setnavcolor("bg-amber-200"),
      onLeaveBack: () => setnavcolor("bg-emerald-200"),
    })
  }, {scope: main})

  return (
    <main ref={main} className='[&>*]:px-6 md:[&>*]:px-24 [&>*]:py-40 2xl:[&>*]:px-56'>
      <Nav
        color={navcolor}
      /> 
      <div id="section1" className='bg-gradient-to-t from-amber-200 to-amber-100 min-h-screen grid md:grid-cols-2 content-center gap-40 md:gap-16 !pt-36 relative'>
        <div className="grid gap-6 content-center">
          <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-bold text-emerald-700 font-heading">
            Custom bouquets for your special occasions
          </h1>
          <h2 className="text-xl 2xl:text-2xl text-stone-600 max-w-132">Surprise your loved ones with our personalized bouquets, crafted with care and love to bring smiles and joy</h2>
          <MainBtn
            href="/"
            text="Get your bouquet"
          />
        </div>
        <div className="place-self-center relative lg:mt-24">
          <Image
            height={500}
            width={500}
            src="/assets/bouquet.webp"
            alt="placeholder"
            className="[mask-image:url(/assets/splash.svg)] [mask-size:cover]"
          />
          <img 
            src="/assets/heart.svg" 
            alt="hand drawn heart" 
            width={80}
            height={80}
            className="absolute rotate-6 -top-8 left-0 sm:-left-8 twitch-l"
          />
          <img 
            src="/assets/heart.svg" 
            alt="hand drawn heart" 
            width={60}
            height={60}
            className="absolute -top-16 rotate-6 left-1/4 twitch-l ![animation-delay:250ms]"
          />
          <img 
            src="/assets/heart.svg" 
            alt="hand drawn heart" 
            width={70}
            height={70}
            className="absolute -top-28 -rotate-6 left-4 sm:-left-8 twitch-r"
          />
        </div>
      </div>


      <div id="section2" className=" bg-gradient-to-t from-emerald-200 to-emerald-100 relative grid justify-center overflow-x-hidden">
        <div className="absolute top-0 w-screen h-8 lg:h-16 bg-amber-200 rounded-b-full shadow-xl"></div>
        <h1 className="text-4xl 2xl:text-5xl font-bold text-orange-500 text-center font-heading">
          Client favourites:
        </h1>

        <div className="grid lg:grid-cols-3 gap-8 2xl:gap-16 mt-24 place-content-center justify-center max-w-5xl relative">
          <img
            src="/assets/sun.svg"
            alt="smiley face"
            height={60}
            width={60}
            className="absolute -left-44 -top-16 rotate-12"
          />
          <img
            src="/assets/smile.svg"
            alt="smiley face"
            height={60}
            width={60}
            className="absolute -left-56 top-32 -rotate-6 twitch-r"
          />
          <img
            src="/assets/wings.svg"
            alt="smiley face"
            height={60}
            width={60}
            className="absolute -left-44 top-80 rotate-12"
          />
          <img
            src="/assets/flame.svg"
            alt="smiley face"
            height={60}
            width={60}
            className="absolute -left-56 top-128 -rotate-12"
          />


          <img
            src="/assets/smile.svg"
            alt="smiley face"
            height={60}
            width={60}
            className="absolute -right-56 -top-16 rotate-6 twitch-l"
          />
          <img
            src="/assets/wings.svg"
            alt="smiley face"
            height={60}
            width={60}
            className="absolute -right-44 top-32 -rotate-12"
          />
          <img
            src="/assets/flame.svg"
            alt="smiley face"
            height={60}
            width={60}
            className="absolute -right-56 top-80 rotate-12"
          />
          <img
            src="/assets/sun.svg"
            alt="smiley face"
            height={60}
            width={60}
            className="absolute -right-44 top-128 -rotate-12"
          />
          {featured.map((el) => {
            return ( <div key={el.header} className="lg:max-w-80 bg-green-200 rounded-3xl grid max-lg:grid-cols-2 lg:hover:-translate-y-2 lg:hover:rotate-1 transition-transform duration-500 ease-bounce shadow-lg">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  fill
                  style={{objectFit: "cover"}}
                  src={el.img}
                  alt={el.alt}
                  className="rounded-3xl shadow-md"
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


      <div id="section3" className="bg-gradient-to-t from-amber-200 to-amber-100 grid justify-center justify-items-center gap-16 relative">
        <div className="absolute top-0 w-screen h-8 lg:h-16 bg-emerald-200 rounded-b-full shadow-xl"></div>
        <h1 className="text-4xl 2xl:text-5xl font-bold text-emerald-700 text-center font-heading relative">
          Why us ?
          <img 
            src="/assets/heart.svg" 
            alt="heart" 
            height={60} 
            width={60}
            className="absolute top-1/2 -translate-y-1/2 -left-20 -rotate-6 twitch-r-h"
          />
          <img 
            src="/assets/heart.svg" 
            alt="heart" 
            height={60} 
            width={60}
            className="absolute top-1/2 -translate-y-1/2 -right-20 rotate-6 twitch-l-h"
          />
        </h1>

        <div className="bg-orange-200 shadow-xl h-fit w-fit flex max-md:flex-col max-md:rounded-3xl rounded-full max-w-4xl">
          <p className="text-9xl text-orange-700 font-heading font-bold bg-amber-100 max-md:rounded-3xl rounded-full max-md:w-full w-fit md:aspect-square max-md:py-4 px-8 md:px-20 flex items-center text-center">1.</p>
          <div className="px-6 md:pl-8 md:pr-12 max-md:py-6 grid content-center text-xl leading-8 text-stone-600 gap-2">
            <h3 className=" text-2xl font-heading text-orange-700">Freshest flowers around</h3>
            <p>Remember that time your florist snuck a withered rose in your bouquet ? That doesn't happen with us - we use only the freshest, most vibrant flowers from local sellers</p>
          </div>
        </div>

        <div className="bg-red-200 h-fit w-fit flex max-md:flex-col max-md:rounded-3xl rounded-full max-w-4xl shadow-xl">
          <div className="px-6 md:pr-8 md:pl-20 max-md:py-6 grid content-center text-xl leading-8 text-gray-600 gap-2">
            <h3 className=" text-2xl font-heading text-red-700">Friendliest staff in town</h3>
            <p>We really take pride in our people - you'll find them to be the most passionate, careful and outgoing peeps you've ever met</p>
          </div>
          <p className="text-9xl text-red-700 font-heading font-bold bg-red-100 max-md:rounded-3xl rounded-full max-md:w-full w-fit md:aspect-square max-md:py-4 px-8 md:px-16 flex items-center text-center max-md:order-first">2.</p>
        </div>

        <div className="bg-lime-200 h-fit w-fit flex max-md:flex-col max-md:rounded-3xl rounded-full max-w-4xl shadow-xl">
          <p className="text-9xl text-green-700 font-heading font-bold bg-lime-100 max-md:rounded-3xl rounded-full max-md:w-full w-fit md:aspect-square max-md:py-4 px-8 md:px-16 flex items-center text-center">3.</p>
          <div className="px-6 md:pl-8 md:pr-12 max-md:py-6 grid content-center text-xl leading-8 text-gray-600 gap-2">
            <h3 className=" text-2xl font-heading text-green-700">Your wish - our command</h3>
            <p>We will make bouquets for any occasion - from birthdays to weddings. We will write cards and add personalized gifts. We will even deliver your flowers wherever you need !</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-t from-emerald-200 to-emerald-100 min-h-[80vh] max-sm:min-h-screen grid place-items-center place-content-center gap-6 relative">
        <div className="absolute top-0 w-screen h-8 lg:h-16 bg-amber-200 rounded-b-full shadow-xl"></div>
        <h2 className="text-4xl 2xl:text-5xl font-bold text-orange-500 text-center font-heading relative">
          Convinced? Get your bouquet today!
          <img 
            src="/assets/scribble.svg" 
            alt="scribble" 
            height={100} 
            width={100}
            className="absolute -left-32 max-md:left-0 -top-24 max-md:-top-32 -rotate-12 twitch-12"
          />
          <img 
            src="/assets/scribble.svg" 
            alt="scribble" 
            height={80} 
            width={80}
            className="absolute -left-28 max-md:left-0 -bottom-24 max-md:-bottom-56 rotate-[60deg] twitch-60"
          />
          <img 
            src="/assets/scribble.svg" 
            alt="scribble" 
            height={80} 
            width={80}
            className="absolute -right-32 max-md:right-0 -top-24 max-md:-top-32 -rotate-90 twitch-90"
          />
          <img 
            src="/assets/scribble.svg" 
            alt="scribble" 
            height={100} 
            width={100}
            className="absolute -right-32 max-md:right-0 -bottom-24 max-md:-bottom-56 -rotate-12 twitch-12"
          />
        </h2>
        <p className="text-xl 2xl:text-2xl text-center text-slate-600">Reach out now and you'll have your flowers by tomorrow!</p>
        <MainBtn
          href="/"
          text="Get your bouquet"
        />
        {/* <div className="absolute bottom-0 w-full h-24 flex">
          <img src="/assets/heart.svg" alt="heart" height={100} width={100}/>
          <img src="/assets/sun.svg" alt="flower" height={100} width={100}/>
          <img src="/assets/flame.svg" alt="flame" height={100} width={100}/>
          <img src="/assets/smile.svg" alt="smiley face" height={100} width={100}/>
          <img src="/assets/scribble.svg" alt="scribble" height={100} width={100}/>
          <img src="/assets/wings.svg" alt="wings" height={100} width={100}/>
        </div> */}
      </div>

      <div className="bg-emerald-200 !py-6 flex justify-center">
        <a href="https://x.com/eduard_gangan" className="text-xs text-emerald-800 ">Follow me on twitter !</a>
      </div>
    </main>
  )
}

export default Page