import { Card } from "./Card";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./style.scss";
import { useRef } from "react";

export function Queue() {
  const carouselRef = useRef<any>(null);

  function carouselNext() {
    carouselRef.current.scrollBy(-15*16, 0);
  }

  function carouselBack() {
    carouselRef.current.scrollBy(15*16, 0);
  }



  return (
    <section className="queue"> 
      <h1 className="title">Fila normal</h1>
      <hr />

      <span className="arrow left" onClick={carouselNext}><IoIosArrowBack /></span>
      <span className="arrow right" onClick={carouselBack}><IoIosArrowForward /></span>

      <div className="carousel" ref={carouselRef}>

        <div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}