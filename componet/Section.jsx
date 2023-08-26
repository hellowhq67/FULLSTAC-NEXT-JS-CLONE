import React from "react";
import styles from "../styles/Section.module.css";

import CardSider from "./CardSider";

function Section() {
  const data = [
    {
      title: " Starter",
      color: "green",
    },
    {
      title: "Ecommerce",
      color: "purple",
    },
    {
      title: "Blog",
      color: "orangered",
    },
    {
      title: "AI",
      color: "blue",
    },
    {
      title: "Edge Functions",
      color: "purple",
    },
    {
      title: "Edge Config",
      color: "green",
    },
  ];

  return (
    <section className={`  ${styles.section}`}>
      <h1 className={styles.heading}>
        Get started in seconds
        <span className={styles.span}>Deploy Next.js to Vercel</span>
      </h1>
      <div className={styles.border}></div>
      <div className="app-flex app-col-rev ">
        <div className={`app-col-down-str ${styles.contentCol}`}>
          <ul className={`app-flex mx-20 ${styles.linkCol}`}>
            {data.map((x) => {
              return (
                <li
                  className={`my-10 ${styles.lists} `}
                  style={{ listStyle: "none" }}
                >
                  <p style={{ color: `${x.color}` }}>{x.title}</p>
                </li>
              );
            })}
          </ul>
          <h2 className={styles.desc}>
            Vercel is a platform from the founders of Next.js, making it a
            framework you can deploy easily.
            <br />
            Jumpstart your Next.js development with one of our pre-built
            solutions.
          </h2>
          <button className="btn-1 btn mx-20">
            Deploy a Template on Vercel{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-bar-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>

        <div>
          <div className={styles.cardCol}>
            <CardSider />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
