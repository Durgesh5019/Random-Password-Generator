import { useState } from "react";
import "./App.css";

function App() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LC = "abcdefghijklmnopqrstuvwxyz";
  const NC = "0123456789";
  const SC = "!@#$%^&*()_+[]{}|;:,.<>?";

  const createPasswords = () => {
    let charSet = '';
    if (uppercase) charSet += UC;
    if (lowercase) charSet += LC;
    if (number) charSet += NC;
    if (symbols) charSet += SC;

    if (charSet.length === 0) {
      alert("Please select at least one type of character");
      return;
    }

    const length = parseInt(document.getElementById("passwordLength").value);
    if (isNaN(length) || length < 5 || length > 30) {
      alert("Please enter a valid length between 5 and 30");
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    }, (err) => {
      console.error("Failed to copy password: ", err);
    });
  };

  return (
    <>
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
   style={{
  backgroundImage: "url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
}}
>

      <div className="PasswordBox">
        <h2>Password Generator</h2>
        <div className="passwordBoxIn">
          <input type="text" readOnly value={password} />
          <button onClick={copyToClipboard}>Copy</button>
        </div>
        <div className="passLength">
          <label htmlFor="passwordLength">Password Length:</label>
          <input type="number" id="passwordLength" min="5" max="30" required />
        </div>
        <div className="passLength">
          <label htmlFor="uppercase">Include Uppercase Letters:</label>
          <input
            type="checkbox"
            id="uppercase"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>
        <div className="passLength">
          <label htmlFor="lowercase">Include Lowercase Letters:</label>
          <input
            type="checkbox"
            id="lowercase"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>
        <div className="passLength">
          <label htmlFor="number">Include Numbers:</label>
          <input
            type="checkbox"
            id="number"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>
        <div className="passLength">
          <label htmlFor="symbols">Include Symbols:</label>
          <input
            type="checkbox"
            id="symbols"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>
        <button className="btn" onClick={createPasswords}>
          Generate Password
        </button>
      </div>
      </div>
    </>
  );
}

export default App;

