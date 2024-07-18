"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ReorderIcon from "@mui/icons-material/Reorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CloseIcon from "@mui/icons-material/Close";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <div className="sticky top-0 border-2 border-solid-black p-[5px] sm:hidden">
        <div className="flex items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/Fichier 1_lowres.png"}
                alt="Ludimino"
                width={80}
                height={70}
              />
            </Link>
          </div>
          <div className="flex items-center justify-end space-x-3">
            <div>
              <button onClick={toggleMenu}>
                {menuOpen ? (
                  <CloseIcon className="size-9" />
                ) : (
                  <ReorderIcon className="size-9" />
                )}
              </button>
            </div>
            <div
              className={`flex flex-col items-end ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              <nav className="sm:hidden">
                <ul className="bg-black border border-solid border-yellow-500 rounded-md text-white tracking-[0.51px] text-center p-[5px] mt-[10px] list-none space-y-2">
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
              </nav>
            </div>
            <div>
              <Link href={"/#"}>
                <ShoppingBagIcon className="size-8" />
              </Link>
            </div>
            <div>
              <Link
                href={"/https://www.instagram.com/ludimino_jeu/"}
                target="_blank"
              >
                <Image
                  src={"/insta.png"}
                  alt="Ludimino"
                  width={50}
                  height={45}
                  className="size-10"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
