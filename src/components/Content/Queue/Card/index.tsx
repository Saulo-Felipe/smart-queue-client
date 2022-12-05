import { BiUserCircle } from "react-icons/bi";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./style.scss";

export function Card() {

  return (
    <div className="card">
      <header>Patient name <BiUserCircle /></header>

      <section>
        <div className="info">
          <span className="label">Nº Fila: </span>
          <span className="text">12</span>
        </div>

        <div className="info">
          <span className="label">Idade: </span>
          <span className="text">25</span>
        </div>
        
        <div className="info">
          <span className="label">Sexo: </span>
          <span className="text">M</span>
        </div>
      </section>

      <footer>
        <div className="option-icon remove"><RiDeleteBin6Line /></div>
        <div className="option-icon edit"><TbEdit /></div>
      </footer>
    </div>
  );
}