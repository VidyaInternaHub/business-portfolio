import Image from "next/image"

interface Props {
    title: string,
    imgUrl: string,
}

export default function Hero({title, imgUrl}: Props) {
    return (
        <div className="bg-gradient-blue-navy-secondary">
          <div className="max-w-[1190px] mx-auto px-4 py-12 md:px-12">
            <div className="flex flex-col gap-4 text-white md:gap-6 lg:gap-8">
              <h1 className="text-2xl text-center font-bold md:text-4xl lg:text-6xl">
                {title}
              </h1>
              <Image
                src={`/images/${imgUrl}`}
                width={1420}
                height={1080}
                className="w-full h-full rounded-md shadow-lg"
                alt={imgUrl}
              />
            </div>
          </div>
        </div>
    )
}