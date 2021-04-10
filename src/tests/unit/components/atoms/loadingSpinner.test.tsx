import { render, screen } from '@testing-library/react';
import LoadingSpinner from '~atoms/LoadingSpinner';

describe('<LoadingSpinner /> unit tests', () => {
  const props = {
    loading: true
  };

  it('Should render the LoadingSpinner component if the prop is true', async () => {
    //Arrange
    render(<LoadingSpinner {...props} />);
    //Assert
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
