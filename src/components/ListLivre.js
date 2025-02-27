import React, { useEffect, useState, useContext } from 'react';
import { fetchLivres } from '../services/api';
import { EmpruntContext } from '../context/EmpruntContext';

const ListLivre = () => {
    const [livres, setLivres] = useState([]);
    const { EmpruntLivre, emprunts } = useContext(EmpruntContext);
    const [empruntStatus, setEmpruntStatus] = useState({});

    useEffect(() => {
        fetchLivres().then(setLivres);
    }, []);

    useEffect(() => {
        const status = {};
        Object.keys(emprunts).forEach((id) => {
            status[id] = emprunts[id] ? true : false; 
        });
        setEmpruntStatus(status);
    }, [emprunts]);

    const handleEmpruntClick = (id, titre, auteur) => {
        setEmpruntStatus((prevStatus) => ({
            ...prevStatus,
            [id]: true, 
        }));
        EmpruntLivre(id, titre, auteur); 
    };

    return (
        <div className="mb-4">
            <h2 className="text-center mb-3">Livres disponibles</h2>
            <table className="table table-striped">
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
                                        className={`btn ${
                                            empruntStatus[livre.id] ? 'btn-warning' : 'btn-outline-success'
                                        }`}
                                        onClick={() => handleEmpruntClick(livre.id, livre.titre, livre.auteur)}
                                        disabled={empruntStatus[livre.id]} // Désactiver le bouton si déjà emprunté
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
