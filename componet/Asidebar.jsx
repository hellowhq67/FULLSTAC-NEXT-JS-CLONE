import React, { useState } from "react";

import styles from "@/styles/Aisde.module.css";
import Link from "next/link";
function Asidebar() {
  const [open, SetOpen] = useState(false);

  const handelMenu = () => {
   !open?SetOpen(true):SetOpen(false)

  };
  return (
    <>
      <div className='mobileMenu'>
        <AiOutlineMenuUnfold onClick={handelMenu} />
      </div>
      <div className={`aside ${open?'aside-active':''}`}>
        <span>
          <Link href="/doc">Getting Started</Link>
        </span>
        <ul className='links'>
          <li>
            <Link href="/doc/intsall"> Installation</Link>
          </li>
          <li>
            <Link href="/">Project Structure</Link>
          </li>
          <li>
            <Link href="/">React Essentials</Link>
          </li>
        </ul>

        <span>
          <Link href="/">Getting Started</Link>
        </span>
        <ul className='links'>
          <li>
            <Link href="/"> Installation</Link>
          </li>
          <li>
            <Link href="/">Project Structure</Link>
          </li>
          <li>
            <Link href="/">React Essentials</Link>
          </li>
        </ul>
        <span>
          <Link href="/">Getting Started</Link>
        </span>
        <ul className='links'>
          <li>
            <Link href="/"> Installation</Link>
          </li>
          <li>
            <Link href="/">Project Structure</Link>
          </li>
          <li>
            <Link href="/">React Essentials</Link>
          </li>
        </ul>
        <span>
          <Link href="/">Getting Started</Link>
        </span>
        <ul className='links'>
          <li>
            <Link href="/"> Installation</Link>
          </li>
          <li>
            <Link href="/">Project Structure</Link>
          </li>
          <li>
            <Link href="/">React Essentials</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Asidebar;
