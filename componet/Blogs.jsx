import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Blog.module.css";
import Image from "next/image";
import Link from "next/link";


function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  axios.get(`https://fullstac-next-js-clone-eiet.vercel.app/api/post`)
  .then((res)=>setPosts(res.data))
  .catch((err)=>console.log(err))

  }, []);
  return (
    <section className={styles.appCol} >
      <h1 className={styles.heading}>
        What's in Next.js?{" "}
        <span className={styles.subheading}>
          All the tools you need to make the Web. Faster.
        </span>
      </h1>
      <div className=" p-10 my-10 app-flex-env app-media-query">
        {posts.map((x) => {
          return (
            <div key={x.id} className={styles.blogcard}>
              <Link className={styles.image} href="">
                <img src={x.image} />
              </Link>

              <div className={styles.cardDesc}>
                <h2 className={styles.title}>{x.title}</h2>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Blogs;
