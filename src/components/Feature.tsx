import { motion } from "framer-motion";
import { useState } from "react";
const Feature = ({
  icon = "../icons/temp.svg",
  title = "Title",
  body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.",
}) => {  
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="flex flex-col relative cursor-pointer text-white  mx-auto ">
        <motion.div
          animate={{ margin: isHovered ? "0px" : "12px" }}
          transition={{ duration: 0.3 }}
          className="bg-green shadow-2xl w-full h-full absolute rounded-lg"
        ></motion.div>
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.8 }}
          className="border-2 border-gray-400 w-full h-32  bg-blue  rounded-lg p-4 relative flex justify-between"
        >
          <p className="font-extrabold">Buisiness consulting and Mentorship</p>
         
        </motion.div>
      </div>
    </>
  );
};

export default Feature;
