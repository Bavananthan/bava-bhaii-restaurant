import Image from "next/image";
import image1 from "../public/png/food1.png";
import chef from "../public/png/chef.png";
export default function Home() {
  return (
    <>
      {/* Navbar */}
      {/* <nav className="fixed top-0 left-0 w-full h-16 bg-gray-800 text-white shadow-lg z-50 flex items-center justify-between px-8">
        <h1 className="text-2xl font-bold">Foodie s Delight</h1>
        <ul className="flex space-x-4">
          <li className="hover:text-yellow-500 cursor-pointer">Home</li>
          <li className="hover:text-yellow-500 cursor-pointer">Menu</li>
          <li className="hover:text-yellow-500 cursor-pointer">About</li>
          <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
        </ul>
      </nav> */}

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center">
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <Image
            src={image1}
            alt=""
            className="w-auto absolute z-20 top-5 right-2/3 animate-slideIn"
          ></Image>
          <Image
            src={image1}
            alt=""
            className="w-auto absolute z-20 top-5 -left-1.5 animate-slideIn "
          ></Image>
          <Image
            src={chef}
            alt=""
            className="w-2/5 absolute top-20 lg:top-1/5   right-3.5 "
          ></Image>
          {/* <Image
            src={orange}
            alt=""
            className="w-2/5 absolute top-30 lg:top-1/4 left-1/3"
          ></Image> */}
          <h1 className="text-7xl font-bold animate-fade-in-up z-40 animate-bounceIn">
            Welcome to Foodie s Delight
          </h1>
          <p className="mt-4 text-lg  z-40  animate-bounceIn">
           <b>Indulge in the best culinary experiences crafted with love.</b> 
          </p>
         
          <button className="mt-6 px-6 py-3 bg-orange-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 animate-slideIn z-40 ">
            Explore Menu
          </button>
        </div>
      </section>
    </>
  );
}
