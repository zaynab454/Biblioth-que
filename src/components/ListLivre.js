import React, { useEffect, useState, useContext } from 'react';
import { fetchLivres } from '../services/api';
import { EmpruntContext } from '../context/EmpruntContext';

const ListLivre = () => {
    const [livres, setLivres] = useState([]);
    const { EmpruntLivre } = useContext(EmpruntContext);
    const [empruntStatus, setEmpruntStatus] = useState({});

    useEffect(() => {
        fetchLivres().then(setLivres);
    }, []);

    // Fonction pour gérer le clic sur le bouton "Emprunter"
    const handleEmpruntClick = (id) => {
        // Marquer le livre comme emprunté dans l'état local
        setEmpruntStatus((prevStatus) => ({
            ...prevStatus,
            [id]: true,
        }));

        // Appeler la fonction EmpruntLivre de context pour effectuer l'emprunt
        EmpruntLivre(id);
    };

    return (
        <div className="mb-4">
            <h2 className="text-center mb-3">Livres disponibles</h2>
            <table className="table table-secondary">
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Disponibilité</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {livres.map((livre) => (
                        <tr key={livre.id}>
                            <td>{livre.titre}</td>
                            <td>{livre.auteur}</td>
                            <td>{livre.disponible ? 'Disponible' : 'Non disponible'}</td>
                            <td>
                                {livre.disponible && (
                                    <button
                                        className={`btn ${empruntStatus[livre.id] ? 'btn-warning' : 'btn-outline-success'}`}
                                        onClick={() => handleEmpruntClick(livre.id)}
                                    >
                                        {empruntStatus[livre.id] ? 'Emprunté' : 'Emprunter'}
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListLivre;
