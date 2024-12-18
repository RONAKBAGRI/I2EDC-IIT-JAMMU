import Link from "next/link"
import { Title } from "@/components/ui/title"

export const Header = () => {
    return(
        <div className="h-fit w-screen flex justify-between p-1 md:pl-4 md:pr-8 md:px-2 items-center bg-customBlue shadow-sm shadow-customBlue">
            <Title />
            <div className="flex gap-2 w-3/5 md:w-1/2 justify-end md:gap-8 text-white text-sm font-light md:font-normal md:text-md">
                <Link href={"/"}>Home</Link>
                <Link href={"/about-us"}>About Us</Link>
                <Link href={"/core-team"}>Core Team</Link>
                <Link href={"/blogs"}>Blogs</Link>
            </div>
        </div>
    )
}