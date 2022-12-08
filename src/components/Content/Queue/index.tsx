import { Card, Patient } from "./Card";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./style.scss";
import { useRef } from "react";

interface QueueProps {
  title: string;
  isPriority: boolean;
  data: Patient[];
}

export function Queue({title, data, isPriority}: QueueProps) {
  const carouselRef = useRef<any>(null);

  function carouselNext() {
    carouselRef.current.scrollBy(-15*16, 0);
  }

  function carouselBack() {
    carouselRef.current.scrollBy(15*16, 0);
  }



  return (
    <section className="queue">
      <h1 className="title">{title}</h1>
      <hr />

      <span className="arrow left" onClick={carouselNext}><IoIosArrowBack /></span>
      <span className="arrow right" onClick={carouselBack}><IoIosArrowForward /></span>

      <div className="carousel" ref={carouselRef}>

        <div>
          {
            data.map((patient, i) => <Card key={i} {...patient} />)
          }
        </div>
      </div>
    </section>
  );
}