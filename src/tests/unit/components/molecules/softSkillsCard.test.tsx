import { render, screen } from '@testing-library/react';

import ContextProvider from '~contexts/contextUtils/providers';
import ImageMock from '../../../__mocks__/fileMock';
import SoftSkillCard from '~molecules/SoftSkillsCards';

describe('<SoftSkillsCards /> unit tests', () => {
  it('Should render the SoftSkillsCard component', () => {
    //arrange
    const props = {
      title: 'title',
      description: 'description',
      image: ImageMock,
      alt: 'image alt'
    };
    render(
      <ContextProvider>
        <SoftSkillCard {...props} />
      </ContextProvider>
    );
    //assert
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText(props.alt)).toBeInTheDocument();
  });
});
