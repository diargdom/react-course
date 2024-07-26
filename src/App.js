import { AppUi } from "./components/AppUi";
import { TodoProvider } from "./components/ToDoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <AppUi />
      </TodoProvider>
    </>
  );
}

export default App;
