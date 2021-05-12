import { render, screen } from '@testing-library/react';
import { config } from 'react-transition-group';

import ContextProvider from '~contexts/contextUtils/providers';
import HardSkillsSection from '~templates/sections/HardSkills';

describe('<HardSkillsSection /> unit tests', () => {
  beforeEach(() => {
    config.disabled = true;
  });

  it('Should render the HardSkillsSection component', () => {
    //arrange
    render(
      <ContextProvider>
        <HardSkillsSection />
      </ContextProvider>
    );
    //assert
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByAltText('hard skills image')).toBeInTheDocument();
    expect(screen.getAllByRole('SkillCard')).toHaveLength(4);
    expect(screen.getByLabelText('Next')).toBeInTheDocument();
    expect(screen.getByLabelText('Previous')).toBeInTheDocument();
  });
});
