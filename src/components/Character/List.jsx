import { map } from 'ramda';
import { Grid } from '@mui/material';
import CharacterCard from './Card';
import Loading from './Loading';

const cardStyles = {
  my: 3,
  mx: 4,
};

function CharactersList({ loading, characters }) {
  if (loading) {
    return <Loading />;
  }

  const items = map(({ id, name, image }) => (
    <Grid
      item
      key={id}
      sx={cardStyles}
    >
      <CharacterCard
        id={id}
        name={name}
        image={image}
      />
    </Grid>
  ), characters);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="baseline"
    >
      { items }
    </Grid>
  );
}

export default CharactersList;
