import React from 'react';
import adv from './video/adv.jpg';
import outdoors from './video/outdoors.png';
import food from './video/food.jpg'; 
import culture from './video/culture.jpg'; 
import beach from './video/beach.jpg'; 



const interests = [
  { title: 'Outdoors', image: outdoors }, // fixed line
  { title: 'Food', image: food }, // fixed line
  { title: 'Culture', image: culture }, // fixed line
  { title: 'Beach', image: beach }, // fixed line
  
];


const InterestSection = () => {
  return (
    <div className="px-6 py-10 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold ml-1">Find things to do by interest</h2>
      <p className="text-gray-500 mt-1 mb-6 ml-1">Whatever you're into, we’ve got it</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {interests.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
              <p className="text-white font-bold text-lg">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
<div className="hover:z-10x bg-white/5 rounded-xl border-1 border-cyan-400 hover:scale- transition hover:">
<div className=" p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 ">
       <img
  src={adv}
  alt="Taste the soul of Türkiye"
  className="h-60  object-cover rounded-md"
/>

        <div className="flex-1  ">
          <span className="text-xs bg-gray-300 text-gray-700 px-2 py-1 rounded-md">In partnership with UAE</span>
         <h3 className="text-xl font-bold mt-2 text-white">Savor the Flavors of Arabia</h3>
<p className="mt-1 text-white">Indulge in authentic Arabian cuisine with TravGo — where every dish tells a story of heritage and spice.</p>

        </div>
        <button className="bg-white border  border-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 hover:text-black transition text-black">
          Read now
        </button>
      </div>
    </div>
    </div>
  );
};

export default InterestSection;
