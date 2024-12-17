import Link from "next/link"
import { Title } from "@/components/ui/title"

export const Header = () => {
    return(
        <div className="h-fit w-full flex justify-between pl-4 pr-8 px-2 items-center bg-customBlue shadow-sm shadow-customBlue">
            <div className="">
                <Title />
            </div>
            <div className="flex gap-8 text-white">
                <Link href={"/"}>Home</Link>
                <Link href={"/about-us"}>About Us</Link>
                <Link href={"/core-team"}>Core Team</Link>
                <Link href={"/blogs"}>Blogs</Link>
            </div>
        </div>
    )
}