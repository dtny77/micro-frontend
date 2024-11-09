import React from "react";
import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header";
import ProductApp from "./components/ProductApp";
import styles from './App.module.css';

export default () => {
    console.log('style ', styles.app);
    return (
    <BrowserRouter>
        <div className={styles.app}>
            <Header/>
            <ProductApp/>
        </div>
    </BrowserRouter>)
    
}