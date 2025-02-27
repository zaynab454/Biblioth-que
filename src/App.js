import React from 'react';
import { EmpruntProvider } from './context/EmpruntContext';
import ListLivre from './components/ListLivre';
import LivresEmpruntes from './components/LivreEmpruntes'; 
import "./index.css";
import "./App.css";

const App = () => {
    return (
        <EmpruntProvider>
            <div className="container mt-5">
                <h1 className="text-center mb-4"><em><strong>Gestion des emprunts</strong></em></h1>
                <ListLivre />
                <LivresEmpruntes />
            </div>
        </EmpruntProvider>
    );
};

export default App;
