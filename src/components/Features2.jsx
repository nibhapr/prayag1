import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import feature5 from "../images/feature5.jpg";
import feature6 from "../images/feature6.jpg";
import { CheckArrowIcon } from "../components/icons/CheckArrowIcon";

const Features2 = () => {
  const ref = useRef(null);
  const isIview = useInView(ref, { once: true });
  const maincontroll = useAnimation();
  useEffect(() => {
    if (isIview) {      
      maincontroll.start("visible");
    }
   
  }, [isIview]);
  return (
    <section
      ref={ref}
      className="bg-bgDark2 mb-12 mt-24 w-full pt-4 sm:mt-24 lg:my-68 lg:mb-24"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={maincontroll}
        transition={{ duration:0.3,
           delay: 0.5,
           ease: [0, 0.71, 0.2, 1.01],
           scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
          }}
      >
        <div className="mx-auto flex w-11/12 flex-wrap items-center md:pl-4 xl:w-[1300px] xl:pl-16 xl:pr-16 2xl:w-[1450px]">
          <div className="order-last mx-auto flex w-11/12 flex-wrap justify-center sm:w-3/4 sm:pr-8 lg:order-first lg:-mx-4 lg:w-1/2">
            <div className="mb-8 flex w-full flex-col justify-center px-2 md:pl-8 lg:mb-0 lg:pl-16">
              <div className="mb-4 rounded py-3 md:pl-3 md:pr-20 lg:pr-12">
                <img
                  src={feature5.src}
                  alt="Feature image 5"
                  className="main-border-gray rounded-xl"
                />
              </div>
              <div className="rounded py-3 md:pl-20 md:pr-2 lg:pl-12">
                <img
                  src={feature6.src}
                  alt="Feature image 6"
                  className="main-border-gray rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="mb-12 w-full lg:mb-0 lg:w-1/2 xl:pl-8">
            <div className="lg:w-unset mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:mx-auto">
              <span className="block-subtitle dark:text-white">What we Do ?</span>
              <h1 className="block-big-title mb-8 mt-6 text-4xl font-bold text-blue lg:text-5xl dark:text-green">
                Let us Build the Future
              </h1>

              <ul className="text-primaryText mb-6">
                <li className="mb-4 flex dark:text-green">
                  <CheckArrowIcon />
                  <span>Buisiness consulting & Mentorship</span>
                </li>
                <li className="mb-4 flex dark:text-green">
                  <CheckArrowIcon />
                  <span>Project execution</span>
                </li>
                <li className="mb-4 flex dark:text-green">
                  <CheckArrowIcon />
                  <span>
                    Access to resource like legal and financial advice
                  </span>
                </li>
                <li className="mb-4 flex dark:text-green">
                  <CheckArrowIcon />
                  <span>
                    Complete office setup & Mechinery supply for new ventures
                  </span>
                </li>
                <li className="mb-4 flex dark:text-green">
                  <CheckArrowIcon />
                  <span>Co-working space</span>
                </li>
                <li className="mb-4 flex dark:text-green">
                  <CheckArrowIcon />
                  <span>
                    Workshops and collaborative enviorment for early stage
                    Buisiness
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Features2;
