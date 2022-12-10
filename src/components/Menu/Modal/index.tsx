import { GrFormClose } from "react-icons/gr";
import { api } from "../../../service/api";
import { useState } from "react"; 
import { useQueue } from "../../../hooks/useQueue";

import "./style.scss";

interface ModalProps {
  setModalIsOpen(args: boolean): void;
}

export function Modal({ setModalIsOpen }: ModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    gender: "",
    ispriority: false
  });

  const { getPatients } = useQueue();

  async function handleCreatePatient() {
    if (formData.name.length === 0 ||
      formData.gender.length === 0 ||
      formData.age === 0) {
      alert("Preencha todos os campos");

    } else {
      try {
        console.log("sned: "+formData.ispriority)
        await api.post("/api/patient", { ...formData });

        setFormData({name: "", age: 0, gender: "Masculino", ispriority: false});
        getPatients();

        alert("Paciente Cadastrado com sucesso");

      } catch(e) {
        alert("Erro ao cadastrar paciente.");
        console.log(e);
      }
    }
  }

  return (
    <div className="modal-create-patient">
      <div className="bg-blur" onClick={() => setModalIsOpen(false)}></div>

      <div className="modal-content">
        <GrFormClose className="close-icon" onClick={() => setModalIsOpen(false)}/>
        <h1>Adicionar Paciente</h1>

        <form onSubmit={(e: any) => e.preventDefault()}>

          <div className="form-group simple">
            <label htmlFor="name">Nome do paciente</label>
            <input
              id="name"
              type="text"
              placeholder="Nome do paciente"
              onChange={({target}) => setFormData({ ...formData, name: target.value })}
            />
          </div>

          <div className="form-group duo">
            <div className="first">
              <label htmlFor="name">Idade</label>
              <input
                id="age"
                type={"number"}
                placeholder="Idade do paciente"
                onChange={({target}) => setFormData({ ...formData, age: Number(target.value) })}
              />
            </div>

            <div className="second">
              <label htmlFor="name">Sexo</label>

              <select
                onChange={({target}) => setFormData({ ...formData, gender: target.value })}
              >
                <option>Masculino</option>
                <option>Feminino</option>
              </select>
            </div>
          </div>

          <div className="form-group checks">
            <label htmlFor="yes">Paciente Eispriority?</label>

            <div className="check">
              <label className="no-bold" htmlFor="yes">Sim</label>
              <input
                id="yes"
                type="checkbox"
                checked={formData.ispriority}
                onClick={() => setFormData({ ...formData, ispriority: true })}
              />
            </div>

            <div className="check">
              <label className="no-bold" htmlFor="no">Não</label>
              <input
                id="no"
                type="checkbox"
                checked={formData.ispriority === false}
                onClick={() => setFormData({ ...formData, ispriority: false })}
              />
            </div>
          </div>

          <div className="btn-container">
            <button className="create-btn" onClick={handleCreatePatient}>Cadastrar</button>
          </div>

        </form>
      </div>
    </div>
  );
}