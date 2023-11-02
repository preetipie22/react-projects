import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [isCharacters, setIsCharacters] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    console.log("numberAllowed", numberAllowed);
    if (numberAllowed) characters += "0123456789";

    if (isCharacters) characters += "<>!@#$%^&*()[]{}";
    console.log("characters", characters);
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * characters.length + 1);
      result += characters.charAt(char);
    }
    setPassword(result);
    console.log(result);
  }, [isCharacters, numberAllowed, length, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [isCharacters, numberAllowed, length, setPassword]);

  const copy = useCallback(() => {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0,length);
      window.navigator.clipboard.writeText(password);
    }, [password]);

  return (
    <>
      <div className="text-center text-white">
        <h1>Password Generator</h1>
        <div>
          <input type="text" value={password} placeholder="password" ref={passwordRef} readOnly />
          <button onClick={copy}>Copy</button> <br />
        </div>
        <input
          type="range"
          value={length}
          min={8}
          max={100}
          onChange={(e) => setLength(e.target.value)}
        />
        <label for="length">{length}</label>
        <input
          type="checkbox"
          id="numbers"
          name="numbers"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
          defaultChecked={numberAllowed}
        />
        <label for="numbers">Numbers</label>
        <input
          type="checkbox"
          id="characters"
          onChange={() => {
            setIsCharacters((prev) => !prev);
          }}
          defaultChecked={isCharacters}
        />
        <label for="characters">Characters</label>
      </div>
    </>
  );
}

export default App;
