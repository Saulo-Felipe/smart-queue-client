import { useEffect, useState } from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useQueue } from "../../hooks/useQueue";
import { Queue } from "./Queue";

import "./style.scss";

export function Content() {
  const { allPatients, getPatients } = useQueue();
  console.log("all: ", allPatients);
  useEffect(() => { getPatients() }, []);

  return (
    <section id="content">
      <header>
        <div>
          <MdOutlineAdminPanelSettings /> Admin
        </div>
      </header>

      <Queue 
        title="Fila Normal" 
        data={allPatients.filter(item => !item.isPriority)} 
        isPriority={false} 
        key={1}
      />

      <Queue 
        title="Fila Prioritária" 
        data={allPatients.filter(item => item.isPriority)} 
        isPriority={true} 
        key={2} 
      />
    </section>
  );
}