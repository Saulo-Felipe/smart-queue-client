import { Menu } from "./components/Menu";
import { Content } from "./components/Content"

import { QueueProvider } from "./hooks/useQueue";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <QueueProvider>
      <ToastContainer />

      <Menu />
      <Content />
    </QueueProvider>
  );
}

export default App;
