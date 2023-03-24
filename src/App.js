import { Routers } from "./Router";

import "../src/assets/css/index.css";
import { StorageContext } from "./Context/StorageContext";

function App() {
  // membuat bank data

  return (
    <StorageContext>
      <Routers />
    </StorageContext>
  );
}

export default App;
