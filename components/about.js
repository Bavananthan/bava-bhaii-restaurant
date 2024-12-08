import Image from "next/image";
import chef from "../public/png/chef.png";
export default function About() {
    return (
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image src={chef} alt="chef" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:ml-12">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600">
              At Foodies Delight, we believe in serving food that not only tastes amazing but also nourishes your body.
              Our chefs use only the freshest ingredients to create dishes you ll love.
            </p>
          </div>
        </div>
      </section>
    );
  }
  