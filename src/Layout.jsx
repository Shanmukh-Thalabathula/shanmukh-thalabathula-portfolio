// src/components/Layout.jsx
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';
// import './Layout.css';

export default function Layout() {
    return (
        <div className="layout-container">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
