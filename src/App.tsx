import { useState } from "react";
import NavBar from "./Components/NavBar";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <NavBar />
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => setCount((count) => count + 1)}
            >
                count is: {count}
            </button>
        </>
    );
}

export default App;
