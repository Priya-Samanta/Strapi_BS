import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useEffect, useState} from 'react'
import Head from 'next/head'



function MyApp({ Component, pageProps }) {

  return <><NavBar /*key={reloadKey} cart={cart}*/ /><Component /*cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} */{...pageProps} /><Footer/></>
}

export default MyApp