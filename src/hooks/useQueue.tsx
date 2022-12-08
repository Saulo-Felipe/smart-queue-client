import { useState, useEffect, useContext, createContext, ReactPropTypes, ReactNode } from "react";
import { Patient } from "../components/Content/Queue/Card";
import { api } from "../service/api";


type QueueProviderProps = {
  children: ReactNode;
}


interface QueueProviderValue {
  getPatients: () => void;
  allPatients: Patient[];
}


const QueueContext = createContext({} as QueueProviderValue);


export function QueueProvider({children}: QueueProviderProps) {
  const [allPatients, setAllPatients] = useState<Patient[]>([]);

  async function getPatients() {
    try {
      const { data } = await api.get("/api/patient"); 

      setAllPatients(data);

      console.log("Renderiozu")
      
    } catch(e) {
      alert("Erro ao buscar pacientes.");
    }
  } 
  
  return (
    <QueueContext.Provider value={{
      getPatients,
      allPatients
    }}>
      { children }
    </QueueContext.Provider>
  )
}

export function useQueue() {
  let context = useContext(QueueContext);

  return context;
}