import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // for matchers like toBeInTheDocument, etc.
import { Navbar } from './Navbar';

jest.mock('../Avatar', () => ({
  Avatar: jest.fn(() => <div>JS</div>)
}));

describe('Navbar Component', () => {
  it('renders the logo correctly', () => {
    const { getByAltText } = render(<Navbar />);
    const logoElement = getByAltText('Smaply Logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', '/smaplylogo.png');
    expect(logoElement).toHaveClass('h-8 w-44');
  });

  it('renders the user name correctly', () => {
    const { getByText } = render(<Navbar />);
    const userNameElement = getByText('John Smith');
    expect(userNameElement).toBeInTheDocument();
    expect(userNameElement).toHaveClass('self-center font-medium text-base');
  });

  it('renders the Avatar component correctly', () => {
    const { getByText } = render(<Navbar />);
    const avatarElement = getByText('JS'); // Since we mocked the Avatar to return "JS"
    expect(avatarElement).toBeInTheDocument();
  });

  it('renders the horizontal rule (hr) correctly', () => {
    const { container } = render(<Navbar />);
    const hrElement = container.querySelector('hr');
    expect(hrElement).toBeInTheDocument();
    expect(hrElement).toHaveClass('mx-6 border-solid border-slate-200');
  });

  it('renders the layout correctly', () => {
    const { container } = render(<Navbar />);
    const headerElement = container.querySelector('header');
    const divElements = container.querySelectorAll('div');

    expect(headerElement).toHaveClass('mx-8 my-6');
    expect(divElements[0]).toHaveClass('flex justify-between');
    expect(divElements[1]).toHaveClass('flex gap-3');
  });
});
