import { render, screen, fireEvent } from '@testing-library/react';
import { Persona } from './Persona';
import { usePersona } from './usePersona';
import { ImageOrTextEnum } from '@/utils/types';

// Mock the `usePersona` hook
jest.mock('./usePersona', () => ({
  usePersona: jest.fn()
}));

const mockUsePersona = {
  backgroundColor: 'blue',
  name: 'John Doe',
  displayPicture: '👤',
  modalOpen: false,
  selectedImage: 'image.png',
  rowOneDataCards: {
    card1: { type: ImageOrTextEnum.image, content: 'img1.png' },
    card2: { type: ImageOrTextEnum.text, content: 'Hello World' }
  },
  rowTwoDataCards: {
    card3: { type: ImageOrTextEnum.image, content: 'img2.png' },
    card4: { type: ImageOrTextEnum.text, content: 'Another Text' }
  },
  handleModal: jest.fn(),
  setDisplayPicture: jest.fn(),
  setBackgroundColor: jest.fn(),
  closeHandler: jest.fn(),
  handleImageChange: jest.fn(),
  setName: jest.fn(),
  rendererImageHandler: jest.fn(() => jest.fn()),
  richTextChangeHandler: jest.fn(),
  addImageCardTextRenderer: jest.fn()
};

beforeEach(() => {
  (usePersona as jest.Mock).mockReturnValue(mockUsePersona);
});

describe('Persona Component', () => {
  it('opens modal when edit icon is clicked', () => {
    const { container } = render(<Persona />);

    // Try to find the edit icon using different approaches
    const editIconButton =
      screen.queryByTestId('edit-icon') || // Preferred if available
      container.querySelector('div.cursor-pointer'); // Fallback using class selector

    if (!editIconButton) {
      throw new Error('Edit icon button not found');
    }

    fireEvent.click(editIconButton);

    expect(mockUsePersona.handleModal).toHaveBeenCalled();
  });

  it('closes modal when close button is clicked', () => {
    (usePersona as jest.Mock).mockReturnValue({
      ...mockUsePersona,
      modalOpen: true // Ensure modal is open before rendering
    });

    render(<Persona />);

    const closeButton = screen.getByTestId('modal-close'); // Make sure this testId exists
    fireEvent.click(closeButton);

    expect(mockUsePersona.closeHandler).toHaveBeenCalled();
  });
});
