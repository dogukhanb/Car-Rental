import { useState } from "react";
import Title from "./components/Title";

const App = () => {
  const [state, setState] = useState<number>(1);

  return (
    <div className="">
      <h1>Merhaba</h1>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>Artı</button>
      <Title text="ss" />
    </div>
  );
};

export default App;
