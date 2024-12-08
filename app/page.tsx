"use client"

import Image from "next/image";
import image1 from "../public/png/food1.png"
import card from "../public/png/Card.png"
import orange from "../public/png/orange.png"



export default function Home() {
  return (
    <>
    <div className="relative h-screen  ">
<Image src= {image1}alt="" className="w-auto absolute z-20 right-2/3 "  ></Image>
{/* <Image src= {card}alt="" className="w-1/5 absolute bottom-0 left-0  top-30 lg:top-0.5 " ></Image> */}
<Image src= {card}alt="" className="w-1/5 absolute   z-30 top-20   lg:top-80" ></Image>
<Image src= {orange}alt="" className="w-2/5 absolute top-30 lg:top-1/2 left-2/3" ></Image>
<Image src= {orange}alt="" className="w-2/5 absolute top-20 lg:top-1/5   right-1.5 " ></Image>
<Image src= {orange}alt="" className="w-2/5 absolute top-20 lg:top-1/5   left-1.5 " ></Image>
<Image src= {image1}alt="" className="w-auto absolute z-20 left-2/3"  ></Image>

    </div>
    </>
  );
}
