import { IoIosAddCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { useQueue } from "../../hooks/useQueue";
import { BiSkipNextCircle } from "react-icons/bi";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { RiPlayCircleLine } from "react-icons/ri"; 
import { Modal } from "./Modal";

import "./style.scss";

export function Menu() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);


  const { CallPatient, handleChangeTimeIsPaused, automaticTimePaused } = useQueue();

  return (
    <>
      <nav id="menu">
        <img alt="Logo que representa a empresa" src="/Logotipo.png" />

        <div className="options">
          <div className="option" onClick={() => setModalIsOpen(true)}>
            <IoIosAddCircle />
            Adicionar paciente
          </div>

          <div className="option" onClick={CallPatient}>
            <BiSkipNextCircle />
            Chamar Próximo paciente
          </div>

          <div className="option" onClick={handleChangeTimeIsPaused}>
            { 
              automaticTimePaused 
                ? <> <RiPlayCircleLine /> Chamada automática pausada </> 
                : <> <AiOutlinePauseCircle /> Pausar chamada automática </> 
            }
          </div>
        </div>
      </nav>

      { modalIsOpen ? <Modal setModalIsOpen={setModalIsOpen} /> : "" }
    </>
  );
}