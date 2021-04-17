import { fireEvent, render, screen } from '@testing-library/react';
import LanguageSwitcher from '~molecules/LanguageSwitcher';

describe('<LanguageSwitcher /> unit tests', () => {
  describe('Rendering test', () => {
    it('Should render the LanguageSwitcher', () => {
      //arrange
      render(<LanguageSwitcher />);
      //assert
      expect(screen.getAllByRole('button')).toHaveLength(2);
      expect(screen.getAllByRole('img')).toHaveLength(2);
    });
  });

  describe('en-US tests', () => {
    it('Should change the language to english when clicking the brazil-flag button', () => {
      //arrange
      render(<LanguageSwitcher />);
      fireEvent.click(screen.getByAltText('USA selected Flag SVG'));
      fireEvent.click(screen.getByAltText('Brazil Flag SVG'));
      //assert
      expect(screen.getByAltText('USA selected Flag SVG')).toBeInTheDocument();
      expect(screen.queryByAltText('USA Flag SVG')).toBeNull();
    });
  });
});
