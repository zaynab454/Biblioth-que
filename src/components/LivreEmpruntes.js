import React, { useContext } from 'react';
import { EmpruntContext } from '../context/EmpruntContext';

const LivresEmpruntes = () => {
    const { emprunts, returnLivre } = useContext(EmpruntContext);

    return (
        <div className="mb-4">
            <h2 className="text-center mb-3">Livres empruntés</h2>
            <table className="table table-secondary">
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(emprunts).map((id) => {
                        if (emprunts[id]) {
                            const livre = { id, titre: `Livre ${id}`, auteur: `Auteur ${id}` }; // Simuler les livres empruntés
                            return (
                                <tr key={id}>
                                    <td>{livre.titre}</td>
                                    <td>{livre.auteur}</td>
                                    <td>
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={() => returnLivre(id)}
                                        >
                                            Rendre
                                        </button>
                                    </td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default LivresEmpruntes;
