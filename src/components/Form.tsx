import React, { useState } from 'react';
import { Education, Experience, Parascolaire, Competence, Langue, Interet, FormData } from '../types/types';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import ParascolaireSection from './ParascolaireSection';
import CompetenceSection from './CompetenceSection';
import LangueSection from './LangueSection';
import InteretSection from './InteretSection';


const Form: React.FC = () => {
  
  const [formData, setFormData] = useState<FormData>({
  
    prenom: '',
    nom: '',
    email: '',
    adresse: '',
    jour: '',
    mois: '',
    annee: '',
    linkedin: '',
    telephone: '',
    education: [{ annee: '', etablissement: '', filiere: '' }],
    experience: [{ annee: '', entreprise: '', description: '' }],
    parascolaire: [{ annee: '', club: '', tache: '' }],
    competences: [{ competence: '', niveau: 50 }],
    langues: [{ langue: '', niveau: 50 }],
    interets: [{ interet: '' }],
    about: '',
  });

  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSectionChange = <T,>(section: keyof FormData, index: number, field: keyof T, value: any) => {
  if (Array.isArray(formData[section])) {
    const newSection = (formData[section] as T[]).map((item, i) =>
        i === index ? { ...item, [field]: value } : item
    
  );
      setFormData((prevData) => ({ ...prevData, [section]: newSection }));
    }
  };

  const handleAddField = (section: keyof FormData) => {
  
    let newField: any;
  
    switch (section) {
  
      case 'education':
        newField = { annee: '', etablissement: '', filiere: '' };
        break;
  
        case 'experience':
        newField = { annee: '', entreprise: '', description: '' };
        break;
  
        case 'parascolaire':
        newField = { annee: '', club: '', tache: '' };
        break;
  
        case 'competences':
        newField = { competence: '', niveau: 50 };
        break;
  
        case 'langues':
        newField = { langue: '', niveau: 50 };
        break;
  
        case 'interets':
        newField = { interet: '' };
        break;
      default:
        return;
    }
  
    setFormData((prevData) => ({ ...prevData, [section]: [...prevData[section], newField] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  
    e.preventDefault();
    console.log(formData);
  };

  return (
  
  <div className="max-w-4xl border-b rounded-lg border-gray-700 bg-gray-800 p-6 shadow-2xl text-center mx-48 mt-10">
      <h1 className="text-2xl font-bold mb-4">Remplissez vos informations</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* prnm nom */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label>Prénom</label>
            <input type="text" id="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded"/>
          </div>
          <div className="w-1/2">
            <label>Nom</label>
            <input type="text" id="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded"/>
          </div>
        </div>

        {/* eml */}
        <div>
          <label>Email</label>
          <input type="email" id="email" placeholder="Adresse Eléctronique" value={formData.email} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded"/>
        </div>

        {/* adrs */}
        <div>
          <label>Adresse</label>
          <input type="text" id="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded"/>
        </div>

        {/* date nais */}
        <div>
  
          <label>Date de Naissance</label>
          <div className="flex space-x-2">
  
            <select id="jour" value={formData.jour} onChange={handleChange} required className="px-12 py-2 border border-gray-300 rounded">
              <option value="" disabled>Jour</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
            <select id="mois" value={formData.mois} onChange={handleChange} required className="px-12 border border-gray-300 rounded">
              <option value="" disabled>Mois</option>
              {['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'].map((month, index) => (
                <option key={index} value={index + 1}>{month}</option>
              ))}
            </select>
            <select id="annee" value={formData.annee} onChange={handleChange} required className="px-12 border border-gray-300 rounded">
              <option value="" disabled>Année</option>
              {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* linkdin */}
        <div>
          <label>LinkedIn</label>
          <input type="text" id="linkedin" placeholder="LinkedIn" value={formData.linkedin} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded"/>
        </div>

        {/* tel */}
        <div>
          <label>Téléphone</label>
          <input type="tel" id="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded"/>
        </div>

        {/* educa */}
        <EducationSection
          education={formData.education}
          onChange={(index, field, value) => handleSectionChange<Education>('education', index, field, value)}
          addEducation={() => handleAddField('education')}
        />

        {/* exper */}
        <ExperienceSection
          experience={formData.experience}
          onChange={(index, field, value) => handleSectionChange<Experience>('experience', index, field, value)}
          addExperience={() => handleAddField('experience')}
        />

        {/* parasc */}
        <ParascolaireSection
          parascolaire={formData.parascolaire}
          onChange={(index, field, value) => handleSectionChange<Parascolaire>('parascolaire', index, field, value)}
          addParascolaire={() => handleAddField('parascolaire')}
        />

        {/* cmpt */}
        <CompetenceSection
          competences={formData.competences}
          onChange={(index, field, value) => handleSectionChange<Competence>('competences', index, field, value)}
          addCompetence={() => handleAddField('competences')}
        />

        {/* lng */}
        <LangueSection
          langues={formData.langues}
          onChange={(index, field, value) => handleSectionChange<Langue>('langues', index, field, value)}
          addLangue={() => handleAddField('langues')}
        />

        {/* cntr intre */}
        <InteretSection
          interets={formData.interets}
          onChange={(index, field, value) => handleSectionChange<Interet>('interets', index, field, value)}
          addInteret={() => handleAddField('interets')}
        />

        {/* about */}
        <div>
          <label>À propos</label>
          <textarea
            id="about"
            value={formData.about}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button type="submit" className="mt-16 text-3xl font-bold bg-purple-700 hover:bg-orange-400 text-white rounded px-32 py-8 ">Soumettre</button>
      </form>
    </div>
  );
};

export default Form;

         
