import { Menu } from "./components/Menu";
import { Content } from "./components/Content"

import { QueueProvider } from "./hooks/useQueue";

function App() {
  return (
    <QueueProvider>
      <Menu />
      <Content />
    </QueueProvider>
  );
}

export default App;
