import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';


export default function ProductListing() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:9999/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log('Error loading products ', err);
        setLoading(false);
      }
    }
    fetchProducts();
  }, [])

  return (
    <React.Fragment>
      <Box component="section">
        {loading && <CircularProgress/>}
        {!loading && <Grid container spacing={2}>
        {products.map(p => (
          <Grid size={5} key={p.ticker}>
            <Card variant="outlined">
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {p.productName}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {p.apir || (p.exchange + ':' + p.ticker)}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Fee: {p.fee.value}%
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={'/' + p.portId}>
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
        </Grid>
        }
        
      </Box>
      
      
    </React.Fragment>
  );
}
