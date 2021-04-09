import React, { useState } from 'react';
import './App.css';
// Import Components
import TextAreaInput from './inputComponents/TextAreaInput';
import CountEverything from './countComponents/CountEverything';
import CountOnlyWords from './countComponents/CountOnlyWords';
import CountOnlyNumbers from './countComponents/CountOnlyNumbers';
import SumOfAllNumbers from './countComponents/SumOfAllNumbers';

function App() {
  const [text, setText] = useState('')
  const [countEverything, setCountEverything] = useState(0)
  const [countOnlyWords, setCountOnlyWords] = useState(0)
  const [countOnlyNumbers, setCountOnlyNumbers] = useState(0)
  const [sum, setSum] = useState(0)

  return (
    <div className="App">

      <TextAreaInput
        myText={text}
        updateMyText={setText} />

      <div className='wrapper'>
        <CountEverything
          myText={text}
          countEverything={countEverything}
          updateCountEverything={setCountEverything} />

        <CountOnlyWords
          myText={text}
          countOnlyWords={countOnlyWords}
          updateCountOnlyWords={setCountOnlyWords} />

        <CountOnlyNumbers
          myText={text}
          countOnlyNumbers={countOnlyNumbers}
          updateCountOnlyNumbers={setCountOnlyNumbers} />

        <SumOfAllNumbers
          myText={text}
          mySum={sum}
          updateMySum={setSum} />
      </div>

    </div>
  )
}

export default App;