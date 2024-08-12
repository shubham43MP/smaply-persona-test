import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ChooseAnImage } from './index';

jest.mock('../../../assets/Icons/chooseImage', () => ({
  ChooseImage: jest.fn(({ customClass }) => (
    <svg data-testid="choose-image-icon" className={customClass} />
  ))
}));

describe('ChooseAnImage Component', () => {
  const handleImageChangeMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render without selected image', () => {
    render(
      <ChooseAnImage
        identifier="test-id"
        selectedImage=""
        handleImageChange={handleImageChangeMock}
      />
    );

    const inputElement = screen.getByTestId('imageInput-test-id');
    const chooseImageIcon = screen.getByTestId('choose-image-icon');
    const chooseImageText = screen.getByText('Choose an Image');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', 'imageInput-test-id');
    expect(chooseImageIcon).toBeInTheDocument();
    expect(chooseImageText).toBeInTheDocument();
  });

  it('should render with selected image', () => {
    render(
      <ChooseAnImage
        identifier="test-id"
        selectedImage="image-url"
        handleImageChange={handleImageChangeMock}
      />
    );

    const imageElement = screen.getByAltText('Selected');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'image-url');
  });

  it('should trigger click on file input when container is clicked', () => {
    render(
      <ChooseAnImage
        identifier="test-id"
        selectedImage=""
        handleImageChange={handleImageChangeMock}
      />
    );

    const inputElement = screen.getByTestId('imageInput-test-id');
    const containerElement = inputElement.parentElement;

    // Spy on input click event
    const clickSpy = jest.spyOn(inputElement, 'click');

    fireEvent.click(containerElement!);
    expect(clickSpy).toHaveBeenCalled();
  });

  it('should call handleImageChange on file selection', () => {
    render(
      <ChooseAnImage
        identifier="test-id"
        selectedImage=""
        handleImageChange={handleImageChangeMock}
      />
    );

    const inputElement = screen.getByTestId('imageInput-test-id');
    const file = new File(['dummy content'], 'example.png', {
      type: 'image/png'
    });

    fireEvent.change(inputElement, { target: { files: [file] } });
    expect(handleImageChangeMock).toHaveBeenCalled();
    expect(handleImageChangeMock).toHaveBeenCalledWith(expect.any(Object));
  });
});
