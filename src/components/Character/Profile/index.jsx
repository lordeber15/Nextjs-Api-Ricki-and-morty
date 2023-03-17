import { Avatar, Container, Typography } from '@mui/material';
import Loading from '../Loading';
import Details from './Details';

const rootStyles = {
  mt: 5,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const avatarStyles = {
  minWidth: 300,
  minHeight: 300,
};

const nameStyles = {
  ma: 1.5,
};

function Profile({
  loading, origin, name, image, gender, status,
}) {
  if (loading) return <Loading />;

  return (
    <Container sx={rootStyles} fixed>
      <Avatar
        sx={avatarStyles}
        src={image}
        alt={name}
      />

      <Typography
        sx={nameStyles}
        gutterBottom
        variant="h6"
        component="h2"
      >
        {name}
      </Typography>

      <Details
        gender={gender}
        status={status}
        origin={origin}
      />
    </Container>
  );
}

export default Profile;
