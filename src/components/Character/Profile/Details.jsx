import {
  Avatar, List, ListItem, ListItemAvatar, ListItemText,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import FavoriteIcon from '@mui/icons-material/Favorite';

const rootStyles = {
  width: '100%',
  maxWidth: 360,
  backgroundColor: 'background.paper',
};

function Details({ gender, status, origin }) {
  return (
    <List sx={rootStyles}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Gender" secondary={gender} />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FavoriteIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Status" secondary={status} />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PublicIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Origin" secondary={origin} />
      </ListItem>
    </List>
  );
}

export default Details;
