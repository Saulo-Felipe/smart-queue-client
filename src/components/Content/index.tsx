import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Queue } from "./Queue";

import "./style.scss";

export function Content() {
  return (
    <section id="content">
      <header>
        <div>
          <MdOutlineAdminPanelSettings /> Admin
        </div>
      </header>

      <Queue />
      <Queue />
    </section>
  );
}