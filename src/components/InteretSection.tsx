import React from 'react';
import { Interet } from '../types/types';

interface InteretSectionProps {
  interets: Interet[];
  onChange: (index: number, field: keyof Interet, value: string) => void;
  addInteret: () => void;
}

const InteretSection: React.FC<InteretSectionProps> = ({ interets, onChange, addInteret }) => {
  return (
    <div>
      <label>Centres d'intérêt</label>
      {interets.map((interet, index) => (
        <div key={index} className="space-y-2 mb-4">
          <input
            type="text"
            placeholder="Centre d'intérêt"
            value={interet.interet}
            onChange={(e) => onChange(index, 'interet', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      ))}
      <button type="button" onClick={addInteret} className="p-2 bg-purple-700 hover:bg-orange-400 text-white rounded">Ajouter Centre d'intérêt</button>
    </div>
  );
};

export default InteretSection;
