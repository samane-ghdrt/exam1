"use client";

import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardHeader title={product.name} />
      <CardMedia component="img" height="194" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="body2">{product.description}</Typography>
      </CardContent>
      <CardActions>
        <Typography variant="h6">${product.price}</Typography>
        <Button variant="contained" color="primary">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}