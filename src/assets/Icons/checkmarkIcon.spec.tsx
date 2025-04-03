import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CheckMark } from './checkmarkIcon';

describe('CheckMark Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<CheckMark />);
    expect(container).toBeInTheDocument();
  });

  it('renders an SVG element', () => {
    const { container } = render(<CheckMark />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('applies correct classes for styling', () => {
    const { container } = render(<CheckMark />);
    const svgElement = container.querySelector('svg');
    
    expect(svgElement).toHaveClass('w-5');
    expect(svgElement).toHaveClass('h-5');
    expect(svgElement).toHaveClass('text-black');
    expect(svgElement).toHaveClass('absolute');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<CheckMark />);
    expect(asFragment()).toMatchSnapshot();
  });
});
