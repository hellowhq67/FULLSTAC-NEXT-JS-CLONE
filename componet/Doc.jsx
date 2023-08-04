import React, { useEffect, useState } from "react";
import styles from "@/styles/Docs.module.css";
import axios from "axios";

function Doc() {
  const [datas, setContent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/content")
      .then((response) => setContent(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(datas);
  return (
    <>
      {datas.map((x) => {
        return (
          <div className={styles.docCol}>
            <h1 className={styles.doctitle}>{x.title}</h1>
            <p>{x.subtitle}</p>

            <br />
            <br />
            <br />
            <h1 className={styles.docHeading}>{x.heading}</h1>

            <br />
            <p className={styles.docDesc}>{x.desc}</p>
          </div>
        );
      })}
    </>
  );
}

export default Doc;
