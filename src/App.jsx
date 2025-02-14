// import { useState } from "react";

import Layout from "./layout/Layout";
import Events from "./pages/Events";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <Events />
      </Layout>
    </>
  );
}

export default App;
