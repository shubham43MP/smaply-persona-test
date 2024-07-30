import { LimitedNumericValueFlag } from "../../utils/types";

export type EditableRichTextCompProps = {
    preview?: boolean;
    richText: string;
    richTextChangeHandler: (
      value: string,
      identifier: string,
      flag: LimitedNumericValueFlag
    ) => void;
    identifier: string;
    flag: LimitedNumericValueFlag;
  };