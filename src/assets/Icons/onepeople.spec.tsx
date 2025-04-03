import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OnePeople } from './onepeople';

describe('OnePeople Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<OnePeople />);
    expect(container).toBeInTheDocument();
  });

  it('renders an SVG element', () => {
    const { container } = render(<OnePeople />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('applies default class correctly', () => {
    const { container } = render(<OnePeople />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveClass('fill-black-700');
    expect(svgElement).toHaveClass('h-6');
    expect(svgElement).toHaveClass('w-6');
  });

  it('applies custom class when provided', () => {
    const { container } = render(<OnePeople customClass="custom-class" />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveClass('custom-class');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<OnePeople />);
    expect(asFragment()).toMatchSnapshot();
  });
});
