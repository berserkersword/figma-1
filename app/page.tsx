'use client'
import Button from "@/components/button";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Illustration from '../public/illus.png';
import { serviceData, sectionsData } from './datas';
import Card from "@/components/card";
import Shape from '../public/graph.png'
import { motion } from 'framer-motion'
import OutLineButton from "@/components/outLineButton";
import Footer from "@/components/footer";
import Section from "@/components/Section";
import BigCard from "@/components/bigCard";

export default function Home() {

  return (
    <main className="">
      {/*       Navbaa         */}
      <Navbar />

      {/*       Main section         */}
      <main className="flex justify-center items-center mt-8 p-3 min-h-[100vh]">
        <div className="wrap container flex md:flex-row lg:flex-row sm:flex-col">
          {/*                         main info                      */}
          <div className="md:w-1/2 info p-10 gap-10">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visibile: { opacity: 1, y: 0 }
              }}
              initial='hidden'
              animate='visibile'

              className="lg:text-6xl sm:text-4xl font-black m-6 mt-10">
              Virtual healthcare<br />
              for you
            </motion.h1>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visibile: { opacity: 1, y: 0 }
              }}
              initial='hidden'
              animate='visibile'
              transition={{ delay: 0.25, duration: 0.5 }}

              className="lg:text-3xl sm:text-xl m-6 font-extralight text-gray-500">
              Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
            </motion.h1>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visibile: { opacity: 1, x: 0 }
              }}
              initial='hidden'
              animate='visibile'
              transition={{ delay: 0.25, duration: 0.5 }}
              className="flex sm:justify-center md:justify-start lg:justify-start"
            >
              <Button text="Consult today" />
            </motion.div>
          </div>
          {/*                         main info                      */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visibile: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            animate='visibile'
            transition={{ delay: 0.25, duration: 0.75 }}

            className="md:w-1/2 illustration">
            <Image src={Illustration} alt={'asdd'} />

          </motion.div>
        </div>
      </main>
      <div className="absolute" style={{ zIndex: -1 }}>
        <Image src={Shape} width={1000} height={500} alt='asd' />
      </div>
      {/*       Servicee       */}

      <section className="flex justify-center  mt-8 p-3 min-h-[100vh]" style={{ zIndex: 5 }}>

        <div className="wrap container flex flex-col items-center h-full">

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visibile: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            animate='visibile'
            transition={{ delay: 0.25, duration: 0.5 }}

            className="text-center text-4xl font-semibold mb-6">
            Our service
          </motion.h1>

          <hr className="w-[5rem] h-[2px] bg-black" />

          <motion.h1
            variants={{
              hidden: { fontWeight: 0 },
              visibile: { fontWeight: 200 }
            }}
            initial='hidden'
            animate='visibile'
            transition={{ delay: 0.25, duration: 0.5 }}

            className="text-xl font-extralight text-center px-[7rem] mt-6">
            We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
          </motion.h1>

          <div className="cards grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 container px-16 gap-4 mt-[2rem]">
            {serviceData.map(
              card => {
                return (
                  <Card
                    key={card.key}
                    title={card.title}
                    text={card.text.slice(0, 150) + ' ...'}
                    img={card.img}
                  />
                )
              }
            )}
          </div>

          <div className="mt-6">
            <OutLineButton text="Learn more" url={'/'} />
          </div>
        </div>
      </section>
      <div className="mt-10">
        {
          sectionsData.map(item => {
            return <Section
              img={item.img}
              key={item.key}
              title={item.title}
              text={item.text}
              url={item.url} reverse={item.reverse} btnText={item.btnText} />
          })
        }
      </div>

      <BigCard />


      <Footer />
    </main>
  );
}
