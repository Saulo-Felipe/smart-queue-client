import { IoIosAddCircle } from "react-icons/io";
import { useState } from "react";
import { useQueue } from "../../hooks/useQueue";
import { BiSkipNextCircle } from "react-icons/bi";
import { AiOutlineMenu, AiOutlinePauseCircle } from "react-icons/ai";
import { RiPlayCircleLine } from "react-icons/ri"; 
import { GrFormClose } from "react-icons/gr";
import { Modal } from "./Modal";

import "./style.scss";

export function Menu() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const { 
    CallPatient, 
    handleChangeTimeIsPaused, 
    automaticTimePaused, 
    isQueueLoading,
    mobileMenuIsOpen,
    setMobileMenuIsOpen 
  } = useQueue();

  return (
    <>
      <nav id="menu" className={mobileMenuIsOpen ? "is-open" : "is-closed"}>
        <div className="close-menu"
          onClick={() => setMobileMenuIsOpen(false)}
        ><GrFormClose /></div>

        <img alt="Logo que representa a empresa" src="/Logotipo.png" />

        <div className="options">
          <div className="option" onClick={() => setModalIsOpen(true)}>
            <IoIosAddCircle />
            Adicionar paciente
          </div>

          <div className={`option ${isQueueLoading ? "default-disabled" : ""}`} onClick={CallPatient}>
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