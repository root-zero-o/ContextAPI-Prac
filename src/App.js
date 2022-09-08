import CountLabel from "./Components/CountLabel";
import PlusBtn from "./Components/PlusBtn";
import { CountProvider } from "./contexts/count";

function App() {
  return (
    <CountProvider>
      <CountLabel />
      <PlusBtn />
    </CountProvider>
  );
}

export default App;
