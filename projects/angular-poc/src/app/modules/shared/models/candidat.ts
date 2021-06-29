export interface Candidat {
    id: number | null;
    prenom: string;
    nom: string;
    nbrVotes: number | null;
    version?: number;
}