import { fireEvent, render, screen } from '@testing-library/react';
import { config } from 'react-transition-group';

import ContextProvider from '~contexts/contextUtils/providers';
import ThemeSwitcher from '~src/components/molecules/ThemeSwitcher';

describe('<ThemeSwitcher /> unit tests', () => {
  beforeEach(() => {
    config.disabled = true;
  });

  it('Should render the ThemeSwitcher component', () => {
    //arrange
    render(
      <ContextProvider>
        <ThemeSwitcher />
      </ContextProvider>
    );
    //assert
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('Should change to the light-theme when clicking one time', () => {
    //arrange
    render(
      <ContextProvider>
        <ThemeSwitcher />
      </ContextProvider>
    );
    //act
    fireEvent.click(screen.getByRole('checkbox'));
    //assert
    expect(screen.getByRole('switcher-light-theme')).toBeInTheDocument();
  });

  it('Should change to the dark-theme when clicking two time', () => {
    //arrange
    render(
      <ContextProvider>
        <ThemeSwitcher />
      </ContextProvider>
    );
    //act
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('checkbox'));
    //assert
    expect(screen.getByRole('switcher-dark-theme')).toBeInTheDocument();
  });
});
