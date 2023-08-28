import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay,Navigation } from "swiper";
import styles from '../styles/Section.module.css'
function CardSider() {
  const CardData = [
    {
      title: "  Next.js Commerce",
      img: "https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1677122003%2Fnextjs%2Fshowcase%2Ftemplate-next-commerce.jpg&w=1200&q=75&dpl=dpl_65xMgzyBR14k9z6U47f8ARimmFnq",
      des: "An all-in-one starter kit for high-performance e",
    },
    {
      title: "  Image Gallery Starter",
      img: "https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1677122387%2Fnextjs%2Fshowcase%2Ftemplate-next-gallery.jpg&w=1920&q=75&dpl=dpl_65xMgzyBR14k9z6U47f8ARimmFnq",
      des: "An image gallery built on Next.js and Cloudinary.",
    },
    {
      title: "Next.js Boilerplate",
      img: "https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1677122002%2Fnextjs%2Fshowcase%2Ftemplate-next-boilerplate.jpg&w=1920&q=75&dpl=dpl_65xMgzyBR14k9z6U47f8ARimmFnq",
      des: "A Next.js app and a Serverless Function API.",
    },
  ];
  return (
    <>
      <Swiper
       autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable:true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {CardData.map((x) => {
          return (
            <>
              <SwiperSlide>
                <div key={x.title} className={styles.card}>
                  <img src={x.img} alt="" />
                  <div className="app-col-down-str p-10">
                    <h2 className={styles.cardTitle}>{x.title}</h2>
                    <p className={styles.cardDesc}>{x.des}</p>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}

export default CardSider;
