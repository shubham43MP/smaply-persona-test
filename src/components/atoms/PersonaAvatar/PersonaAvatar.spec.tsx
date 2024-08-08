import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the "toBeInTheDocument" matcher
import { PersonaAvatar } from './PersonaAvatar';

describe('PersonaAvatar', () => {
  it('renders the children correctly', () => {
    const { getByText } = render(<PersonaAvatar>Test Child</PersonaAvatar>);
    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('applies custom class correctly', () => {
    const customClass = 'custom-class';
    const { container } = render(
      <PersonaAvatar customClass={customClass}>Test Child</PersonaAvatar>
    );
    expect(container.firstChild).toHaveClass(customClass);
  });

  it('applies default classes correctly', () => {
    const { container } = render(<PersonaAvatar>Test Child</PersonaAvatar>);
    expect(container.firstChild).toHaveClass(
      'p-3 flex items-center justify-center rounded-xl'
    );
  });

  it('applies both default and custom classes correctly', () => {
    const customClass = 'custom-class';
    const { container } = render(
      <PersonaAvatar customClass={customClass}>Test Child</PersonaAvatar>
    );
    expect(container.firstChild).toHaveClass(
      'p-3 flex items-center justify-center rounded-xl'
    );
    expect(container.firstChild).toHaveClass(customClass);
  });
});
