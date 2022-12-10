import { useState, useEffect, useContext, createContext, ReactPropTypes, ReactNode } from "react";
import { Patient } from "../components/Content/Queue/Card";
import { api } from "../service/api";


type QueueProviderProps = {
  children: ReactNode;
}


interface QueueProviderValue {
  getPatients(): void;
  CallPatient(): void;
  normalQueue: Patient[];
  priorityQueue: Patient[];
  isQueueLoading: boolean;
  nextPatient: {id: number, ispriority: boolean};
  handleChangeTimeIsPaused(): void;
  automaticTimePaused: boolean;
}


const QueueContext = createContext({} as QueueProviderValue);


export function QueueProvider({children}: QueueProviderProps) {
  const [priorityQueue, setPriorityQueue] = useState<Patient[]>([]);
  const [normalQueue, setNormalQueue] = useState<Patient[]>([]);
  const [isQueueLoading, setIsQueueLoading] = useState(false);
  const [automaticTimePaused, setAutomaticTimePaused] = useState(false);
  const [nextPatient, setNextPatient] = useState({
    id: 0,
    ispriority: false
  });
  var nextQueue = 1;

  async function getPatients() {
    try {
      setIsQueueLoading(true);
      const { data } = await api.get("/api/patient");
      setIsQueueLoading(false);

      setPriorityQueue(data.filter((e: any) => e.ispriority))
      setNormalQueue(data.filter((e: any) => !e.ispriority));

    } catch(e) {
      alert("Erro ao buscar pacientes.");
    }
  }


  async function CallPatient() {

    setIsQueueLoading(true);
    const { data } = await api.patch("/api/patient", { // remove patient
      id: nextPatient.id
    });
    setIsQueueLoading(false);

    if (nextQueue === 0) {
      setNormalQueue(data.filter((e: any, i: number) => !e.ispriority));

    } else {
      setPriorityQueue(data.filter((e: any) => e.ispriority))
    }
  }

  function handleChangeTimeIsPaused() {
    setAutomaticTimePaused(automaticTimePaused == false);
  }

  useEffect(() => {
    if (normalQueue.length === 0) {
      setNextPatient({
        id: priorityQueue[0]?.id,
        ispriority: priorityQueue[0]?.ispriority
      });

    } else if (priorityQueue.length === 0) {
      setNextPatient({
        id: normalQueue[0]?.id,
        ispriority: normalQueue[0]?.ispriority
      });

    } else {
      if (nextQueue === 0) {
        nextQueue++;
        setNextPatient({
          id: normalQueue[0]?.id,
          ispriority: normalQueue[0]?.ispriority
        });
      } else {
        if (nextQueue == 2)
          nextQueue = 0;
        else
          nextQueue++
  
        setNextPatient({
          id: priorityQueue[0]?.id,
          ispriority: priorityQueue[0]?.ispriority
        });
      }
    }
  }, [priorityQueue, normalQueue]);

  return (
    <QueueContext.Provider value={{
      getPatients,
      CallPatient,
      priorityQueue,
      normalQueue,
      isQueueLoading,
      nextPatient,
      handleChangeTimeIsPaused,
      automaticTimePaused
    }}>
      { children }
    </QueueContext.Provider>
  )
}

export function useQueue() {
  let context = useContext(QueueContext);

  return context;
}