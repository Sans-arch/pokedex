import { useState } from 'react';

import { MainContainer } from './styles';

import Home from '../../pages/Home';

import Header from '../../components/Header';

export default function Layout() {
  const [offsetNumber, setOffsetNumber] = useState(0);

  function handlePrevious() {
    setOffsetNumber(prevNumber => {
      if (prevNumber === 0) return 0;

      return prevNumber - 1
    });
  }

  function handleNext() {
    setOffsetNumber(prevNumber => prevNumber + 1);
  }

  return (
    <MainContainer>
      <Header
        actions={{ handleNext, handlePrevious }}
      />
      <Home
        offsetNumber={offsetNumber}
      />
    </MainContainer>
  )
}
