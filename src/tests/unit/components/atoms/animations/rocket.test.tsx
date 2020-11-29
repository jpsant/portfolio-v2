import { render, screen } from '@testing-library/react';
import Rocket from '~atoms/animations/Rocket';

describe('<Rocket/> animation component unit tests', () => {
  it('Should render the Rocket component', () => {
    //Arrage
    render(<Rocket />);
    //Assert
    expect(screen.getByRole('animation')).toBeInTheDocument();
  });
});
