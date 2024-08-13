import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PersonaTextCard } from './PersonaTextCard';

describe('PersonaTextCard Component', () => {
  it('should render with default props', () => {
    render(<PersonaTextCard />);

    const headerElement = screen.getByText('Persona Name');
    const textElement = screen.getByText('Rosie Russman');

    expect(headerElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(headerElement).toHaveClass('text-sm sm:text-base font-semibold');
    expect(textElement).toHaveClass('text-xs sm:text-sm font-normal');
  });

  it('should render with custom props', () => {
    const customHeader = 'Custom Header';
    const customText = 'Custom Text';

    render(<PersonaTextCard header={customHeader} text={customText} />);

    const headerElement = screen.getByText(customHeader);
    const textElement = screen.getByText(customText);

    expect(headerElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(headerElement).toHaveClass('text-sm sm:text-base font-semibold');
    expect(textElement).toHaveClass('text-xs sm:text-sm font-normal');
  });
});
