import Image from "next/image"
import React from "react"
import { HiArrowNarrowRight, HiChevronDoubleRight } from "react-icons/hi"
import { FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa'
import AboutWe from "@/lib/aboutWe"
import TypedAnim from "@/lib/forTyped"

export default function HomeSection() {
    return (
        <div className="lg:px-20 2xl:container px-6">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-40 pt-8 pb-8 shadow-lg shadow-black/50">
                <div className="flex flex-wrap pb-8">
                    <div className="px-6">
                        <a className="text-blue-300 lg:text-xl text-md font-firaCode flex flex-wrap space-x-3 ">
                            <h1 className="pt-1 text-teal-500"><HiArrowNarrowRight /></h1>
                            <h1 className="font-firaCode font-semibold lg:text-xl text-md"><span className="text-blue-300 inline">ceres </span><span className="inline text-blue-800">git:(</span><span className="inline text-red-600">master</span><span className="text-blue-800">)</span> $ <span className="inline-block text-white">./welcome.sh</span></h1>
                        </a>
                        
                    </div>
                    <div className="w-full  self-center px-6" align="center">
                        <Image src={"/assets/bumi.webp"} width={400} height={400} alt="Maskot ITC" className=""/>
                    </div>
                    <div className="w-full text-center px-6">
                        <h1 className="font-rubikFont lg:text-4xl font-bold text-shadowBox text-lg">Welcome to website IT Club</h1>
                        <h3 className="font-firaCode text-sm lg:text-2xl italic text-gray-400 lg:mb-10 mb-5">IT クラブのウェブサイトへようこそ</h3>
                    </div>
                </div>

                <div className="px-6">
                    <a className="text-blue-300 lg:text-xl text-md font-firaCode flex flex-wrap space-x-3 ">
                        <h1 className="pt-1 text-teal-500"><HiArrowNarrowRight /></h1>
                        <h1 className="font-firaCode font-semibold lg:text-xl text-md"><span className="text-blue-300 inline">ceres </span><span className="inline text-blue-800">git:(</span><span className="inline text-red-600">master</span><span className="text-blue-800">)</span> $ <span className="inline-block text-white">./files about-we.txt</span></h1>
                    </a>    
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 lg:text-lg text-sm">
                        <AboutWe />
                    </div>
                    <div className="w-full lg:w-1/2 pt-5 px-6">
                        <h1 className="font-firaCode lg:text-3xl font-bold text-shadowBox text-lg">Hello 👋, we are itclub</h1>
                        <a className="font-firaCode text-sm lg:text-2xl text-gray-400 lg:mb-10 mb-5 flex flex-wrap space-x-3">
                            <h1 className="pt-1"><HiChevronDoubleRight /></h1>
                            <TypedAnim />
                        </a>
                        <p className="font-firaCode text-sm lg:text-lg font-thin text-gray-300 lg:w-11/12 mb-10">Ekstrakurikuler ini bertujuan untuk mengasah bakat dan minat siswa didalam bidang Infromatika dan teknologi seperti mempelajari bahasa pemograman, membuat website, E-Sport, membahas seputar teknologi dan komputer. Ekskul ini juga biasa dilakukan untuk persiapan olimpiade komputer nasional atau lomba-lomba seputar teknologi dan informatika.</p>
                        <div className="grid grid-cols-8 lg:w-8/12">
                            <a className={`bg-black py-5 px-5`}></a>
                            <a className={`bg-red-500 py-5 px-5`}></a>
                            <a className={`bg-teal-500 py-5 px-5`}></a>
                            <a className={`bg-yellow-500 py-5 px-5`}></a>
                            <a className={`bg-blue-500 py-5 px-5`}></a>
                            <a className={`bg-purple-500 py-5 px-5`}></a>
                            <a className={`bg-blue-500 py-5 px-5`}></a>
                            <a className={`bg-white py-5 px-5`}></a>
                            <a className={`bg-gray-500 py-5 px-5`}></a>
                            <a className={`bg-red-500 py-5 px-5`}></a>
                            <a className={`bg-teal-500 py-5 px-5`}></a>
                            <a className={`bg-yellow-500 py-5 px-5`}></a>
                            <a className={`bg-blue-500 py-5 px-5`}></a>
                            <a className={`bg-purple-500 py-5 px-5`}></a>
                            <a className={`bg-blue-500 py-5 px-5`}></a>
                            <a className={`bg-white py-5 px-5`}></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
};