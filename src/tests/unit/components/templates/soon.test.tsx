import { render, screen } from '@testing-library/react';
import { config } from 'react-transition-group';

import ContextProvider from '~contexts/contextUtils/providers';
import SoonTemplate from '~src/components/templates/SoonTemplate';

describe('<SoonTemplate /> unit tests', () => {
  beforeEach(() => {
    config.disabled = true;
  });

  it('Should render the SoonTemplate component', async () => {
    //Arrange
    render(
      <ContextProvider>
        <SoonTemplate />
      </ContextProvider>
    );
    //Assert
    expect(screen.getAllByRole('img')).toHaveLength(4);
    expect(screen.getAllByRole('heading')).toHaveLength(3);
    expect(screen.getByText('UserName')).toBeInTheDocument();
    expect(screen.getByText('UserName')).toBeInTheDocument();
  });
});
