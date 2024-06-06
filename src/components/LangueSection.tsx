import React from 'react';
import { Langue } from '../types/types';

interface LangueSectionProps {
  langues: Langue[];
  onChange: (index: number, field: keyof Langue, value: string | number) => void;
  addLangue: () => void;
}

const LangueSection: React.FC<LangueSectionProps> = ({ langues, onChange, addLangue }) => {
  return (
    <div>
      <label>Langues</label>
      {langues.map((langue, index) => (
        <div key={index} className="space-y-2 mb-4">
          <input
            type="text"
            placeholder="Langue"
            value={langue.langue}
            onChange={(e) => onChange(index, 'langue', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={langue.niveau}
            onChange={(e) => onChange(index, 'niveau', parseInt(e.target.value))}
            className="w-full "
          />
        </div>
      ))}
      <button type="button" onClick={addLangue} className="p-2 bg-purple-700 text-white rounded">Ajouter Langue</button>
    </div>
  );
};

export default LangueSection;
