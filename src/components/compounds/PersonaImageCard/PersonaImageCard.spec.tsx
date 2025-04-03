import { render, screen } from '@testing-library/react';
import { PersonaImageCard } from './PersonaImageCard';

describe('PersonaImageCard', () => {
  it('renders without crashing', () => {
    render(<PersonaImageCard svgElement={null} />);
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('renders the svgElement when provided', () => {
    const svgMock = <svg data-testid="test-svg" />;
    render(<PersonaImageCard svgElement={svgMock} />);
    expect(screen.getByTestId('test-svg')).toBeInTheDocument();
  });

  it('does not render picture tag when svgElement is null', () => {
    render(<PersonaImageCard svgElement={null} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
