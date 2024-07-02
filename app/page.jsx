import MainBtn from "@/components/MainBtn"
import Nav from "@/components/Nav"
import Image from "next/image"

const featured = [
  {
    img: "/assets/placeholder.jpg",
    alt: "placeholder",
    header: "Featured item",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit enim voluptatibus velit eligendi debitis neque."
  },
  {
    img: "/assets/placeholder.jpg",
    alt: "placeholder",
    header: "Featured item",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit enim voluptatibus velit eligendi debitis neque."
  },
  {
    img: "/assets/placeholder.jpg",
    alt: "placeholder",
    header: "Featured item",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit enim voluptatibus velit eligendi debitis neque."
  },
]

const page = () => {
  return (
    <main className='[&>*]:px-6 md:[&>*]:px-24 [&>*]:py-32 2xl:[&>*]:px-56'>
      <Nav/>
      <div className='bg-neutral-200 min-h-screen grid md:grid-cols-2 content-center gap-16'>
        <div className="grid gap-6 content-center">
          <h1 className="text-4xl 2xl:text-5xl font-bold text-neutral-800">Awesome header for this site</h1>
          <h2 className="text-xl 2xl:text-2xl text-neutral-700">Short description for this shop, their mission, maybe their dedication to great customer service</h2>
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


      <div className=" bg-neutral-100 grid justify-center">
        <h1 className="text-4xl 2xl:text-5xl font-bold text-neutral-800 text-center">Featured stuff:</h1>

        <div className="grid lg:grid-cols-3 gap-8 2xl:gap-16 mt-24 place-content-center justify-center max-w-5xl">
          {featured.map((el) => {
            return ( <div key={el.header} className="max-w-80 bg-neutral-200 rounded-3xl">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  fill
                  style={{objectFit: "cover"}}
                  src={el.img}
                  alt={el.alt}
                  className="rounded-3xl"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-2xl text-neutral-800">{el.header}</h3>
                <p className="text-base text-neutral-600 pt-1">{el.desc}</p>
              </div>
            </div> )
          })}
        </div>
      </div>


      <div className="bg-neutral-200 grid justify-center gap-16">
        <h1 className="text-4xl 2xl:text-5xl font-bold text-neutral-800 text-center">Why us ?</h1>

        <div className="bg-neutral-300 h-fit w-fit flex rounded-full max-w-4xl">
          <p className="text-9xl text-neutral-800 font-bold bg-neutral-100 rounded-full aspect-square px-12 flex items-center text-center">1.</p>
          <div className="pl-8 pr-12 flex items-center text-xl">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam possimus vel ipsa adipisci officiis rerum pariatur labore soluta incidunt, ipsam, accusantium unde odio illum quibusdam!</p>
          </div>
        </div>

        <div className="bg-neutral-300 h-fit w-fit flex rounded-full max-w-4xl">
          <div className="pr-8 pl-12 flex items-center text-xl">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam possimus vel ipsa adipisci officiis rerum pariatur labore soluta incidunt, ipsam, accusantium unde odio illum quibusdam!</p>
          </div>
          <p className="text-9xl text-neutral-800 font-bold bg-neutral-100 rounded-full aspect-square px-12 flex items-center text-center">2.</p>
        </div>

        <div className="bg-neutral-300 h-fit w-fit flex rounded-full max-w-4xl">
          <p className="text-9xl text-neutral-800 font-bold bg-neutral-100 rounded-full aspect-square px-12 flex items-center text-center">3.</p>
          <div className="pl-8 pr-12 flex items-center text-xl">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam possimus vel ipsa adipisci officiis rerum pariatur labore soluta incidunt, ipsam, accusantium unde odio illum quibusdam!</p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-300 min-h-[80vh] grid place-items-center place-content-center gap-6 relative">
        <h2 className="text-4xl 2xl:text-5xl font-bold text-neutral-800 text-center">Awesome open-ended question</h2>
        <p className="text-xl 2xl:text-2xl text-center text-neutral-700">Short supporting encouraging user to take action</p>
        <MainBtn
          text="Call to action"
          href="/"
        />
        <div className="absolute bottom-0 w-full h-32 bg-neutral-500">
          this strip will be filled with svgs
        </div>
      </div>

      <div className="bg-neutral-600 !py-6 flex justify-center">
        <a href="https://x.com/eduard_gangan" className="text-xs text-neutral-300 ">Property of Eduard Gangan, 2024</a>
      </div>
    </main>
  )
}

export default page