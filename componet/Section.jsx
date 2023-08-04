import React from "react";
import styles from '@/styles/Section.module.css'
import { BsArrowUpRight } from "react-icons/bs";
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
            Deploy a Template on Vercel <BsArrowUpRight />
          </button>
        </div>

        <div>
          <div className={styles.cardCol}>
          <CardSider/>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Section;
