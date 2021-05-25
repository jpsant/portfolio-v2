import { render, screen } from '@testing-library/react';

import ImageMock from '../../../__mocks__/fileMock';
import ProjectCards from '~molecules/ProjectCards';

describe('<ProjectCards /> unit tests', () => {
  it('Should render the ProjectCard molecule component', () => {
    //arrange
    const props = {
      projectTitle: 'projectTitle',
      projectDescription: 'projectDescription',
      projectImage: ImageMock
    };
    render(<ProjectCards {...props} />);
    //assert
    expect(screen.getByText(props.projectTitle));
    expect(screen.getByText(props.projectDescription));
  });
});
