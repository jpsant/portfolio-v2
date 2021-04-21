import { render, screen, fireEvent } from '@testing-library/react';
import { config } from 'react-transition-group';

import HomeSection from '~templates/sections/Home';
import ContextProvider from '~contexts/contextUtils/providers';

describe('<HomeSection /> unit tests', () => {
  beforeEach(() => {
    config.disabled = true;
  });

  it('Should render the HomeSection component', () => {
    //arrange
    render(
      <ContextProvider>
        <HomeSection />
      </ContextProvider>
    );
    //assert
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByAltText('3D dark phone')).toBeInTheDocument();
    expect(screen.getByAltText('3D dark browser')).toBeInTheDocument();
  });

  it('Should render different assets when changing the theme', () => {
    //arrange
    render(
      <ContextProvider>
        <HomeSection />
      </ContextProvider>
    );
    //act
    fireEvent.click(screen.getByRole('checkbox'));
    //assert
    expect(screen.getByAltText('3D light phone')).toBeInTheDocument();
    expect(screen.getByAltText('3D light browser')).toBeInTheDocument();
  });
});
