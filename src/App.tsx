import React, { useEffect } from 'react';
import { useState } from 'react';
import QASystem from './components/QASystem';
import { OpenQAButton } from './components/OpenQAButton';
import './fonts.css';
import styled from 'styled-components';

function App() {
  const [openedQA, setOpenedQA] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    opened && setOpenedQA(true);
}, [opened])

  return (
    <AppWrap>
      {/* QA-System - окно с приложением */}
        {opened && <QASystem openedQA={openedQA} setOpened={setOpened} opened={opened} />}
        <OpenQAButton opened={opened} setOpened={setOpened} openedQA={openedQA} setOpenedQA={setOpenedQA} />
    </AppWrap>
  );
}

const AppWrap = styled.div`
  width: 100%;
  height: 100%;

`

export default App;
