import React from 'react';
import { Experience } from '../types/types';

interface ExperienceSectionProps {
  experience: Experience[];
  onChange: (index: number, field: keyof Experience, value: string) => void;
  addExperience: () => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience, onChange, addExperience }) => {
  return (
    <div>
      <label>Expérience</label>
      {experience.map((exp, index) => (
        <div key={index} className="space-y-2 mb-4">
          <select
            value={exp.annee}
            onChange={(e) => onChange(index, 'annee', e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          >
            <option value="" disabled>Année d'expérience</option>
            {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Nom de l'entreprise"
            value={exp.entreprise}
            onChange={(e) => onChange(index, 'entreprise', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Description de l'expérience"
            value={exp.description}
            onChange={(e) => onChange(index, 'description', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      ))}
      <button type="button" onClick={addExperience} className="p-2 bg-purple-700 hover:bg-orange-400 text-white rounded">Ajouter Expérience</button>
    </div>
  );
};

export default ExperienceSection;
