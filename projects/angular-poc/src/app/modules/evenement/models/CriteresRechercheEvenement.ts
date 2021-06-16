import { TypeEvenement } from "../../shared/models/TypeEvenement";

export interface CriteresRechercheEvenement {
    dateScrutin: Date | null;
    municipalite: string | null;
    type: TypeEvenement | null;
  }