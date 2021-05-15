import { render, screen } from '@testing-library/react';

import ContextProvider from '~contexts/contextUtils/providers';
import ImageMock from '../../../__mocks__/fileMock';
import HardSkillsCards from '~molecules/HardSkillsCards';

describe('<HardSkillsCard /> unit tests', () => {
  it('Should render the SoftSkillsCard component', () => {
    //arrange
    const props = {
      skillTitle: 'skill title',
      skillDescription: 'skill description',
      skillImg: ImageMock,
      skillName: 'skill name'
    };
    render(
      <ContextProvider>
        <HardSkillsCards {...props} />
      </ContextProvider>
    );
    //assert
    expect(screen.getByText(props.skillTitle)).toBeInTheDocument();
    expect(screen.getByText(props.skillDescription)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText(`${props.skillName}-image`)).toBeInTheDocument();
  });

  it('Should render a reverse-card if the Reverse prop is valid', () => {
    //arrange
    const props = {
      skillTitle: 'skill title',
      skillDescription: 'skill description',
      skillImg: ImageMock,
      skillName: 'skill name',
      reverse: true
    };
    render(
      <ContextProvider>
        <HardSkillsCards {...props} />
      </ContextProvider>
    );
    //assert
    expect(screen.getByRole('SkillCard')).toHaveStyle({ flexDirection: 'row-reverse' });
  });
});
