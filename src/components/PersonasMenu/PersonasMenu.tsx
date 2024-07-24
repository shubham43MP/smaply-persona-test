import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Cloud from '@mui/icons-material/Cloud';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Box, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

type DestinedIconsProps = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
};

const DestinedIcons = ({ Icon }: DestinedIconsProps) => {
  return (
    <Icon
      sx={{
        width: '2.4rem',
        height: '2.4rem'
      }}
      fontSize="large"
    />
  );
};

type CustomListItemProps = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  itemName: string;
};

const CustomListItem = ({ Icon, itemName }: CustomListItemProps) => {
  return (
    <Box sx={{ display: 'flex', padding: '1.2rem .8rem' }}>
      <DestinedIcons Icon={Icon} />
      <Typography
        sx={{
          marginLeft: '1rem',
          alignSelf: 'center',
          fontWeight: 500,
          fontSize: '1.8rem'
        }}
      >
        {itemName}
      </Typography>
    </Box>
  );
};

const workSpaceItems = [
  {
    Icon: Person2OutlinedIcon,
    itemName: 'Journey Maps'
  },
  {
    Icon: Person2OutlinedIcon,
    itemName: 'Personas'
  },
  {
    Icon: SpaceDashboardOutlinedIcon,
    itemName: 'Templates'
  },
  {
    Icon: GridViewOutlinedIcon,
    itemName: 'Portfolio'
  }
];

export const PersonasMenu = () => {
  return (
    <Paper sx={{ width: 370, maxWidth: '100%', padding: '1.6rem' }}>
      <Box sx={{ display: 'flex', padding: '1.2rem .8rem' }}>
        <DestinedIcons Icon={StarOutlineIcon} />
        <Typography
          sx={{
            marginLeft: '1rem',
            alignSelf: 'center',
            fontWeight: 500,
            fontSize: '1.8rem'
          }}
        >
          Favourites
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', padding: '1.2rem .8rem' }}>
        <DestinedIcons Icon={PeopleAltOutlinedIcon} />
        <Typography
          sx={{
            marginLeft: '1rem',
            alignSelf: 'center',
            fontWeight: 500,
            fontSize: '1.8rem'
          }}
        >
          Shared With Me
        </Typography>
      </Box>
      <Divider />
      <Accordion>
        <AccordionSummary
          expandIcon={<DestinedIcons Icon={ExpandMoreIcon} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            paddingLeft: '.8rem'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <DestinedIcons Icon={Person2OutlinedIcon} />
              <Typography
                sx={{
                  marginLeft: '1rem',
                  alignSelf: 'center',
                  fontWeight: 500,
                  fontSize: '1.8rem'
                }}
              >
                My Sandbox
              </Typography>
            </Box>
            <Box
              sx={{
                justifySelf: 'space-between',
                gap: '1rem',
                display: 'flex',
                marginRight: '1rem'
              }}
            >
              <DestinedIcons Icon={AddOutlinedIcon} />
              <DestinedIcons Icon={SettingsOutlinedIcon} />
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary
              expandIcon={<DestinedIcons Icon={ExpandMoreIcon} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                paddingLeft: '.8rem'
              }}
            >
              <Box sx={{ display: 'flex', padding: '1.2rem .8rem' }}>
                <DestinedIcons Icon={PeopleAltOutlinedIcon} />
                <Typography
                  sx={{
                    marginLeft: '1rem',
                    alignSelf: 'center',
                    fontWeight: 500,
                    fontSize: '1.8rem'
                  }}
                >
                  My Workspace
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', padding: '1.2rem .8rem' }}>
                <DestinedIcons Icon={PeopleAltOutlinedIcon} />
                <Typography
                  sx={{
                    marginLeft: '1rem',
                    alignSelf: 'center',
                    fontWeight: 500,
                    fontSize: '1.8rem'
                  }}
                >
                  Journey Maps
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', padding: '1.2rem .8rem' }}>
                <DestinedIcons Icon={PeopleAltOutlinedIcon} />
                <Typography
                  sx={{
                    marginLeft: '1rem',
                    alignSelf: 'center',
                    fontWeight: 500,
                    fontSize: '1.8rem'
                  }}
                >
                  Personas
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};
