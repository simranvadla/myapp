import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
export default function App() {
  const [name, setName] = useState("");
  const prevName = useRef(0);
  useEffect(() => {
    prevName.current = name;
  });
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Current Name: {name}</h1>
      <h1>Previous Name: {prevName.current}</h1>
    </>
  );
}