import { Card, Patient } from "./Card";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";
import { Timer } from "../../Menu/Timer";
import { AiOutlineLoading } from "react-icons/ai";

import "./style.scss";
import { useQueue } from "../../../hooks/useQueue";

interface QueueProps {
  title: string;
  isPriority: boolean;
  data: Patient[];
}

export function Queue({title, data, isPriority}: QueueProps) {
  const carouselRef = useRef<any>(null);
  const { isQueueLoading, nextPatient } = useQueue();

  function carouselNext() {
    carouselRef.current.scrollBy(-15*16, 0);
  }

  function carouselBack() {
    carouselRef.current.scrollBy(15*16, 0);
  }

  return (
    <section className="queue">
      <h1 className="title">
        {title} 
        {
          (isPriority && nextPatient.ispriority) || (!isPriority && !nextPatient.ispriority) 
          ? <Timer /> 
          : ""
        }
      </h1>

      <hr />

      <span className="arrow left" onClick={carouselNext}><IoIosArrowBack /></span>
      <span className="arrow right" onClick={carouselBack}><IoIosArrowForward /></span>

      <div className="carousel" ref={carouselRef}>
        { 
          data.length !== 0 
          ? (
              <div>
                {
                  data.map((patient, i) => 
                    <Card 
                      key={i} 
                      ispriority={patient.ispriority}
                      age={patient.age}
                      gender={patient.gender}
                      id={patient.id}
                      name={patient.name}
                    />
                  )
                }
              </div>
          ) : <div className="without-patient">Nenhum paciente cadastrado</div>
        }
        
        {
          isQueueLoading ?
            <div className="loading">
              <AiOutlineLoading />
            </div>
          : ""
        }
      </div>
    </section>
  );
}