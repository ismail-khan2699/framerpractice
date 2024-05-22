"use client";

import { motion } from "framer-motion";
import Navbar from "./Components/navbar";
import Motiondiv from "./Components/motiondiv";

export default function Home() {
  const imageData = [
    {
      id: 1,
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-1.jpg",
      alt: "Team Member 1",
      srcalt:"https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-2.jpg",
      alt2: "Team Member 1",
    },
    {
      id: 2,
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-2.jpg",
      alt: "Team Member 2",
      srcalt: "https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-3.jpg",
      alt2: "Team Member 3",
    },
    {
      id: 3,
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-3.jpg",
      alt: "Team Member 3",
      srcalt: "https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-1.jpg",
      alt2: "Team Member 1",
    },
  ];
  return (
    <>
    <Navbar/>
    <div>
    <Motiondiv >
    <section className="py-5 bg-white sm:py-6 lg:py-5">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">People who made it successful</h2>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
        {imageData.map((image) => (
        <div key={image.id} className="w-full p-4 relative overflow-hidden">
          <motion.img className="w-full object-cover object-center " src={image.src} alt={image.alt} />
          <motion.img
          initial={{ x: -100, y: 0, opacity: 0,}}
          animate={{ x: 0, y: 0, opacity: 1,}}
          transition={{ duration: 1.0, delay: 0.5, type: "default" }}
          className=" w-full p-4 object-cover object-center absolute inset-0" src={image.srcalt} alt={image.alt2} />
        </div>
      ))}
        </div>
        <Motiondiv>
        <div className="mt-8 text-center md:mt-16">
            <a href="#" title="" className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700" role="button"> Join our team </a>
        </div>
        </Motiondiv>
    </div>
</section>
    </Motiondiv>

    </div>
    </>
  );
}
