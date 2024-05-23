import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();
  const [isCopy, setIsCopy] = useState(false);
  const [buttonText, setButtonText] = useState("Copy");

  //useRef hook
  const passwordRef=useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+=-{}[]`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() =>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const copyPasswordToClipBoard =useCallback(() =>{
    setIsCopy(true);
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
    // document.execCommand("copy"); // Copy the selected text to clipboard
    // window.getSelection().removeAllRanges(); 

    // Update button text
    setButtonText("Copied!");

    // Reset isCopy after 2 seconds
    setTimeout(() => {
      setIsCopy(false);
      setButtonText("Copy");
      window.getSelection().removeAllRanges();
    }, 2000);
  },[password])

  return (
    <>
      {/* <h1 className='text-4xl text-center text-white'>Password Generator</h1> */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipBoard} className={`outline-none bg-${isCopy ? 'red' : 'blue'}-700 text-white px-3 py-0.5 shrink-0`}>
          {buttonText}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name=""
              id=""
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              className="cursor-pointer"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={charAllowed}
              className="cursor-pointer"
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
