import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navbar } from './Navbar';

jest.mock('../Avatar', () => ({
  Avatar: jest.fn(() => <div>JS</div>)
}));

describe('Navbar Component', () => {
  it('renders the logo correctly', () => {
    render(<Navbar />);
    const logoElement = screen.getByAltText('Smaply Logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', '/smaplylogo.png');
    expect(logoElement).toHaveClass('h-8 w-44');
  });

  it('renders the user name correctly', () => {
    render(<Navbar />);
    const userNameElement = screen.getByText('John Smith');
    expect(userNameElement).toBeInTheDocument();
    expect(userNameElement).toHaveClass('self-center font-medium text-base');
  });

  it('renders the Avatar component correctly inside the user info div', () => {
    render(<Navbar />);
    const avatarElement = screen.getByText('JS');
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement.parentElement).toHaveClass('flex gap-3');
  });

  it('renders the horizontal rule (hr) correctly', () => {
    render(<Navbar />);
    const hrElement = screen.getByRole('separator');
    expect(hrElement).toBeInTheDocument();
    expect(hrElement).toHaveClass('mx-6 border-solid border-slate-200');
  });

  // it('renders the layout correctly', () => {
  //   render(<Navbar />);
  //   const headerElement = screen.getByRole('banner');
  //   expect(headerElement).toHaveClass('mx-8 my-6');

  //   const divElements = screen.getAllByRole('presentation');
  //   expect(divElements[0]).toHaveClass('flex justify-between');
  //   expect(divElements[1]).toHaveClass('flex gap-3');
  // });

  it('renders the layout correctly', () => {
    const { container } = render(<Navbar />);

    // Ensure the header has the correct classes
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('mx-8 my-6');

    // Ensure the logo is rendered correctly
    const logo = screen.getByAltText('Smaply Logo');
    expect(logo).toBeInTheDocument();

    // Ensure the user's name is rendered
    const userName = screen.getByText('John Smith');
    expect(userName).toBeInTheDocument();

    // Ensure the avatar is rendered
    const avatar = screen.getByRole('img');
    expect(avatar).toBeInTheDocument();

    // Get divs by class name using querySelectorAll
    const divElements = container.querySelectorAll('.flex');
    expect(divElements[0]).toHaveClass('justify-between');
    expect(divElements[1]).toHaveClass('gap-3');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
