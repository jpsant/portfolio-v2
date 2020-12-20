import { render, screen } from '@testing-library/react';
import Img from '../../../__mocks__/fileMock';
import SectionTitle from '~atoms/SectionTitle';

describe('<SectionTitle /> unit tests', () => {
  it('Should render the SectionTitle component', () => {
    //Arrange
    const props = {
      title: 'Section Title',
      img: Img,
      theme: 'light'
    };
    render(<SectionTitle {...props} />);
    //Assert
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
