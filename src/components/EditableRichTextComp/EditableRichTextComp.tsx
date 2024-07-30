import { useDebounceCallback, useToggle } from 'usehooks-ts';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { EditIcon } from '../../assets/Icons/edit';
import { PortfolioIcon } from '../../assets/Icons';
import { memo } from 'react';
import { EditableRichTextCompProps } from './types';
import './editor.scss';

const EditableRichTextComp = memo(
  ({
    preview = false,
    richText = '',
    richTextChangeHandler,
    identifier,
    flag
  }: EditableRichTextCompProps) => {
    const [prevw, toggle] = useToggle(preview);

    const debounced = useDebounceCallback(
      value => richTextChangeHandler(value, identifier, flag),
      800
    );

    return (
      <div className="rounded-xl bg-white" id={identifier}>
        <div className="relative w-full flex">
          <button className="absolute right-3 top-3" onClick={toggle}>
            {prevw ? (
              <EditIcon customClass="h4 w-4" />
            ) : (
              <PortfolioIcon customClass="h4 w-4" />
            )}
          </button>
          {prevw ? (
            <div className="ql-snow p-1">
              <div
                className="h-full min-h-16 p-2 ql-editor text-lightgray rounded-lg c-editor"
                dangerouslySetInnerHTML={{ __html: richText }}
              />
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <ReactQuill
                theme="snow"
                value={richText}
                onChange={value => debounced(value)}
                className="h-full w-full"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

export { EditableRichTextComp };
