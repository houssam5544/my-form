import React from 'react';
import { Parascolaire } from '../types/types';

interface ParascolaireSectionProps {
  parascolaire: Parascolaire[];
  onChange: (index: number, field: keyof Parascolaire, value: string) => void;
  addParascolaire: () => void;
}

const ParascolaireSection: React.FC<ParascolaireSectionProps> = ({ parascolaire, onChange, addParascolaire }) => {
  return (
    <div>
      <label>Activités Parascolaires</label>
      {parascolaire.map((activity, index) => (
        <div key={index} className="space-y-2 mb-4">
          <select
            value={activity.annee}
            onChange={(e) => onChange(index, 'annee', e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          >
            <option value="" disabled>Année Scolaire</option>
            {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Nom du club"
            value={activity.club}
            onChange={(e) => onChange(index, 'club', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Tâche"
            value={activity.tache}
            onChange={(e) => onChange(index, 'tache', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      ))}
      <button type="button" onClick={addParascolaire} className="p-2 bg-purple-700 hover:bg-orange-400 text-white rounded">Ajouter Activité</button>
    </div>
  );
};

export default ParascolaireSection;
