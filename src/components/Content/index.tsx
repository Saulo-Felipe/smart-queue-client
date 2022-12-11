import { useEffect, useState } from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useQueue } from "../../hooks/useQueue";
import { AiOutlineMenu } from "react-icons/ai"; 
import { Queue } from "./Queue";

import "./style.scss";

export function Content() {
  const { normalQueue, priorityQueue, getPatients, setMobileMenuIsOpen } = useQueue();

  useEffect(() => { getPatients() }, []);

  return (
    <section id="content">
      <header>
        <div className="menu-mobile" onClick={() => setMobileMenuIsOpen(true)}><AiOutlineMenu /></div>
        
        <div>
          <MdOutlineAdminPanelSettings /> Admin
        </div>
      </header>

      <Queue 
        title="Fila Normal" 
        data={normalQueue} 
        isPriority={false} 
        key={1}
      />

      <Queue 
        title="Fila Prioritária" 
        data={priorityQueue} 
        isPriority={true} 
        key={2} 
      />
    </section>
  );
}