import { HeaderContainer, MainTitle } from './styles';

import FilterButtons from '../FilterButtons';

export default function Header({ actions }) {
  return (
    <HeaderContainer>
      <MainTitle>
        Pokedex Project
      </MainTitle>
      <FilterButtons
        buttonActions={actions}
      />
    </HeaderContainer>
  )
}
