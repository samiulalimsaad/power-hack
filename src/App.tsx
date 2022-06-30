import { useState } from "react";
import Layout from "./Components/Layout";
import Table from "./Components/Table";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Layout>
            <Table />
        </Layout>
    );
}

export default App;
