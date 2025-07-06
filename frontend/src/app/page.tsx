'use client';

import { useEffect, useState } from 'react';
import {
  Nunito, Playfair_Display, Roboto_Mono, Pacifico, Orbitron, Lora,
  Bebas_Neue, Raleway, Source_Serif_4, Merriweather, Quicksand
} from 'next/font/google';
import { FaArrowLeft, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'; // or 'fa' for older Twitter icon
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from 'react-icons/fa';

const nunito = Nunito({ subsets: ['latin'], weight: '400' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: '400' });
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' });
const orbitron = Orbitron({ subsets: ['latin'], weight: '400' });
const lora = Lora({ subsets: ['latin'], weight: '400' });
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' });
const raleway = Raleway({ subsets: ['latin'], weight: '400' });
const sourceSerif = Source_Serif_4({ subsets: ['latin'], weight: '400' });
const merriweather = Merriweather({ subsets: ['latin'], weight: '400' });
const quicksand = Quicksand({ subsets: ['latin'], weight: '400' });

const words = [
  { text: 'designer', font: bebas.className },
  { text: 'architect', font: lora.className },
  { text: '3D artist', font: orbitron.className },
  { text: 'writer', font: playfair.className },
  { text: 'psychologist', font: raleway.className },
  { text: 'photographer', font: nunito.className },
  { text: 'teacher', font: sourceSerif.className },
  { text: 'editor', font: merriweather.className },
  { text: 'musician', font: pacifico.className },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseBeforeDelete = 1000;
  const pauseBeforeType = 500;

  useEffect(() => {
    const currentWord = words[index].text;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText !== currentWord) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayText !== '') {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, pauseBeforeType);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <>
      <section className={`p-5 text-white flex flex-col justify-between min-h-screen ${nunito.className} bg-cover bg-center transition-all duration-700`}
      >
        <div className="flex justify-between">
          <img src="/assets/logo.png" className="w-20" alt="logo" />
          <button className="py-1 px-4 bg-black rounded-lg font-bold">Sign in</button>
        </div>

        <div className="mb-10">
          <p className="text-9xl">
            Find Your,&nbsp;
            <span
              className={`border-r-1 border-white animate-pulse ${words[index].font} transition-opacity duration-500`}
              style={{ opacity: displayText ? 1 : 0.7 }}
            >
              {displayText}
            </span>
          </p>
          <p className="text-9xl">in Sri Lanka.</p>
          <p className="mt-5 text-2xl"><b>SriLink</b> connects you with reliable service providers across</p>
          <p className="text-2xl">Sri Lanka — instantly, effortlessly, and in one place.</p>
          <button className="relative flex items-center gap-4 bg-white text-black font-bold py-3 px-6 mt-5 rounded-lg pl-6 overflow-hidden">
            <span className="absolute left-0 top-0 h-full w-1 bg-red-500"></span>
            <span className="absolute left-1 top-0 h-full w-1 bg-yellow-300"></span>
            <span className="absolute left-1 top-0 h-full w-1 bg-orange-500"></span>
            <span className="absolute left-3 top-0 h-full w-1 bg-green-700"></span>

            Find Services — It's Free !
            <img src="/assets/lotus.jpg" className='w-8' alt=""></img>
          </button>
          <div className='flex justify-center'>
            <FaArrowAltCircleDown className='text-4xl' />
          </div>
          <div className='flex fixed right-10 bottom-5 gap-1 text-3xl text-black justify-end'>
            <FaFacebookF className='bg-white border rounded pt-1' />
            <FaInstagram className='bg-white border rounded p-0.5' />
            <FaLinkedinIn className='bg-white border rounded p-0.5' />
            <FaXTwitter className='bg-white border rounded p-0.5' />
          </div>
        </div>
      </section>


      <section className='grid min-h-screen grid-cols-5 bg-white  text-black'>
        <div className='h-82 flex items-center justify-center'>
          <p className={`${nunito.className} text-4xl font-black`}>if you're a</p>
        </div>
        <div className="h-82 bg-[url('/assets/designer.jpg')] bg-cover border-1 border-white bg-center flex items-center justify-center">
          <p className='text-3xl font-bold text-white'>Designer</p>
        </div>
        <div className="h-82 bg-[url('/assets/architecture.jpg')] bg-cover border-1 border-white bg-center flex items-center justify-center">
          <p className='text-3xl font-bold text-white'>Architecture</p>
        </div>
        <div className="h-82 bg-[url('/assets/3dartist.jpg')] bg-cover border-1 border-white bg-center flex items-center justify-center">
          <p className='text-3xl font-bold text-white'>3D Artist</p>
        </div>
        <div className="h-82 bg-[url('/assets/writer.jpg')] bg-cover border-1 border-white bg-center flex items-center justify-center">
          <p className='text-3xl font-bold text-white'>Writer</p>
        </div>
        {/* //////// */}
        <div className="h-82 bg-[url('/assets/psychologist.jpg')] bg-cover border-1 border-white bg-center flex items-center justify-center">
          <p className='text-3xl font-bold text-white'>Psychologist</p>
        </div>
        <div className="h-82 bg-[url('/assets/photograper.jpg')] bg-cover border-1 border-white bg-center flex items-center justify-center">
          <p className='text-3xl font-bold text-white'>Photographer</p>
        </div>
        <div className='h-82 flex items-center justify-center'>
          <p className={`px-5 ${nunito.className} text-4xl font-black`}>or offer any <br />service, create <br /> your free <br /> portfolio on <br />SriLink.</p>
        </div>
        <div className="h-82 bg-[url('/assets/teacher.jpg')] bg-cover border-1 border-white bg-center flex items-center justify-center">
          <p className='text-3xl font-bold text-white'>Teacher</p>
        </div>
        <div className="h-82 bg-[url('/assets/network.jpg')] bg-cover border-1 border-white bg-center flex items-center justify-center">
          <p className='text-3xl font-bold text-white'>Network Expert</p>
        </div>
        {/* //////// */}
        <div className="h-82 bg-[url('/assets/musician.jpg')] bg-cover border-1 border-white bg-center flex items-center justify-center">
          <p className='text-3xl font-bold text-white'>Musician</p>
        </div>
        <div className="h-82 bg-[url('/assets/se.jpg')] bg-cover border-1 border-white bg-center flex items-center justify-center">
          <p className='text-3xl font-bold text-white'>Software Engineer</p>
        </div>
        <div className="h-82 bg-[url('/assets/veditor.jpg')] bg-cover border-1 border-white bg-center flex items-center justify-center">
          <p className='text-3xl font-bold text-white'>Video Editor</p>
        </div>
        <div className="h-82 bg-[url('/assets/painter.jpg')] bg-cover border-1 border-white bg-center flex items-center justify-center">
          <p className='text-3xl font-bold text-white'>Painter</p>
        </div>
        <div className='h-82 flex items-center'>
          <p className={`px-5 ${nunito.className} text-4xl font-black`}>Start <br />getting <br />clients <br />today. <br /><FaArrowRight className='mt-5' /></p>
        </div>
      </section>


      <section className='grid min-h-screen bg-white grid-cols-5 text-black'>
        <div className='h-82 border-1 border-gray-200 flex items-center justify-center'>
          <p className={`${nunito.className} text-4xl font-black`}>1000+ <br />Services <br /> Across the <br />Island </p>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center justify-center'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center justify-center'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center justify-center'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center justify-center'>
        </div>

        {/*////// */}

        <div className='h-82 border-1 border-gray-200 flex items-center justify-center'>
        </div>
        <div className='h-82 border-1 px-10 border-gray-200 flex items-center justify-center'>
          <p className={`${nunito.className} font-black`}>From the heart of Colombo to the peaceful villages of Jaffna, SriLink connects you with trusted professionals in every corner of Sri Lanka.</p>
        </div>
        <div className='h-82 border-1 px-10 border-gray-200 flex items-center justify-center'>
          <p className={`${nunito.className} font-black`}> Whether you're looking for a photographer for your big day, a reliable plumber, a web designer, or a local tutor — we’ve got you covered.</p>
        </div>
        <div className='h-82 border-1 px-10 border-gray-200 flex items-center justify-center'>
          <p className={`${nunito.className} font-black`}>We proudly bring together over 1000+ services in one place — so you can spend less time searching, and more time getting things done.</p>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center justify-center'>
        </div>

        {/*////// */}

        <div className='h-82 border-1 border-gray-200 flex items-center justify-center'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center justify-center'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center justify-center'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center justify-center'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center'>
          <p className={`${nunito.className} text-4xl px-5 font-black`}>Find your <br />service <br />partner,
            <br />today. <br /><FaArrowRight className='mt-5' /></p>
        </div>
      </section>

      <section className='grid min-h-screen grid-cols-5 text-black'>
        <div className='h-82 border-1 bg-white border-gray-200 flex items-end p-5 justify-end'>
          <p className={`${nunito.className} text-4xl px-5 font-black`}>
            Vision
          </p>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center'>
        </div>
        <div className='h-82 border-1 bg-white border-gray-200 flex items-end p-5 justify-end'>
          <p className={`${nunito.className} text-4xl px-5 font-black`}>
            Mission
          </p>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center'>
        </div>

        <div className='h-82 border-1 border-gray-200 flex items-center'>
        </div>
        <div className='h-82 border-1 bg-white border-gray-200 flex items-center'>
          <p className={`${nunito.className} text-xl px-5 font-black`}>Making everyday <br />services accessible to <br /> everyone in Sri Lanka.</p>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center'>
        </div>
        <div className='h-82 border-1 bg-white border-gray-200 flex items-center'>
          <p className={`${nunito.className} text-xl px-5 font-black`}>To empower local <br /> professionals and <br />make it easy for <br /> people to find trusted <br />services through a <br />secure, user-friendly <br /> platform.</p>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center'>
        </div>

        <div className='h-82 border-1 border-gray-200 flex items-center'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-center'>
        </div>
      </section>

      <section className='grid min-h-screen bg-white grid-cols-5 text-black'>
        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
          <p className={`${nunito.className} text-4xl px-5 font-black`}>
            Our Team
          </p>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
        </div>

        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
        </div>

        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
        </div>
        <div className='h-82 border-1 border-gray-200 flex items-end p-5 justify-end'>
        </div>
      </section>

      <footer className="grid bg-[url('/assets/footer.png')] grid-cols-5 text-black">
        <div className='h-82 flex items-end p-5 justify-end'>
        </div>
        <div className='h-82 flex items-end p-5 justify-end'>
        </div>
        <div className='h-82 flex items-end p-5 justify-end'>
          footer
        </div>
        <div className='h-82 flex items-end p-5 justify-end'>
        </div>
        <div className='h-82 flex items-end p-5 justify-end'>
        </div>
      </footer>
    </>
  );
}
