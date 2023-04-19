import React from 'react';
import { useState } from 'react';
import QASystem from './components/QASystem';
import { OpenQAButton } from './components/OpenQAButton';
import './fonts.css';

function App() {
  const [openedQA, setOpenedQA] = useState(false);
  return (
    <div>
      {/* QA-System - окно с приложением */}
        <QASystem openedQA={openedQA} />
        <OpenQAButton openedQA={openedQA} setOpenedQA={setOpenedQA}/>
    </div>
  );
}

export default App;
