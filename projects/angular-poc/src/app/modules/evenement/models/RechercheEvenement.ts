import { TypeEvenement } from "../../shared/models/TypeEvenement";

export interface RechercheEvenement {
  dateScrutin: Date | null;
  municipalite: string | null;
  typeEvenement: TypeEvenement | null;
}