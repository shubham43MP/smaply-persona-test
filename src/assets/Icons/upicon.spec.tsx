import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UpIcon } from './upicon';

describe('UpIcon Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<UpIcon />);
    expect(container).toBeInTheDocument();
  });

  it('renders an SVG element', () => {
    const { container } = render(<UpIcon />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toBeInTheDocument();
  });

  it('applies default class correctly', () => {
    const { container } = render(<UpIcon />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveClass('fill-black-700');
    expect(svgElement).toHaveClass('h-6');
    expect(svgElement).toHaveClass('w-6');
  });

  it('applies custom class when provided', () => {
    const { container } = render(<UpIcon customClass="custom-class" />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveClass('custom-class');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<UpIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
