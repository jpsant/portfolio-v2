import { render, screen } from '@testing-library/react';
import SoonTemplate from '~templates/soonTemplate';

describe('<SoonTemplate /> unit tests', () => {
  it('Should render the SoonTemplate component', () => {
    //Arrange
    render(<SoonTemplate />);
    //Assert
    expect(screen.getAllByRole('img')).toHaveLength(6);
    expect(screen.getAllByRole('heading')).toHaveLength(3);
  });
});
