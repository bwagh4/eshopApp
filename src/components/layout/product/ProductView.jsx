import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.css";
import ProductImg1 from "../../../assets/screen-img.png";
import ProductImg2 from "../../../assets/screen-img2.png";
import ProductImg3 from "../../../assets/screen-img3.png";
import ProductImg4 from "../../../assets/screen-img4.png";
const ProductView = () => {
  const [img] = useState([
    { id: 1, src: ProductImg1, alt: "product name" },
    { id: 1, src: ProductImg2, alt: "product name" },
    { id: 1, src: ProductImg3, alt: "product name" },
    { id: 1, src: ProductImg4, alt: "product name" },
  ]);
  return (
    <Carousel autoPlay >
      {img.map((item, index) => (
        <div className="bg-gray">
          <img alt="" src={item.src} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductView;
