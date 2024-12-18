
import { Header } from "@/components/ui/header";
import { HomeUi } from "@/components/ui/home";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


export default function Home() {
  return (
    <div className="max-w-screen min-h-screen max-h-fit flex flex-grow flex-col">
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
