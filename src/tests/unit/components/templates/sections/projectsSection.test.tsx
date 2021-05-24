import { render, screen } from '@testing-library/react';
import { config } from 'react-transition-group';

import ProjectsSection from '~templates/sections/Projects';

describe('<ProjectsSection /> unit tests', () => {
  beforeEach(() => {
    config.disabled = true;
  });

  it('Should render the ProjectsSection', () => {
    //arrange
    render(<ProjectsSection />);
    //assert
    expect(screen.getAllByRole('project-card')).toHaveLength(4);
  });
});
