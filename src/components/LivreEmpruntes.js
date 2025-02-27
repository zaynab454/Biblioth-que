import React, { useContext } from 'react';
import { EmpruntContext } from '../context/EmpruntContext';

const LivresEmpruntes = () => {
    const { emprunts, returnLivre } = useContext(EmpruntContext);

    return (
        <div className="mb-4">
            <h2 className="text-center mb-3">Livres empruntés</h2>
            <table className="table table-danger">
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(emprunts).map((id) => (
                        <tr key={id}>
                            <td>{emprunts[id].titre}</td>
                            <td>{emprunts[id].auteur}</td>
                            <td>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => returnLivre(id)}
                                >
                                    Rendre
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LivresEmpruntes;
