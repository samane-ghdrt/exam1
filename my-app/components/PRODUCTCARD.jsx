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
        // image={product.image}
        image="https://tse4.mm.bing.net/th/id/OIP.rNTRkNe3Lcgzdf5YXkecWgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
        alt={product.name}
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
