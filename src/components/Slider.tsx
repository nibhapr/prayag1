import { motion } from "framer-motion";
import { getCollection, type CollectionEntry } from "astro:content";
import { useEffect, useState } from "react";




const Slider = () => {
  const [sliders, setSliders] = useState<CollectionEntry<"slider">[]>([])
  const getSliders = async () => {
    const slider: CollectionEntry<"slider">[] = (
      await getCollection("slider")
    )
    setSliders(slider);
  }
  useEffect(() => {
    getSliders();
  }, []);
  return (
    
    <div className="relative w-full overflow-hidden">
      
      {/* Wrapping div for seamless looping */}
      <motion.div
        className="flex gap-x-4"
        style={{ width: '100%',display: 'inline-flex' }}
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          },
        }}
      >
        {/* Render images once fetched */}
        {sliders ? sliders.map((slider, index) => (
                    <div key={index} className="flex-shrink-0 overflow-x-hidden">
                        <div className="p-2 w-58 h-32 gap-2  object-fit items-center justify-center border-2  border-gray-600  transform transition duration-500 " >
                            {/* Render the image using the fetched URL */}

                            <img src={slider.data.slider} 
                            alt={slider.data.sliderAlt} 
                            style={{ maxWidth: '100%',maxHeight: '100%' }} />
                           
                        </div>
                        
                    </div>
                )): <></>}
        
        {sliders ? sliders.map((slider, index) => (
                    <div key={index+sliders.length} className="flex-shrink-0 overflow-x-hidden">
                        <div className="p-2 w-58 h-32  object-fit items-center justify-center border-2 border-gray-600  transform transition duration-500 " >
                            {/* Render the image using the fetched URL */}
                            <img src={slider.data.slider} alt={slider.data.sliderAlt} style={{ maxWidth: '100%',maxHeight: '100%'  }} />
                        </div>
                    </div>
                )): <></>}
      
      </motion.div>
    </div>
  );
};

export default Slider;
