import { render, screen, fireEvent } from '@testing-library/react';
import TextImageMenu from './TextImageMenu';
import { ImageOrTextEnum } from '@/utils/types';

describe('TextImageMenu Component', () => {
  const mockMenuItemClickHandler = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component without crashing', () => {
    render(
      <TextImageMenu menuItemClickHandler={mockMenuItemClickHandler} flag={1} />
    );
    expect(screen.getByText(/Add Card/i)).toBeInTheDocument();
  });

  it('opens the dropdown when hovering over the button and closes when clicking outside', () => {
    render(
      <TextImageMenu menuItemClickHandler={mockMenuItemClickHandler} flag={1} />
    );

    fireEvent.mouseEnter(screen.getByTestId('dropdown-container'));

    expect(screen.getByText(/Add Card/i)).toBeVisible();

    fireEvent.click(screen.getByText(/Add Card/i));

    expect(screen.getByText(/Text/i)).toBeVisible();
    expect(screen.getByText(/Image/i)).toBeVisible();
  });

  it('calls menuItemClickHandler with correct parameters when "Text" is clicked', () => {
    render(
      <TextImageMenu menuItemClickHandler={mockMenuItemClickHandler} flag={1} />
    );

    fireEvent.mouseEnter(screen.getByTestId('dropdown-container'));

    fireEvent.click(screen.getByText(/Add Card/i));

    fireEvent.click(screen.getByText(/Text/i));

    expect(mockMenuItemClickHandler).toHaveBeenCalledWith(
      ImageOrTextEnum.text,
      1
    );
  });

  it('calls menuItemClickHandler with correct parameters when "Image" is clicked', () => {
    render(
      <TextImageMenu menuItemClickHandler={mockMenuItemClickHandler} flag={1} />
    );

    fireEvent.mouseEnter(screen.getByTestId('dropdown-container'));

    fireEvent.click(screen.getByText(/Add Card/i));

    fireEvent.click(screen.getByText(/Image/i));

    expect(mockMenuItemClickHandler).toHaveBeenCalledWith(
      ImageOrTextEnum.image,
      1
    );
  });
});
