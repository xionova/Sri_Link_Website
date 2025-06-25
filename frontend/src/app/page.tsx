'use client';

import { useEffect, useState } from 'react';
import {
  Nunito, Playfair_Display, Roboto_Mono, Pacifico, Orbitron, Lora,
  Bebas_Neue, Raleway, Source_Serif_4, Merriweather, Quicksand
} from 'next/font/google';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'; // or 'fa' for older Twitter icon
import { FaArrowAltCircleRight } from 'react-icons/fa';

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

  const totalBoxes = 15;
  const [flipped, setFlipped] = useState<boolean[]>(Array(totalBoxes).fill(false));

  // Typing effect
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

  // Flip random cards
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => {
        const newFlips = [...prev];
        const randomIndex = Math.floor(Math.random() * totalBoxes);
        newFlips[randomIndex] = !newFlips[randomIndex];
        return newFlips;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className={`p-5 text-white flex flex-col justify-between min-h-screen ${nunito.className} bg-cover bg-center transition-all duration-700`}
      >
        <div className="flex justify-between">
          <img src="/assets/logo.png" className="w-20" alt="logo" />
          <button className="py-2 px-4 bg-black rounded-lg font-bold">Sign in</button>
        </div>

        <div className="">
          <p className="text-6xl sm:text-7xl">
            Find Your,&nbsp;
            <span
              className={`border-r-2 border-white animate-pulse ${words[index].font} transition-opacity duration-500`}
              style={{ opacity: displayText ? 1 : 0.7 }}
            >
              {displayText}
            </span>
          </p>
          <p className="text-6xl sm:text-7xl">in Sri Lanka.</p>
          <p className="mt-5"><b>SriLink</b> connects you with reliable service providers across</p>
          <p>Sri Lanka — instantly, effortlessly, and in one place.</p>
          <button className="relative flex items-center gap-4 bg-white text-black font-bold py-3 px-6 mt-5 rounded-lg pl-6 overflow-hidden">
            <span className="absolute left-0 top-0 h-full w-1 bg-red-500"></span>
            <span className="absolute left-1 top-0 h-full w-1 bg-yellow-300"></span>
            <span className="absolute left-2 top-0 h-full w-1 bg-orange-500"></span>
            <span className="absolute left-3 top-0 h-full w-1 bg-green-700"></span>

            Find Services — It's Free !
            <img src="/assets/lotus.jpg" className='w-8' alt=""></img>
          </button>
          <div className='flex fixed right-10 bottom-5 gap-2 text-3xl text-black justify-end'>
            <FaFacebookF className='bg-white rounded pt-1' />
            <FaInstagram className='bg-white rounded p-0.5' />
            <FaLinkedinIn className='bg-white rounded p-0.5' />
            <FaXTwitter className='bg-white rounded p-0.5' />
          </div>
        </div>
      </section>

      <section className="grid min-h-screen grid-cols-5 gap-4 p-4 bg-white">
        {Array.from({ length: totalBoxes }).map((_, i) => (
          <div key={i} className="flip-card w-full h-40 relative">
            <div
              className={`flip-inner w-full h-full relative transform transition-transform duration-700 ${
                flipped[i] ? 'flipped' : ''
              }`}
            >
              {/* Front Side - Image */}
              <div className="flip-front absolute inset-0 bg-[url('/assets/designer.jpg')] bg-cover bg-center border-2 border-white rounded-lg shadow-lg"></div>

              {/* Back Side - Text */}
              <div className="flip-back absolute inset-0 bg-black text-white border-2 border-white rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-2xl font-bold">{roles[i % roles.length]}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
