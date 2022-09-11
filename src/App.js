import CountLabel from "./Components/count/CountLabel";
import PlusBtn from "./Components/count/PlusBtn";
import Container from "./Components/todo/Container";
import { CountProvider } from "./contexts/count";
import { TodoProvider } from "./contexts/todo";

function App() {
  return (
    <>
      <CountProvider>
        <CountLabel />
        <PlusBtn />
      </CountProvider>
      <TodoProvider>
        <Container />
      </TodoProvider>
    </>
  );
}

export default App;
