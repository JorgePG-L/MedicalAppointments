import React from 'react';
import Header from '../components/Header/header';
import Routers from '../routes/Routers';
import Footer from '../components/Footer/Footer';

const Layout = () => {
    return <>
    <Header/>
    <main>
        <Routers/>
    </main>
    <Footer/>
    </>;
}
 
export default Layout;
