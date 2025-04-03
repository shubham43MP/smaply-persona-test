import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ArchiveIcon } from './archive';

describe('ArchiveIcon Component', () => {
  it('renders the SVG element correctly', () => {
    render(<ArchiveIcon />);
    const svgElement = screen.getByTestId('archive-icon');

    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 20 20');
  });

  it('applies default class correctly', () => {
    render(<ArchiveIcon />);
    const svgElement = screen.getByTestId('archive-icon');

    expect(svgElement).toHaveClass('fill-black-700 h-6 w-6');
  });

  it('applies custom class when provided', () => {
    render(<ArchiveIcon customClass="h-8 w-8 text-red-500" />);
    const svgElement = screen.getByTestId('archive-icon');

    expect(svgElement).toHaveClass('fill-black-700 h-8 w-8 text-red-500');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<ArchiveIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
