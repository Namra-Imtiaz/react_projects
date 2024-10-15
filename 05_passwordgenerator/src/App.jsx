import React, { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  let [length, setlength] = useState(8);
  let [number, setnumber] = useState(false);
  let [char, setchar] = useState(false);
  let [password, setpassword] = useState('');

  const passwordgenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number) {
      str += '0123456789';
    }
    if (char) {
      str += '!@#$%^&*()-_=+\\|[]{};:/?.>';
    }
    for (let i = 0; i < length; i++) { // Should be `i < length`, not `i <= length`
      let char_index = Math.floor(Math.random() * str.length);
      pass += str.charAt(char_index);
    }
    setpassword(pass);
  }, [length, number, char]); //optimize tareeka

  const copyPasswordToClipboard=useCallback(()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
  },[password])

  useEffect(() => {
    passwordgenerator();
  }, [length, number, char, passwordgenerator]); //dobara sai run

  //useRef hook
  const passwordRef=useRef(null);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-gray-800 text-white'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}>
            
            Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setlength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={number} // Use `checked` for controlled components
              id='numberInput'
              onChange={() => setnumber((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={char} // Use `checked` for controlled components
              id='charInput'
              onChange={() => setchar((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
