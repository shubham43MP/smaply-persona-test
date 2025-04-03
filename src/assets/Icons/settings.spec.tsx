import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SettingsIcon } from './settings';

describe('SettingsIcon Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<SettingsIcon />);
    expect(container).toBeInTheDocument();
  });

  it('renders an SVG element', () => {
    const { container } = render(<SettingsIcon />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('applies default class correctly', () => {
    const { container } = render(<SettingsIcon />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveClass('fill-black-700');
    expect(svgElement).toHaveClass('h-6');
    expect(svgElement).toHaveClass('w-6');
  });

  it('applies custom class when provided', () => {
    const { container } = render(<SettingsIcon customClass="custom-class" />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveClass('custom-class');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<SettingsIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
