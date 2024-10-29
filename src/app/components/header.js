// components/Header.js
import Image from "next/image"; 

export default function Header() {
  return (
    <header className="bg-[#024] text-white text-center py-5">
      <div className="header-content">
        <h1 className="text-3xl font-bold">Gichoya Macharia</h1>
        <h2 className="text-xl">Data Scientist</h2>
        <Image 
                  src="/assets/Images/cover.jpg"
                  alt="A description of the image"
                  width={50}
                  height={30}
                  className="my-4"
              />
      </div>
    </header>
  );
}
