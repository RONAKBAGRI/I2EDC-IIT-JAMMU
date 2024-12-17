import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FlipWords } from "@/components/ui/flip-words";
import { Header } from "@/components/ui/header";


export default function Home() {
  return (
    <div className="max-w-screen min-h-screen max-h-fit flex flex-grow flex-col">
      {/* <Image
        className="dark:invert"
        src="/logo.png"
        alt="I2EDC IIT Jammu logo"
        width={300}
        height={80}
        priority
      />
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Welcome to I2EDC IIT Jammu
      </h1>
      <p className="text-lg text-center text-gray-600 mt-4">
        Innovation and Entrepreneurship Development Center at IIT Jammu
      </p> */}
      <Header />
      <div className="w-screen h-fit mt-24 flex items-center">
        <div className="w-1/4 h-full ml-20">
          <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="bg-white h-full">
                  <img src="/logo.png" alt="hi" className="w-full" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          </Carousel>
        </div>
        <div className="w-3/4 h-full flex flex-col justify-center items-center text-2xl pb-2">
          <div className="flex">
            <FlipWords words={["Innovate","Collaborate","Excel"]} className="text-3xl font-extrabold text-customBlue" />
          </div>
          <p className="text-sky-600 font-semibold">Transforming ideas into reality with I2EDC at IIT Jammu.</p> 
        </div>
      </div>

    </div>
  );
}
