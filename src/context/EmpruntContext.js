import React, { createContext, useState } from 'react';

export const EmpruntContext = createContext();

export const EmpruntProvider = ({ children }) => {
    const [emprunts, setEmprunts] = useState([]);

    const EmpruntLivre = (id) => {
        setEmprunts((prev) => [...prev, { id, titre: `Livre ${id}`, auteur: `Auteur ${id}` }]);
    };

    const returnLivre = (id) => {
        setEmprunts((prev) => prev.filter((livre) => livre.id !== id));
    };

    return (
        <EmpruntContext.Provider value={{ emprunts, EmpruntLivre, returnLivre }}>
            {children}
        </EmpruntContext.Provider>
    );
};
