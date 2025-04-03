import { render, screen } from '@testing-library/react';
import { PersonaImageCard } from './PersonaImageCard';

describe('PersonaImageCard', () => {
  it('renders without crashing', () => {
    render(<PersonaImageCard svgElement={null} />);
    const cardContainer = document.querySelector('.h-75.w-75.rounded-xl');
    expect(cardContainer).toBeInTheDocument();
  });

  it('renders the svgElement when provided', () => {
    const svgMock = <svg data-testid="test-svg" />;
    render(<PersonaImageCard svgElement={svgMock} />);
    expect(screen.getByTestId('test-svg')).toBeInTheDocument();
  });

  it('does not render picture tag when svgElement is null', () => {
    render(<PersonaImageCard svgElement={null} />);
    const pictureElement = document.querySelector('picture');
    expect(pictureElement).not.toBeInTheDocument();
  });

  it('renders picture tag when svgElement is provided', () => {
    const svgMock = <svg data-testid="test-svg" />;
    render(<PersonaImageCard svgElement={svgMock} />);
    const pictureElement = document.querySelector('picture');
    expect(pictureElement).toBeInTheDocument();
  });

  it('passes svgElement as child of picture element', () => {
    const svgMock = <svg data-testid="test-svg" />;
    render(<PersonaImageCard svgElement={svgMock} />);
    const pictureElement = document.querySelector('picture');
    expect(pictureElement?.firstChild).toBe(screen.getByTestId('test-svg'));
  });

  it('renders with the correct class names', () => {
    render(<PersonaImageCard svgElement={null} />);
    const cardContainer = document.querySelector('.h-75.w-75.rounded-xl');
    expect(cardContainer).toHaveClass('h-75 w-75 rounded-xl');
  });

  it('renders correctly when svgElement is undefined', () => {
    render(<PersonaImageCard svgElement={undefined} />);
    const cardContainer = document.querySelector('.h-75.w-75.rounded-xl');
    expect(cardContainer).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<PersonaImageCard svgElement={null} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
