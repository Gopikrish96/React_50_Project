import React from 'react';
import Header from "./components/Header";
import Home from './components/Home';
import Checkout from './components/Checkout';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import reducer, { initialState } from './context/Reducer';
import { StateProvider } from './context/StateProvider';


function Index() {
    return (
        <div>
            <StateProvider initialState={initialState} reducer={reducer}>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </StateProvider>
        </div>
    )
}

export default Index