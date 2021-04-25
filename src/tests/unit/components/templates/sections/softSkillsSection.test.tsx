import { render, screen } from '@testing-library/react';
import { config } from 'react-transition-group';

import ContextProvider from '~contexts/contextUtils/providers';
import SoftSkillsSection from '~templates/sections/SoftSkills';

describe('<SoftSkillsSection /> unit tests', () => {
  beforeEach(() => {
    config.disabled = true;
  });

  it('Should render the SoftSkillsSection component', () => {
    //arrange
    render(
      <ContextProvider>
        <SoftSkillsSection />
      </ContextProvider>
    );
    //assert
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByAltText('soft skills image')).toBeInTheDocument();
    expect(screen.getAllByRole('SkillCard')).toHaveLength(4);
    expect(screen.getByLabelText('Next')).toBeInTheDocument();
    expect(screen.getByLabelText('Previous')).toBeInTheDocument();
  });
});
