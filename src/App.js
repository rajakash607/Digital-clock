import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Indian standard time</h1>
      <h1>{time}</h1>
    </div>
  );
}
