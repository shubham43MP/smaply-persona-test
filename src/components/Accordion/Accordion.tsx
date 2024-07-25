import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react';
import { IconComp } from '../atoms/IconComp';

const Icon = ({ id, open }: { id: number; open: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

type AccordionCustomProps = {
  HeaderContent: JSX.Element;
  BodyContent?: JSX.Element;
};

export function AccordionCustom({
  HeaderContent,
  BodyContent
}: AccordionCustomProps) {
  const [open, setOpen] = React.useState<number>(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="w-full" onClick={() => handleOpen(1)}>
          {HeaderContent}
        </AccordionHeader>
        <AccordionBody className={`${open === 1 ? '' : 'hidden'} `}>
          {BodyContent}
        </AccordionBody>
      </Accordion>
    </>
  );
}
