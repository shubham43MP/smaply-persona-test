import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

export const PersonasMenu = () => {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <StarOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Favourites</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PeopleAltOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Shared With Me</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};
