"use client";
import * as React from 'react';
import  useState  from 'react';
import { styled } from '@mui/material/styles';
import {Card,CardActions,CardContent,CardMedia,CardHeader,Collapse,Avatar,IconButton,Typography, Button} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/navigation';


export default function CADR({image,title,price,id}){

   const router =useRouter();
    return(


        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={title}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt={title}
        />
        {/* <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent> */}
        <CardActions>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        {price}
          </Typography>
          <Button size="small" color="primary" onClick={()=> router.push(`/${id}`)}>
          Details
        </Button>
        </CardActions>
    
      </Card>

    )
}

