import Link from "next/link";
import Image from "next/image";

export default function MobileFooter() {
  return (
    <footer className="sm:hidden flex flex-col items-center justify-center px-3 py-2 border-2 border-solid-white font-serif">
      <div>
        <span className="text-black no-underline hover:underline">
          <Link href="/">Mentions Légales</Link> |  
          <Link href="/"> Politique de confidentialité</Link>
        </span>
      </div>
      <div>
        <span className="hover:no-underline">
          contact:
          <Link
            href="/mailto:ludimino@outlook.fr"
            target="_blank"
            className="text-black no-underline hover:underline"
          >
            ludimino@outlook.fr
          </Link>
        </span>
      </div>
      <div>
        <span>
          © {new Date().getFullYear()} Ludimino - Tous droits réservés
        </span>
      </div>
    </footer>
  );
}
