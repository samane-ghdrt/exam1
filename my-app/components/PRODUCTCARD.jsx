"use client";

import {
  Card, CardActions, CardContent, CardMedia,
  CardHeader, Typography
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={product.name} />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2">{product.description}</Typography>
      </CardContent>
      <CardActions>
        <Typography variant="h6">{product.price}</Typography>
      </CardActions>
    </Card>
  );
}
