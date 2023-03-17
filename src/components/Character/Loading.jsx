import Container from '@mui/material/Container';
import { CircularProgress } from '@mui/material';

const rootStyles = {
  textAlign: 'center',
};
const progressStyles = {
  mx: 10,
  my: 4,
};

function Loading() {
  return (
    <Container fixed sx={rootStyles}>
      <CircularProgress sx={progressStyles} />
    </Container>
  );
}

export default Loading;
