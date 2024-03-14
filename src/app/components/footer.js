import Image from "next/image";
import footerStyles from "../styles/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div>
        <span>
          Copyright {new Date().getFullYear()} Ludimino - Tous droits réservés
        </span>
        <span className={footerStyles.footerSpan}>
          <Link href={"/"}>Mentions Légales</Link>{" "}
        </span>
        <span className={footerStyles.footerSpan}>
          {" "}
          <Link href={"/"}>Politique de confidentialité</Link>{" "}
        </span>
      </div>
      <div className={footerStyles.langue}>
        <Link href={"/"}>
          <Image src={"/drapeau.png"} alt="langue" width={125} height={28} />
        </Link>
      </div>
    </footer>
  );
}
