"use client"
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Hamburger from 'hamburger-react';

const navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className="bg-white border-gray-200 w-full mt-6">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visibile: { opacity: 1, y: 0 }
                        }}
                        initial='hidden'
                        animate='visibile'
                        transition={{ delay: 0.25, duration: 0.5 }}
                        className='w-[40px] h-[40px] flex bg-[#458FF6] rounded-[50%] text-center justify-center items-center text-xl font-mulish font-black text-[#fff]'
                    >
                        T

                    </motion.div>
                    <motion.span
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visibile: { opacity: 1, y: 0 }
                        }}
                        initial='hidden'
                        animate='visibile'
                        transition={{ delay: 0.25, duration: 0.5 }}
                        className="self-center text-2xl font-semibold text-gray-900  font-mulish"
                    >
                        Trafalgar
                    </motion.span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <Hamburger toggled={toggle} onToggle={setToggle} />
                </button>
                <div className={`w-full md:block md:w-auto ${toggle ? '' : 'hidden'}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <motion.li
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visibile: { opacity: 1, y: 0 }
                            }}
                            initial='hidden'
                            animate='visibile'
                            transition={{ delay: 0.25, duration: 0.5 }}

                        >
                            <Link href="/" className="block py-2 px-3  rounded md:bg-transparent  md:p-0  " aria-current="page">Home</Link>
                        </motion.li>
                        <motion.li
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visibile: { opacity: 1, y: 0 }
                            }}
                            initial='hidden'
                            animate='visibile'
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <Link href="/" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Find doctor</Link>
                        </motion.li>
                        <motion.li
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visibile: { opacity: 1, y: 0 }
                            }}
                            initial='hidden'
                            animate='visibile'
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            <Link href="/" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Apps</Link>
                        </motion.li>
                        <motion.li
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visibile: { opacity: 1, y: 0 }
                            }}
                            initial='hidden'
                            animate='visibile'
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <Link href="/" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Testimonals</Link>
                        </motion.li>
                        <motion.li
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visibile: { opacity: 1, y: 0 }
                            }}
                            initial='hidden'
                            animate='visibile'
                            transition={{ delay: 0.9, duration: 0.5 }}
                        >
                            <Link href="/" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About us</Link>
                        </motion.li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default navbar