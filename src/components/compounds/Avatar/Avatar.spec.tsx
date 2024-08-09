import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // for additional matchers like toBeInTheDocument, etc.
import { Avatar } from './Avatar';

describe('Avatar Component', () => {
  it('renders with default name when no name is provided', () => {
    const { getByText } = render(<Avatar />);
    const initialsElement = getByText('JS'); // John Smith's initials
    expect(initialsElement).toBeInTheDocument();
  });

  it('renders with the provided name', () => {
    const { getByText } = render(<Avatar name="Jane Doe" />);
    const initialsElement = getByText('JD'); // Jane Doe's initials
    expect(initialsElement).toBeInTheDocument();
  });

  it('renders initials correctly for single name', () => {
    const { getByText } = render(<Avatar name="Madonna" />);
    const initialsElement = getByText('M'); // Madonna's initials
    expect(initialsElement).toBeInTheDocument();
  });

  it('renders initials correctly for names with multiple spaces', () => {
    const { getByText } = render(<Avatar name="Jean Luc Picard" />);
    const initialsElement = getByText('JLP'); // Jean Luc Picard's initials
    expect(initialsElement).toBeInTheDocument();
  });

  it('applies correct classes for styling', () => {
    const { container } = render(<Avatar name="Jane Doe" />);
    const avatarElement = container.firstChild;

    expect(avatarElement).toHaveClass('inline-flex');
    expect(avatarElement).toHaveClass('items-center');
    expect(avatarElement).toHaveClass('justify-center');
    expect(avatarElement).toHaveClass('h-10');
    expect(avatarElement).toHaveClass('w-10');
    expect(avatarElement).toHaveClass('rounded-full');
    expect(avatarElement).toHaveClass('bg-blue-900');
    expect(avatarElement).toHaveClass('text-white');
  });

  it('renders text with correct font size and weight', () => {
    const { getByText } = render(<Avatar name="Jane Doe" />);
    const initialsElement = getByText('JD');

    expect(initialsElement).toHaveClass('text-lg');
    expect(initialsElement).toHaveClass('font-bold');
  });
});
