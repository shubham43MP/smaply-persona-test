import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TwoPersonIcon } from './twoperson';

describe('TwoPersonIcon Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<TwoPersonIcon />);
    expect(container).toBeInTheDocument();
  });

  it('renders an SVG element', () => {
    const { container } = render(<TwoPersonIcon />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('applies default class correctly', () => {
    const { container } = render(<TwoPersonIcon />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveClass('fill-black-700');
    expect(svgElement).toHaveClass('h-6');
    expect(svgElement).toHaveClass('w-6');
  });

  it('applies custom class when provided', () => {
    const { container } = render(<TwoPersonIcon customClass="custom-class" />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveClass('custom-class');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<TwoPersonIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
