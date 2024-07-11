import { motion } from "framer-motion";
import PrimaryBtnReact from "@/components/ui/buttons/primary-button";
interface HeroProps {
  title: string
  subTitle: string
  src?: ImageMetadata;
  alt?: string;
 
}

const HeroSection = ({
  
  title,
  subTitle,
 
  src,
  alt
  }: HeroProps) => {
    return <>
<section
  className="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 sm:py-24 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full "
>
  
  <motion.div style={{marginRight:'8px'}}initial={{y: -200, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1, delay: 0.2}}>
  <p className="text-neutral-700 dark:text-neutral-400 text-sm font-bold text-center lg:text-left mb-4">Welcome to startup Garage</p> 
  <h1 className="block text-balance  text-4xl font-bold tracking-tight mb-8 text-blue text-center lg:text-left dark:text-green sm:text-4xl lg:text-6xl lg:leading-tight">
  {title}  
  </h1>
  {subTitle &&
  <p className="mt-3 text-pretty text-lg  my-4 leading-relaxed text-neutral-700 dark:text-neutral-400 lg:w-4/5 text-center lg:text-left">
    {subTitle}
  </p>
  }
    <div className="mt-7 grid w-full gap-3 sm:inline-flex">
    
    <PrimaryBtnReact title="Contact Us" url="/contact" />
     
    </div>
  </motion.div>
  <motion.div initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 0.6, duration: 0.8, ease: "easeInOut"}} className="flex w-full">
  <div className="top-12 overflow-hidden">
 
	{src && alt &&
	<img
        src={src.src}
        alt={alt}
        className="h-full w-full scale-110 object-cover object-center"
        draggable={"false"}
        loading={"eager"}
        
	 />
	}
  
  </div>
 
  </motion.div>
  
</section>
</>
}

export default HeroSection