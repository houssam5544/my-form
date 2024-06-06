import React from 'react';
import { Education } from '../types/types';

interface EducationSectionProps {
  education: Education[];
  onChange: (index: number, field: keyof Education, value: string) => void;
  addEducation: () => void;
}

const EducationSection: React.FC<EducationSectionProps> = ({ education, onChange, addEducation }) => {
  return (
    <div>
      <label>Éducation</label>
      {education.map((edu, index) => (
        <div key={index} className="space-y-2 mb-4">
          <select
            value={edu.annee}
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
            placeholder="Nom de l'établissement"
            value={edu.etablissement}
            onChange={(e) => onChange(index, 'etablissement', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Filière"
            value={edu.filiere}
            onChange={(e) => onChange(index, 'filiere', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      ))}
      <button type="button" onClick={addEducation} className="p-2 bg-purple-700 hover:bg-orange-400 text-white rounded">Ajouter Éducation</button>
    </div>
  );
};

export default EducationSection;
