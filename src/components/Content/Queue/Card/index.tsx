import { BiUserCircle } from "react-icons/bi";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./style.scss";

export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  isPriority: boolean;
}

export function Card({gender, id, isPriority, name, age}: Patient) {

  return (
    <div className="card">
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
        <div className="option-icon remove"><RiDeleteBin6Line /></div>
        <div className="option-icon edit"><TbEdit /></div>
      </footer>
    </div>
  );
}