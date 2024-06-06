import React from 'react';
import { Competence } from '../types/types';

interface CompetenceSectionProps {
  competences: Competence[];
  onChange: (index: number, field: keyof Competence, value: string | number) => void;
  addCompetence: () => void;
}

const CompetenceSection: React.FC<CompetenceSectionProps> = ({ competences, onChange, addCompetence }) => {
  return (
    <div>
      <label>Compétences</label>
      {competences.map((competence, index) => (
        <div key={index} className="space-y-2 mb-4">
          <input
            type="text"
            placeholder="Compétence"
            value={competence.competence}
            onChange={(e) => onChange(index, 'competence', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={competence.niveau}
            onChange={(e) => onChange(index, 'niveau', parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      ))}
      <button type="button" onClick={addCompetence} className="p-2 bg-purple-700 hover:bg-orange-400 text-white rounded">Ajouter Compétence</button>
    </div>
  );
};

export default CompetenceSection;
