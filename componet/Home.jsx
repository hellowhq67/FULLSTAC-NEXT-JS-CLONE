import React from "react";
import { useState, useRef } from "react";
import styles from "@/styles/Home.module.css";


function Home() {
  const divRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const divText = divRef.current.innerText;
    navigator.clipboard.writeText(divText);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset the "copied" state after 2 seconds
  };
  return (
    <div className={styles.apphome}>
      <h1 className={styles.title}>The React Framework for the Web</h1>

      <h3 className="app-subtext">
        Used by some of the world's largest companies, Next.js enables you to
        create full-stack Web applications by extending the latest React
        features, and integrating powerful Rust-based JavaScript tooling for the
        fastest builds.
      </h3>
      <div className="app-flex mx-10">
        <button className="btn btn-1">Get Started</button>
        <button className="btn btn-2">Learn More</button>
      </div>

      <div className="app-flex">
        <div className={styles.copydiv} ref={divRef}>
          npx create-next-app@latest
        </div>
        <button className={styles.copybtn} onClick={handleCopyClick}>
          {copied ?  <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check2"
              viewBox="0 0 16 16"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>: "copy"}
        </button>
      </div>
    </div>
  );
}

export default Home;
