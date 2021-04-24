import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { config } from 'react-transition-group';

import AboutSection from '~templates/sections/About';
import ContextProvider from '~contexts/contextUtils/providers';

describe('<AboutSection /> unit tests', () => {
  beforeEach(() => {
    config.disabled = true;
  });

  it('Should render the AboutSection', () => {
    //arrange
    render(
      <ContextProvider>
        <AboutSection />
      </ContextProvider>
    );
    //assert
    expect(screen.queryAllByText('title-0')).toBeTruthy();
  });

  it('Should change the text and images when clicking the "NEXT" carousel buttons', async () => {
    //arrange
    render(
      <ContextProvider>
        <AboutSection />
      </ContextProvider>
    );
    //act
    fireEvent.click(screen.getByLabelText('Next'));
    await waitForElementToBeRemoved(() => screen.getByAltText('imac img'));
    //assert
    expect(screen.getByAltText('ipad img')).toBeInTheDocument();
  });

  it('Should change the text and images when clicking the "PREV" carousel buttons', async () => {
    //arrange
    render(
      <ContextProvider>
        <AboutSection />
      </ContextProvider>
    );
    //act
    fireEvent.click(screen.getByLabelText('Previous'));
    await waitForElementToBeRemoved(() => screen.getByAltText('imac img'));
    //assert
    expect(screen.getByAltText('speaker img')).toBeInTheDocument();
  });
});
