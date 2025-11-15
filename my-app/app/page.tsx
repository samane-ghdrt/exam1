import Image from "next/image";
import HEADER from "../components/HEADER"
import CARD from "../components/CARD";
import products from "../data/product.json";
import { Box, Grid } from "@mui/material";

export default function Home() {
  return (
    <div >
      <HEADER/>
      <main>
      <Grid container spacing={2}>
        {products.map((i)=>
          <Grid size={{ xs: 6, md: 4 }} key={i.id}>
          <CARD image={i.image} title={i.name} price={i.price} id={i.id}/>
          </Grid>
          )}
        </Grid>
      </main>
    </div>
  );
}
