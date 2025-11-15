'use client'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Avatar, Tooltip, Typography } from '@mui/material';
// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//     alignItems: 'flex-end',
//     paddingTop: theme.spacing(1),
//     paddingBottom: theme.spacing(2),
//     // Override media queries injected by theme.mixins.toolbar
//     '@media all': {
//       minHeight: 128,
//     },
//   }));
export default function HEADER(){
    return(
    //   <Box sx={{ }}>
    //     <Box sx={{display: 'flex',justifyContent: 'flex-end'}}>
    //   <AppBar position="static" >
    //     <Tooltip sx={{display: 'flex',justifyContent: 'flex-end'}}>
    //       <ShoppingCartIcon />
    //     </Tooltip>
    //     {/* <Tooltip title="Open settings" sx={{display: 'flex',justifyContent: 'flex-end'}}>
    //           <IconButton onClick={()=>{}} sx={{ p: 0 }}>
    //             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
    //           </IconButton>
    //     </Tooltip> */}
    //   </AppBar>
    //   </Box>
    //   <Box sx={{height:"1000px"}}>

    //   </Box>
    // </Box>
    <Box sx={{height:"100px", background:"blue"}}>
 <ShoppingCartIcon />
 <Typography>
All Your digital Products
<br/>
Is one click Away.
 </Typography>
    </Box>
        
    )
}