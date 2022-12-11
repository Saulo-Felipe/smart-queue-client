import { BiUserCircle } from "react-icons/bi";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./style.scss";
import { useEffect } from "react";
import { useQueue } from "../../../../hooks/useQueue";

export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  ispriority: boolean;
  key?: any;
}

export function Card({key, gender, id, ispriority, name, age}: Patient) {
  const { nextPatient, deletePatient } = useQueue();

  return (
    <div className={`card ${nextPatient.id === id ? "selected-card" : ""}`}>
      <header>{name} <BiUserCircle /></header>

      <section>
        <div className="info">
          <span className="label">Nº Fila: </span>
          <span className="text">{id}</span>
        </div>

        <div className="info">
          <span className="label">Idade: </span>
          <span className="text">{age}</span>
        </div>

        <div className="info">
          <span className="label">Sexo: </span>
          <span className="text">{gender}</span>
        </div>
      </section>

      <footer>
        <div
          className="option-icon remove"
          onClick={() => deletePatient(id)}
        ><RiDeleteBin6Line /></div>
      </footer>
    </div>
  );
}
