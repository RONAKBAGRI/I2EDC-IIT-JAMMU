import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-16">
      <Image
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
      </p>
    </div>
  );
}
