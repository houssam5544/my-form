export interface Education {
    annee: string;
    etablissement: string;
    filiere: string;
  }
  
  export interface Experience {
    annee: string;
    entreprise: string;
    description: string;
  }
  
  export interface Parascolaire {
    annee: string;
    club: string;
    tache: string;
  }
  
  export interface Competence {
    competence: string;
    niveau: number;
  }
  
  export interface Langue {
    langue: string;
    niveau: number;
  }
  
  export interface Interet {
    interet: string;
  }
  
  export interface FormData {
    prenom: string;
    nom: string;
    email: string;
    adresse: string;
    jour: string;
    mois: string;
    annee: string;
    linkedin: string;
    telephone: string;
    education: Education[];
    experience: Experience[];
    parascolaire: Parascolaire[];
    competences: Competence[];
    langues: Langue[];
    interets: Interet[];
    about: string;
  }
  