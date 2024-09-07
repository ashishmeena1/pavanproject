import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function VendorCard(prop:ChildNode) {
  return (
    <Card sx={{ maxWidth: 345 }} className="border-2 m-1  shadow-inner shadow-white">
      <CardMedia
        sx={{ height: 140 }}
        image="C:\Users\Public\Documents\PRODUCTION\Pavan\pavan-application\public\OIP.jpg"
        title="pavan's shop"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Pavan kirana Store
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           Grocery and Home Material whatever you want is here
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Explore</Button>
        <Button size="small">Next</Button>
      </CardActions>
    </Card>
  );
}
