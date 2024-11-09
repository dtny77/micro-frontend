import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ProductListing from './components/ProductListing';
import { version } from 'react';
import ProductDetails from './components/ProductDetails';


export default () => {
    return <>
        <div>Vanila React {version} - Client side rendering</div>
        <BrowserRouter>
            <Switch>
                <Route path="/:id" component={ProductDetails}/>
                <Route path="/" component={ProductListing} />
            </Switch>
        </BrowserRouter>
    </>
}