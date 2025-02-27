import React, { createContext, useState } from 'react';

// Création du contexte
export const EmpruntContext = createContext();

// Fournisseur du contexte
export const EmpruntProvider = ({ children }) => {
    // L'état des emprunts : un objet où chaque clé est l'ID d'un livre, et la valeur est un objet avec ses détails
    const [emprunts, setEmprunts] = useState({});

    // Fonction pour emprunter un livre
    const EmpruntLivre = (id, titre, auteur) => {
        setEmprunts((prev) => ({
            ...prev,
            [id]: { id, titre, auteur }, // Ajout du livre dans l'état
        }));
    };

    // Fonction pour retourner un livre
    const returnLivre = (id) => {
        setEmprunts((prev) => {
            const updatedEmprunts = { ...prev };
            delete updatedEmprunts[id]; // Suppression du livre retourné
            return updatedEmprunts;
        });
    };

    return (
        <EmpruntContext.Provider value={{ emprunts, EmpruntLivre, returnLivre }}>
            {children}
        </EmpruntContext.Provider>
    );
};
