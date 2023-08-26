import React, { useEffect } from "react";
import styles from "../styles/Docs.module.css";

function Conteiner({ slug, infos }) {
  useEffect(() => {}, []);
  return (
    <>
      <div className={styles.docConteiner}>
        <h1>{slug}</h1>

        {infos&&
          infos.map((x) => (
            <>
            <div key={x.id} className={styles.contentCol}> 

            <p className={styles.title}>{x.title}</p>
              <p className={styles.p}>Node.js 16.8 or later.</p>
              <p className={styles.p}>macOS, Windows (including WSL), and Linux are supported.</p>
            </div>
              <br />
              <br />
              <hr />
              <h2 className={styles.heading}>{x.heading}</h2>
              <p className={styles.desc}>{x.desc}</p>
            </>
          ))}
      </div>
    </>
  );
}

export default Conteiner;
