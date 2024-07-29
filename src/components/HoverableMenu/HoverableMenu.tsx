import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from '@material-tailwind/react';
import { TextIcon } from '../../assets/Icons/text';

export const Hoverable = () => {
  return (
    <Menu className="relative">
      <MenuHandler>
        <Button className="flex gap-2">
          <TextIcon customClass="fill-white" />
          <p>Add Card</p>
        </Button>
      </MenuHandler>
      <MenuList className="absolute left-0">
        <MenuItem className="flex">
          <TextIcon customClass="fill-green-500" />
          <p>Text</p>
        </MenuItem>
        <MenuItem className="flex">
          <TextIcon />
          <p>Image</p>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
