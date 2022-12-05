import { IoIosAddCircle } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";

import "./style.scss";

export function Menu() {
  return (
    <>
      <nav id="menu">
        <img alt="Logo que representa a empresa" src="/Logotipo.png" />

        <div className="options">
          <div className="option">
            <IoIosAddCircle />
            Adicionar paciente
          </div>
        </div>
      </nav>
        <div className="modal-create-patient">
          <div className="bg-blur"></div>

          <div className="modal-content">
            <GrFormClose className="close-icon"/>
            <h1>Adicionar Paciente</h1>

            <form onSubmit={(e: any) => e.preventDefault()}>

              <div className="form-group simple">
                <label htmlFor="name">Nome do paciente</label>
                <input id="name" type="text" placeholder="Nome do paciente" />
              </div>

              <div className="form-group duo">
                <div className="first">
                  <label htmlFor="name">Idade</label>
                  <input id="name" type="text" placeholder="Idade do paciente" />
                </div>

                <div className="second">
                  <label htmlFor="name">Sexo</label>

                  <select>
                    <option>Masculino</option>
                    <option>Feminino</option>
                  </select>
                </div>
              </div>

              <div className="form-group checks">
                <label htmlFor="yes">Paciente Especial?</label>

                <div className="check">
                  <label className="no-bold" htmlFor="yes">Sim</label>
                  <input id="yes" type="checkbox" />
                </div>

                <div className="check">
                  <label className="no-bold" htmlFor="no">Não</label>
                  <input id="no" type="checkbox" />
                </div>                
              </div>

            </form>
          </div>
        </div>
    </>
  );
}