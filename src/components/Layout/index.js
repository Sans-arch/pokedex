
import { MainContainer } from './styles';

import Home from '../../pages/Home';

export default function Layout() {
  return (
    <MainContainer>
      <h1 id="mainTitle">Pokedex</h1>
      <Home />
    </MainContainer>
  )
}
