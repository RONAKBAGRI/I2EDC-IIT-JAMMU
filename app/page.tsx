
import { Header } from "@/components/ui/header";
import { HomeUi } from "@/components/ui/home";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


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
      <HomeUi />
      <InfiniteMovingCards items={[{
        quote:`"The best way to predict the future is to create it." — Peter Drucker`,
        name:"Innovators' Nexus",
        title:"Where Ideas Ignite and Entrepreneurs Emerge"
      },{
        quote:`"An idea is salvation by imagination." — Frank Lloyd Wright`,
        name:"I2EDC Catalyst",
        title:"Fostering Innovation, Building Futures"
      },{
        quote:`"Success is walking from failure to failure with no loss of enthusiasm." — Winston Churchill`,
        name:"IdeaForge @ I2EDC",
        title:"Turning Dreams into Disruptive Realities"
      },{
        quote:`"Innovation is seeing what everybody has seen and thinking what nobody has thought." — Dr. Albert Szent-Györgyi`,
        name:"Entrepreneurial Edge",
        title:"Innovate. Build. Scale."
      }]} direction="left" speed="normal" pauseOnHover={true} className="w-full" />
    </div>
  );
}
