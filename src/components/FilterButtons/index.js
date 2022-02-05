import { FilterButtonsContainer, PreviousButton, NextButton } from './styles';

export default function FilterButtons({ buttonActions }) {

  return (
    <FilterButtonsContainer>
      <PreviousButton
        onClick={buttonActions.handlePrevious}
      />
      <NextButton
        onClick={buttonActions.handleNext}
      />
    </FilterButtonsContainer>
  )
}
