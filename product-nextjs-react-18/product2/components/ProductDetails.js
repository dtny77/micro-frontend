import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const products = [
  {
    name: 'Vanguard Diversified Conservative Index ETF',
    type: 'ETF',
    ticker: 'VDCO',
    exchange: 'ASX',
    fee: '0.27%',
    risk: 'Medium & 3 years+',
    nav: '$53.4874',
    currency: 'AUD',
    keyObjective: 'Vanguard Diversified Conservative Index ETF seeks to track the weighted average return of the various indices of the Underlying Funds in which it invests, in proportion to the Strategic Asset Allocation, before taking into account fees, expenses and tax.',
    overview: 'The ETF targets a 70% allocation to income asset classes and a 30% allocation to growth asset classes.',
    suitability: 'Buy and hold investors with a moderate risk appetite, seeking a steady source of income with some capital growth potential'
  },
  {
    name: 'Vanguard Diversified Balanced Index ETF',
    type: 'ETF',
    ticker: 'VDBA',
    exchange: 'ASX',
    fee: '0.27%',
    risk: 'Medium & 5 years+',
    nav: '$56.8378',
    currency: 'AUD',
    keyObjective: 'Vanguard Diversified Balanced Index ETF seeks to track the weighted average return of the various indices of the Underlying Funds in which it invests, in proportion to the Strategic Asset Allocation, before taking into account fees, expenses and tax.',
    overview: 'The ETF targets a 50% allocation to income asset classes and a 50% allocation to growth asset classes.',
    suitability: 'Buy and hold investors with a moderate risk appetite, seeking a balance between income and capital growth potential.'
  },
  {
    name: 'Vanguard Diversified Growth Index ETF',
    type: 'ETF',
    ticker: 'VDGR',
    exchange: 'ASX',
    fee: '0.27%',
    risk: 'High to very high & 7 years+',
    nav: '$61.9717',
    currency: 'AUD',
    keyObjective: 'Vanguard Diversified Growth Index ETF seeks to track the weighted average return of the various indices of the Underlying Funds in which it invests, in proportion to the Strategic Asset Allocation, before taking into account fees, expenses and tax.',
    overview: 'The ETF targets a 30% allocation to income asset classes and a 70% allocation to growth asset classes.',
    suitability: 'Buy and hold investors seeking long term capital growth, and with a higher tolerance for the risks associated with investing in the share market (including higher volatility and the potential for losses).'
  },
  {
    name: 'Vanguard Conservative Index Fund',
    type: 'Managed Fund',
    ticker: 'VAN0109AU',
    exchange: '',
    fee: '0.29%',
    risk: 'Medium & 3 years+',
    nav: '$1.2060',
    currency: 'AUD',
    keyObjective: 'Vanguard Conservative Index Fund seeks to track the weighted average return of the various indices of the Underlying Funds in which it invests, in proportion to the Strategic Asset Allocation, before taking into account fees, expenses and tax.',
    overview: 'The Fund targets a 70% allocation to income asset classes and a 30% allocation to growth asset classes.',
    suitability: 'Buy and hold investors with a moderate risk appetite, seeking a steady source of income with some capital growth potential.'
  },
  {
    name: 'Vanguard Balanced Index Fund',
    type: 'Managed Fund',
    ticker: 'VAN0108AU',
    exchange: '',
    fee: '0.29%',
    risk: 'Medium & 5 years+',
    nav: '$1.4836',
    currency: 'AUD',
    keyObjective: 'Vanguard Balanced Index Fund seeks to track the weighted average return of the various indices of the Underlying Funds in which it invests, in proportion to the Strategic Asset Allocation, before taking into account fees, expenses and tax.',
    overview: 'The Fund targets a 50% allocation to income asset classes and a 50% allocation to growth asset classes.',
    suitability: 'Buy and hold investors with a moderate risk appetite, seeking a balance between income and capital growth potential.'
  },
  {
    name: 'Vanguard Growth Index Fund',
    type: 'Managed Fund',
    ticker: 'VAN0110AU',
    exchange: '',
    fee: '0.29%',
    risk: 'High to very high & 7 years+',
    nav: '$1.6247',
    currency: 'AUD',
    keyObjective: 'Vanguard Growth Index Fund seeks to track the weighted average return of the various indices of the Underlying Funds in which it invests, in proportion to the Strategic Asset Allocation, before taking into account fees, expenses and tax.',
    overview: 'The Fund targets a 30% allocation to income asset classes and a 70% allocation to growth asset classes.',
    suitability: 'Buy and hold investors seeking long term capital growth, and with a higher tolerance for the risks associated with investing in the share market (including higher volatility and the potential for losses).'
  }
];

export default function ProductDetails() {

  let { id } = useParams();
  const product = products.find(p => p.ticker === id);

  return (
    <React.Fragment>
        {product && 
          <Box component="section">
            <Typography variant='h3'>
              {product.name}
            </Typography>
            <Typography variant='h6'>
              Key objective
            </Typography>
            <Typography variant='body'>
              {product.keyObjective}
            </Typography>
            <Typography variant='h6'>
              Fund overview
            </Typography>
            <Typography variant='body'>
              {product.overview}
            </Typography>
            <Typography variant='h6'>
              Suitability
            </Typography>
            <Typography variant='body'>
              {product.suitability}
            </Typography>
          </Box>
        }
    </React.Fragment>
  );
}
