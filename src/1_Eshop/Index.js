import React from 'react';
import Header from "./components/Header";
import Home from './components/Home';
import Checkout from './components/Checkout';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from "react-router-dom";

function Index() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/" element={<Home />} />
                </Switch>
            </Router>
        </div>
    )
}

export default Index