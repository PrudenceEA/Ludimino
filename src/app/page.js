import LudiminoVideo from "./components/LudiminoVideo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-[0] py-[10px] sm:mx-[6vw] md:mx-[8vw] sm:py-[3vh]">
      <div className="hidden sm:block">
        <h3 className="flex items-center justify-center text-uppercase m-[1.5vw] leading-8 text-center text-base">
          Un jeu ludique, intergénérationnel, pédagogique et cérébral <br /> Qui
          fait appel à des qualités d’observation et de concentration.
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-x-0.5">
        <div className="w-[45vw] sm:h-fit sm:w-[15.5vw]">
          <Image
            src={"/ludimino-boite-recto_xd.png"}
            alt="Ludimino"
            width={245}
            height={220}                 
          />
        </div>
        <div className="w-[90%] sm:m-[10px] sm:w-[45vw]">
        <LudiminoVideo className="w-[90%] sm:m-[10px] sm:w-[45vw]"/> 
        </div>
        <div className="hidden sm:flex flex-col items-center w-[14vw] h-full">
          <div className="mt-[10px] text-center">
            <Image
              src={"/Fichier 1_lowres.png"}
              alt="Ludimino"
              width={100}
              height={73}
            />
          </div>
          <div>
            <ul className="*:bg-black *:border-1 *:border-solid-yellow *:rounded-md *:text-white *:tracking-[1px] *:align-middle *:text-center *:p-[6px] *:mt-[10px] *:listnone">
              <li>
                <Link href="/" className="text-white no-underline text-sm">
                  RÈGLE DU JEU
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white no-underline text-sm">
                  GALERIES
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white no-underline text-sm">
                  ACHETER
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white no-underline text-sm">
                  PANIER
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white no-underline text-sm">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-[10px]">
            <Link href={"/https://www.instagram.com/ludimino_jeu/"}>
              <Image
                src={"/insta.png"}
                alt="Ludimino"
                width={60}
                height={60}
                className="align-middle"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
