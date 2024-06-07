import Video from "video.js";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import MobileHeader from "./components/MobileHeader";

export default function Home() {
  return (
    <main className="mx-[8vw] py-[3vh]">
      <div>
        <h3 className="flex items-center justify-center text-uppercase m-[1.5vw] leading-8 text-center text-base	">
          Un jeu ludique, intergénérationnel, pédagogique et cérébral <br /> qui
          fait appel à des qualités d’observation et de concentration.
        </h3>
      </div>
      <div className="flex items-center justify-between space-x-0.5">
        <div className="h-fit w-[15.5vw]">
          <Image
            src={"/ludimino-boite-recto_xd.png"}
            alt="Ludimino"
            width={3245}
            height={320}
          />
        </div>
        <div className="m-[10px] w-[45vw]">
          <video
            responsive="true"
            id="my-video"
            controls={false}
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            preload="auto"
            modal="false"
            src="/LudiminoBack_Video.mp4"
            typeof="video/mp4"
          />
        </div>
        <div className="flex flex-col items-center w-[14vw] h-full">
          <div className="mt-[10px] text-center">
            <Image
              src={"/Fichier 1_lowres.png"}
              alt="Ludimino"
              width={100}
              height={73}
            />
          </div>
          <div className="flex justify-center">
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
