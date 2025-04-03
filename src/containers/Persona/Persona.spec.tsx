import { render, screen, fireEvent } from '@testing-library/react';
import { Persona } from './Persona';
import { usePersona } from './usePersona';
import { ImageOrTextEnum } from '@/utils/types';

// Mock the `usePersona` hook
jest.mock('./usePersona', () => ({
  usePersona: jest.fn(),
}));

describe('Persona Component', () => {
  const mockUsePersona = {
    backgroundColor: 'blue',
    name: 'John Doe',
    displayPicture: '👤',
    modalOpen: false,
    selectedImage: 'image.png',
    rowOneDataCards: {
      card1: { type: ImageOrTextEnum.image, content: 'img1.png' },
      card2: { type: ImageOrTextEnum.text, content: 'Hello World' },
    },
    rowTwoDataCards: {
      card3: { type: ImageOrTextEnum.image, content: 'img2.png' },
      card4: { type: ImageOrTextEnum.text, content: 'Another Text' },
    },
    handleModal: jest.fn(),
    setDisplayPicture: jest.fn(),
    setBackgroundColor: jest.fn(),
    closeHandler: jest.fn(),
    handleImageChange: jest.fn(),
    setName: jest.fn(),
    rendererImageHandler: jest.fn(() => jest.fn()),
    richTextChangeHandler: jest.fn(),
    addImageCardTextRenderer: jest.fn(),
  };

  beforeEach(() => {
    (usePersona as jest.Mock).mockReturnValue(mockUsePersona);
  });

  it('renders Persona component correctly', () => {
    render(<Persona />);
    
    expect(screen.getByText('My Sandbox')).toBeInTheDocument();
    expect(screen.getByText('My Workspace')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Add Card')).toBeInTheDocument();
  });

  it('opens modal when edit icon is clicked', () => {
    render(<Persona />);

    const editIcon = screen.getByRole('button', { hidden: true });
    fireEvent.click(editIcon);

    expect(mockUsePersona.handleModal).toHaveBeenCalled();
  });

  it('calls menuItemClickHandler when adding a new text or image card', () => {
    render(<Persona />);
    
    const addCardButton = screen.getAllByText('Add Card')[0]; // Get first button
    fireEvent.click(addCardButton);
    
    expect(mockUsePersona.addImageCardTextRenderer).toHaveBeenCalled();
  });

  it('renders image and text cards correctly', () => {
    render(<Persona />);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.getByText('Another Text')).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(2); // Two image cards
  });

  it('closes modal when close handler is called', () => {
    (usePersona as jest.Mock).mockReturnValue({ ...mockUsePersona, modalOpen: true });
    render(<Persona />);
    
    fireEvent.click(screen.getByRole('button', { hidden: true }));
    expect(mockUsePersona.closeHandler).toHaveBeenCalled();
  });
});
