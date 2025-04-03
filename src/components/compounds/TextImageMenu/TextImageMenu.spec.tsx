import { render, screen, fireEvent } from '@testing-library/react';
import { TextImageMenu } from './TextImageMenu';
import { ImageOrTextEnum } from '@/utils/types';

describe('TextImageMenu', () => {
  it('renders without crashing', () => {
    render(<TextImageMenu menuItemClickHandler={jest.fn()} flag={1} />);
    expect(screen.getByText('Add Card')).toBeInTheDocument();
  });

  it('toggles dropdown visibility when button is clicked', () => {
    render(<TextImageMenu menuItemClickHandler={jest.fn()} flag={1} />);
    
    const button = screen.getByText('Add Card');
    fireEvent.click(button);
    
    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Image')).toBeVisible();
    
    fireEvent.click(button);
    
    expect(screen.queryByText('Text')).not.toBeVisible();
    expect(screen.queryByText('Image')).not.toBeVisible();
  });

  it('closes dropdown when clicking outside', () => {
    render(<TextImageMenu menuItemClickHandler={jest.fn()} flag={1} />);
    
    const button = screen.getByText('Add Card');
    fireEvent.click(button);
    
    fireEvent.mouseDown(document.body);
    
    expect(screen.queryByText('Text')).not.toBeVisible();
    expect(screen.queryByText('Image')).not.toBeVisible();
  });

  it('calls menuItemClickHandler with correct type when a menu item is clicked', () => {
    const mockHandler = jest.fn();
    render(<TextImageMenu menuItemClickHandler={mockHandler} flag={1} />);
    
    const button = screen.getByText('Add Card');
    fireEvent.click(button);
    
    const textOption = screen.getByText('Text');
    fireEvent.click(textOption);
    
    expect(mockHandler).toHaveBeenCalledWith(ImageOrTextEnum.text, 1);
  });
});
