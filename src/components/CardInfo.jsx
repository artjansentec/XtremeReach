import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CardInfo = ({ title, value }) => {
  return (
    <Card sx={{ width: 200, margin: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardInfo;
