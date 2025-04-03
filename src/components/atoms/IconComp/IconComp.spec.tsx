import { render, screen } from '@testing-library/react';
import { IconComp } from './IconComp';

describe('IconComp', () => {
  it('renders without crashing', () => {
    render(<IconComp imgUrl="test-icon.png" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders the correct image source and alt text', () => {
    render(<IconComp imgUrl="test-icon.png" />);
    const imgElement = screen.getByRole('img');
    
    expect(imgElement).toHaveAttribute('src', 'test-icon.png');
    expect(imgElement).toHaveAttribute('alt', 'persona icon');
  });

  it('applies the default class when no custom class is provided', () => {
    render(<IconComp imgUrl="test-icon.png" />);
    const imgElement = screen.getByRole('img');
    
    expect(imgElement).toHaveClass('h-6');
    expect(imgElement).toHaveClass('w-6');
  });

  it('applies a custom class when provided', () => {
    render(<IconComp imgUrl="test-icon.png" customClass="custom-class" />);
    const imgElement = screen.getByRole('img');
    
    expect(imgElement).toHaveClass('custom-class');
    expect(imgElement).not.toHaveClass('h-6');
    expect(imgElement).not.toHaveClass('w-6');
  });

  it('renders the image inside a picture element', () => {
    render(<IconComp imgUrl="test-icon.png" />);
    const imgElement = screen.getByRole('img');
    const pictureElement = imgElement.parentElement;
    
    expect(pictureElement?.tagName.toLowerCase()).toBe('picture');
  });

  it('handles empty or undefined imgUrl gracefully', () => {
    render(<IconComp imgUrl="" />);
    const imgElement = screen.getByRole('img');
    
    expect(imgElement).toHaveAttribute('src', '');
  });
});