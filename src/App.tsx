import React from 'react';
import { useState } from 'react';
import QASystem from './components/QASystem';
import { OpenQAButton } from './components/OpenQAButton';
import './fonts.css';
import styled from 'styled-components';

function App() {
  const [openedQA, setOpenedQA] = useState(false);
  return (
    <AppWrap>
      {/* QA-System - окно с приложением */}
        <QASystem openedQA={openedQA} />
        <OpenQAButton openedQA={openedQA} setOpenedQA={setOpenedQA}/>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  width: 100%;
  height: 100%;

`

export default App;
