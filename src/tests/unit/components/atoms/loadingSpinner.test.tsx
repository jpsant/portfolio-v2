import { render, screen } from '@testing-library/react';

import ContextProvider from '~contexts/contextUtils/providers';
import LoadingSpinner from '~atoms/LoadingSpinner';

describe('<LoadingSpinner /> unit tests', () => {
  const props = {
    loading: true
  };

  it('Should render the LoadingSpinner component if the prop is true', async () => {
    //Arrange
    render(
      <ContextProvider>
        <LoadingSpinner {...props} />
      </ContextProvider>
    );
    //Assert
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
