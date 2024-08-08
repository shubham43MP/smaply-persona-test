import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EditableRichTextComp } from './EditableRichTextComp';

jest.mock('usehooks-ts', () => ({
  ...jest.requireActual('usehooks-ts'),
  useToggle: (preview: boolean) => [preview, jest.fn()],
  useDebounceCallback: jest.fn()
}));

jest.mock('react-quill', () => (props: any) => (
  <textarea
    data-testid="react-quill"
    value={props.value}
    onChange={e => props.onChange(e.target.value)}
  />
));

describe('EditableRichTextComp', () => {
  const mockRichTextChangeHandler = jest.fn();
  const identifier = 'test-identifier';
  const flag = 'test-flag' as any; // replace with the actual type of flag if necessary

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders in preview mode by default', () => {
    const { getByText, queryByTestId } = render(
      <>
        <EditableRichTextComp
          preview
          richText="<p>Test Rich Text</p>"
          richTextChangeHandler={mockRichTextChangeHandler}
          identifier={identifier}
          flag={flag}
        />
      </>
    );

    expect(getByText('Test Rich Text')).toBeInTheDocument();
    expect(queryByTestId('react-quill')).toBeNull();
  });

  it('toggles to edit mode and back to preview mode', async () => {
    const { getByText, getByRole, getByTestId } = render(
      <EditableRichTextComp
        preview={false}
        richText="<p>Test Rich Text</p>"
        richTextChangeHandler={mockRichTextChangeHandler}
        identifier={identifier}
        flag={flag}
      />
    );

    fireEvent.click(getByRole('button'));

    await waitFor(() => {
      expect(getByTestId('react-quill')).toBeInTheDocument();
    });

    fireEvent.click(getByRole('button'));

    await waitFor(() => {
      expect(getByText('<p>Test Rich Text</p>')).toBeInTheDocument();
    });
  });

  it('calls richTextChangeHandler with debouncing', async () => {
    const debounceMock = jest.requireMock('usehooks-ts').useDebounceCallback;
    let debouncedFn: (value: string) => void;
    debounceMock.mockImplementation(
      (fn: (value: string) => void, delay: any) => {
        console.log({ delay });
        debouncedFn = fn;
        return fn;
      }
    );

    const { getByTestId } = render(
      <EditableRichTextComp
        preview={false}
        richText="<p>Test Rich Text</p>"
        richTextChangeHandler={mockRichTextChangeHandler}
        identifier={identifier}
        flag={flag}
      />
    );

    const quillElement = getByTestId('react-quill');

    fireEvent.change(quillElement, {
      target: { value: '<p>Updated Text</p>' }
    });

    await waitFor(() => {
      debouncedFn('<p>Updated Text</p>');
      expect(mockRichTextChangeHandler).toHaveBeenCalledWith(
        '<p>Updated Text</p>',
        identifier,
        flag
      );
    });
  });

  it('renders with EditIcon when in preview mode', () => {
    const { getByRole } = render(
      <EditableRichTextComp
        preview
        richText="<p>Test Rich Text</p>"
        richTextChangeHandler={mockRichTextChangeHandler}
        identifier={identifier}
        flag={flag}
      />
    );

    const button = getByRole('button');
    expect(button.firstChild).toHaveClass('edit-icon-class'); // replace with the actual class of EditIcon
  });

  it('renders with PortfolioIcon when in edit mode', () => {
    const { getByRole } = render(
      <EditableRichTextComp
        preview={false}
        richText="<p>Test Rich Text</p>"
        richTextChangeHandler={mockRichTextChangeHandler}
        identifier={identifier}
        flag={flag}
      />
    );

    const button = getByRole('button');
    expect(button.firstChild).toHaveClass('portfolio-icon-class'); // replace with the actual class of PortfolioIcon
  });
});
