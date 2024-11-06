import React from 'react';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import { AppProvider } from './Context/AppContext';

const App = () => (
    <AppProvider>
        <Navbar />
        <AllRoutes />
    </AppProvider>
);

export default App;