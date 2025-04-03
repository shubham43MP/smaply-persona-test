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
    
    expect(imgElement).toHaveClass('h-6 w-6');
  });

  it('applies a custom class when provided', () => {
    render(<IconComp imgUrl="test-icon.png" customClass="custom-class" />);
    const imgElement = screen.getByRole('img');
    
    expect(imgElement).toHaveClass('custom-class');
  });
});
