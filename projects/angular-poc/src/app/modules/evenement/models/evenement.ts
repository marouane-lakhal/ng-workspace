import { Municipalite } from "../../municipalite/models/municipalite";
import { Candidat } from "../../shared/models/candidat";
import { TypeEvenement } from "../../shared/models/TypeEvenement";

export interface Evenement {
  id: number | null;
  dateScrutin: Date;
  typeEvenement: TypeEvenement;
  municipalite: Municipalite;
  candidats: Candidat[];
  version?: number;
  [key: string]: any;
}
