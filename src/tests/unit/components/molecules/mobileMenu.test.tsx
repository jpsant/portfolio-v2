import { render, fireEvent, screen } from '@testing-library/react';

import MobileMenu from '~organisms/MobileMenu';
import ContextProvider from '~contexts/contextUtils/providers';

describe('<MobileMenu /> unit tests', () => {
  it('Should render the MobileMenu component', () => {
    //arrange
    render(
      <ContextProvider>
        <MobileMenu />
      </ContextProvider>
    );
    //assert
    expect(screen.getByLabelText('Hamburguer menu')).toBeInTheDocument();
  });

  it('Should open the menu when clicking the Hamburguer', () => {
    //arrange
    render(
      <ContextProvider>
        <MobileMenu />
      </ContextProvider>
    );
    //act
    fireEvent.click(screen.getByLabelText('Hamburguer menu'));
    //assert
    expect(screen.getByRole('navigation')).toHaveClass('mobileMenu_open');
    expect(screen.getByAltText('Logo Dark')).toBeInTheDocument();
  });

  it('Should render the light-theme if the theme is switched', () => {
    //arrange
    render(
      <ContextProvider>
        <MobileMenu />
      </ContextProvider>
    );
    //act
    fireEvent.click(screen.getByLabelText('Hamburguer menu'));
    fireEvent.click(screen.getByRole('checkbox'));
    //assert
    expect(screen.getByAltText('Logo Light')).toBeInTheDocument();
  });
});
