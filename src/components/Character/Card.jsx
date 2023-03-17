import { useCallback } from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image';
import { Card, CardActionArea, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

const rootStyles = {
  width: 300,
  height: 360,
};

export default function CharacterCard({ id, name, image }) {
  const router = useRouter();
  const goToDetails = useCallback(() => router.push(`/${id}`), [router, id]);

  return (
    <Card sx={rootStyles}>
      <CardActionArea onClick={goToDetails}>
        <Image
          alt={name}
          width={300}
          height={300}
          src={image}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            component="h2"
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
