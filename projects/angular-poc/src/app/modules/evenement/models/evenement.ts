import { Municipalite } from "../../municipalite/models/municipalite";
import { TypeEvenement } from "../../shared/models/TypeEvenement";

export interface Evenement {
  id: number | null;
  dateScrutin: Date;
  type: TypeEvenement;
  municipalite: Municipalite;
  version?: number;
  [key: string]: any;
}
