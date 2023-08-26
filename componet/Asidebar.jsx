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
         <svg
        onClick={handelMenu}
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="36"
          fill="currentColor"
          class="bi bi-filter-left"
          viewBox="0 0 16 16"
        >
          <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
        </svg>
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
