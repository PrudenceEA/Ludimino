import Video from "video.js";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import MobileHeader from "./components/MobileHeader";

export default function Home() {
  return (
    <main className={styles.main}> 
    <div className="md:invisible lg:invisible"> 
      <MobileHeader/>
    </div>
      <div>
        <h3 className={styles.header}>
          {" "}
          Un jeu ludique, intergénérationnel, pédagogique et cérébral <br/> qui fait
          appel à des qualités d’observation et de concentration.
        </h3>
      </div>
      <div className={styles.homeContent}>
        <div className={styles.ludiminoRecto}>
          <Image
            src={"/ludimino-boite-recto_xd.png"}
            alt="Ludimino"
            width={245}
            height={400}
          />
        </div>
        <div className= {styles.ludiVideo}>
          <video 
          responsive="true"
            id="my-video"
            controls={false}
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            preload= "auto"
            modal="false"
            src="/LudiminoBack_Video.mp4"
            typeof="video/mp4"
          />
        </div>
        <div className={styles.menu}>
          <div className={styles.menuImage}>
            <Image
              src={"/Fichier 1_lowres.png"}
              alt="Ludimino"
              width={100}
              height={73}
            />
          </div>
          <ul className={styles.menuList}>
            <li>
              <Link href="/"> RÈGLE DU JEU</Link>
            </li>
            <li>
              <Link href="/"> GALERIES </Link>
            </li>
            <li>
              <Link href="/"> ACHETER </Link>
            </li>
            <li>
              <Link href="/"> PANIER </Link>
            </li>
            <li>
              <Link href="/"> CONTACT </Link>
            </li>
          </ul>
          <div className={styles.menuImage}>
            <Link href={"/https://www.instagram.com/ludimino_jeu/"}>
              <Image src={"/insta.png"} alt="Ludimino" width={60} height={60} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
