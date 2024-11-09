import { mount } from 'product/ProductApp'
import React, { useRef, useEffect } from 'react'
import styles from './ProductApp.module.css'

export default () => {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current)
    }, [])


    return <div ref={ref} className={styles.products}/>
}