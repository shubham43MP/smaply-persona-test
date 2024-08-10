// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-ignore */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PersonaDetailsModal } from './PersonaDetailsModal';
import { PersonaAvatar } from '../../atoms/PersonaAvatar';
import { PERSONA_ICONS } from '../../../assets/personaAsets';
import { COLORS } from '../../../utils/constants';

jest.mock('../../atoms/PersonaAvatar', () => ({
  PersonaAvatar: jest.fn(({ children }) => <div>{children}</div>)
}));
jest.mock('../../../assets/Icons/removeImage', () => ({
  RemoveImageComp: () => <div>Remove Image Icon</div>
}));
jest.mock('../../../assets/Icons/checkmarkIcon', () => ({
  CheckMark: () => <div>Check Mark Icon</div>
}));
jest.mock('../../../assets/Icons/crossIcon', () => ({
  CrossIcon: () => <div>Cross Icon</div>
}));

describe('PersonaDetailsModal Component', () => {
  const setDisplayPicture = jest.fn();
  const setName = jest.fn();
  const setBackgroundColor = jest.fn();
  const handleForm = jest.fn();
  const onClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with default props', () => {
    render(
      <PersonaDetailsModal
        displayPicture={null}
        name="John Doe"
        backgroundColor="blue"
        setDisplayPicture={setDisplayPicture}
        setName={setName}
        setBackgroundColor={setBackgroundColor}
        handleForm={handleForm}
        onClose={onClose}
      />
    );

    expect(screen.getByText('Quick Edit')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your name')).toHaveValue(
      'John Doe'
    );
    expect(screen.getByText('Cross Icon')).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    render(
      <PersonaDetailsModal
        displayPicture={null}
        name="John Doe"
        backgroundColor="blue"
        setDisplayPicture={setDisplayPicture}
        setName={setName}
        setBackgroundColor={setBackgroundColor}
        handleForm={handleForm}
        onClose={onClose}
      />
    );

    fireEvent.click(screen.getByText('Cross Icon'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls setName when the name input is changed', () => {
    render(
      <PersonaDetailsModal
        displayPicture={null}
        name="John Doe"
        backgroundColor="blue"
        setDisplayPicture={setDisplayPicture}
        setName={setName}
        setBackgroundColor={setBackgroundColor}
        handleForm={handleForm}
        onClose={onClose}
      />
    );

    fireEvent.change(screen.getByPlaceholderText('Enter your name'), {
      target: { value: 'Jane Doe' }
    });
    expect(setName).toHaveBeenCalledWith('Jane Doe');
  });

  it('calls setDisplayPicture with null when the remove image button is clicked', () => {
    render(
      <PersonaDetailsModal
        displayPicture={<div>Test Image</div>}
        name="John Doe"
        backgroundColor="blue"
        setDisplayPicture={setDisplayPicture}
        setName={setName}
        setBackgroundColor={setBackgroundColor}
        handleForm={handleForm}
        onClose={onClose}
      />
    );

    fireEvent.click(screen.getByText('Remove Image Icon'));
    expect(setDisplayPicture).toHaveBeenCalledWith(null);
  });

  it('calls setDisplayPicture when a persona icon is clicked', () => {
    const selectedDefault = PERSONA_ICONS[1];
    render(
      <PersonaDetailsModal
        displayPicture={selectedDefault.icon}
        name="John Doe"
        backgroundColor="blue"
        setDisplayPicture={setDisplayPicture}
        setName={setName}
        setBackgroundColor={setBackgroundColor}
        handleForm={handleForm}
        onClose={onClose}
      />
    );
    fireEvent.click(screen.getByTestId(PERSONA_ICONS[2].name));
    expect(setDisplayPicture).toHaveBeenCalledWith(PERSONA_ICONS[2].icon);
  });

  it('calls setBackgroundColor when a color button is clicked', () => {
    const testColor = COLORS[3];
    render(
      <PersonaDetailsModal
        displayPicture={null}
        name="John Doe"
        backgroundColor={testColor}
        setDisplayPicture={setDisplayPicture}
        setName={setName}
        setBackgroundColor={setBackgroundColor}
        handleForm={handleForm}
        onClose={onClose}
      />
    );
    // screen.logTestingPlaygroundURL(); this is rally handy thing to handle tests env

    fireEvent.click(screen.getByText(/check mark icon/i));
    expect(setBackgroundColor).toHaveBeenCalledWith(testColor);
  });

  it('calls handleForm when the Save button is clicked', () => {
    render(
      <PersonaDetailsModal
        displayPicture={null}
        name="John Doe"
        backgroundColor="blue"
        setDisplayPicture={setDisplayPicture}
        setName={setName}
        setBackgroundColor={setBackgroundColor}
        handleForm={handleForm}
        onClose={onClose}
      />
    );

    fireEvent.click(screen.getByText('Save'));
    expect(handleForm).toHaveBeenCalledTimes(1);
  });

  it('renders the PersonaAvatar with the correct props', () => {
    render(
      <PersonaDetailsModal
        displayPicture={<div>Test Image</div>}
        name="John Doe"
        backgroundColor="blue"
        setDisplayPicture={setDisplayPicture}
        setName={setName}
        setBackgroundColor={setBackgroundColor}
        handleForm={handleForm}
        onClose={onClose}
      />
    );

    expect(PersonaAvatar).toHaveBeenCalledWith(
      expect.objectContaining({
        customClass: 'w-20 h-20 bg-blue',
        children: <div>Test Image</div>
      }),
      expect.anything()
    );
  });

  it('renders the correct initial state of the color selection', () => {
    render(
      <PersonaDetailsModal
        displayPicture={null}
        name="John Doe"
        backgroundColor="brandpurple"
        setDisplayPicture={setDisplayPicture}
        setName={setName}
        setBackgroundColor={setBackgroundColor}
        handleForm={handleForm}
        onClose={onClose}
      />
    );

    const selectedColorButton = screen.getByRole('button', {
      name: /Check Mark Icon/i
    });

    expect(selectedColorButton).toBeInTheDocument();
    expect(selectedColorButton).toHaveClass('border-black');
  });
});
