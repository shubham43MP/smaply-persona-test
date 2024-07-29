import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { EditIcon } from '../../assets/Icons/edit';
import { PortfolioIcon } from '../../assets/Icons';
import './editor.scss';

export type EditableRichTextCompProps = {
  preview?: boolean;
};

export const EditableRichTextComp = ({
  preview = false
}: EditableRichTextCompProps) => {
  const [richText, setRichText] = useState('');
  const [prevw, setPrevw] = useState(preview);

  const clickHandler = () => {
    setPrevw(prev => !prev);
  };

  return (
    <div className="rounded-xl bg-white">
      <div className="relative w-full flex">
        <button className="absolute right-3 top-3" onClick={clickHandler}>
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
              onChange={setRichText}
              className="h-full w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};
