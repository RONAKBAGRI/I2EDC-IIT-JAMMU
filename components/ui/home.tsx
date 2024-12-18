import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";

export const HomeUi = () => {
    return (
        <div className="w-full h-fit my-8 md:mt-24 md:mb-12 flex flex-col gap-8 lg:flex-row items-center">
        <div className="w-1/2 md:w-1/4 h-full ml-4 md:ml-20">
          <Carousel>
          <CarouselContent>
            <CarouselItem >
                <div className="bg-white h-full">
                  <Image src="/img1.png" alt="hi" className="w-full h-full rounded-lg" />
                </div>
            </CarouselItem>
            <CarouselItem >
                <div className="bg-white h-full">
                  <Image src="/img2.png" alt="hi" className="w-full h-full rounded-lg" />
                </div>
            </CarouselItem>
            <CarouselItem >
                <div className="bg-white h-full">
                  <Image src="/img3.png" alt="hi" className="w-full h-full rounded-lg" />
                </div>
            </CarouselItem>
            <CarouselItem >
                <div className="bg-white h-full">
                  <Image src="/img4.png" alt="hi" className="w-full h-full rounded-lg" />
                </div>
            </CarouselItem>
            <CarouselItem >
                <div className="bg-white h-full">
                  <Image src="/img5.png" alt="hi" className="w-full h-full rounded-lg" />
                </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          </Carousel>
        </div>
        <div className="w-3/4 h-full flex flex-col justify-center items-center text-2xl pb-2 pl-4">
          <div className="flex">
            <FlipWords words={["Innovate","Collaborate","Excel"]} className="text-3xl font-extrabold text-customBlue" />
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <p className="text-sky-600 font-semibold text-center">Transforming ideas into reality with I2EDC at IIT Jammu.</p> 
            <div className="text-sm flex flex-row gap-4">
              <button className="bg-sky-200 text-sky-600 hover:bg-sky-600 hover:text-white px-2 py-1 rounded-lg">About us</button>
              <button className="bg-customBlue/20 text-customBlue hover:bg-customBlue hover:text-white px-2 py-1 rounded-lg">Core Team</button>
            </div>
          </div>
        </div>
      </div>
    )
}