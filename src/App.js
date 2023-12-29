import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { HashLoader } from "react-spinners";
import Home from "./components/pages/home";
import "./app.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="app">
          <HashLoader color="#7231EC" height={4} />
        </div>
      }
    >
      {loading ? (
        <div className="app">
          <HashLoader color="#7231EC" height={4} />
        </div>
      ) : (
        <Home />
      )}
    </Suspense>
  );
};

export default App;