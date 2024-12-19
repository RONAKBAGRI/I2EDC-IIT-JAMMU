import Image from "next/image"


export const Title = () => {
    return(
        <div className="h-full w-3/5 flex items-center">
           <div className="w-16 h-16 md:w-24 md:h-24 relative">
            <Image
                src="/icon.png" // Replace with your image path
                alt=""
                layout="fill"
                objectFit="contain" // Ensures the image maintains its aspect ratio
                className="rounded" // Add any additional styles if needed
            />
            </div>
           <h1 className="font-medium md:font-bold text-white text-sm md:text-2xl pb-2">Innovation and Entrepreneurship Development Centre</h1> 
        </div>
    )
}