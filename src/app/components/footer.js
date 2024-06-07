import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-around px-2 py-2 border-2 border-solid-white font-serif">
      <div>
        <span>
          Copyright {new Date().getFullYear()} Ludimino - Tous droits réservés
        </span>
        <span className="ml-5 hover:no-underline">
          <Link href="/" className="text-black underline">Mentions Légales</Link>
        </span>
        <span className="ml-5">
          <Link href="/" className="text-black underline">Politique de confidentialité</Link>
        </span>
      </div>
      <div className="mr-5">
        <Link href={"/"}>
          <Image src={"/drapeau.png"} alt="langue" width={125} height={28} />
        </Link>
      </div>
    </footer>
  );
}
