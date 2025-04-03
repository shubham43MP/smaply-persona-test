import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TemplatesIcon } from './templates';

describe('TemplatesIcon Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<TemplatesIcon />);
    expect(container).toBeInTheDocument();
  });

  it('renders an SVG element', () => {
    const { container } = render(<TemplatesIcon />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('applies default class correctly', () => {
    const { container } = render(<TemplatesIcon />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveClass('fill-black-700');
    expect(svgElement).toHaveClass('h-6');
    expect(svgElement).toHaveClass('w-6');
  });

  it('applies custom class when provided', () => {
    const { container } = render(<TemplatesIcon customClass="custom-class" />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveClass('custom-class');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<TemplatesIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
