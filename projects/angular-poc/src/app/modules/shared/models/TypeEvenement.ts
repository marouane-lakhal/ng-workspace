export enum TypeEvenement {
    G = "G",
    P = "P",
    N = "N",
    R = "R",
    Re = "Re"
}

export const TypeEvenementLabels: Record<TypeEvenement, string> = {
    [TypeEvenement.G]: "Élection générale",
    [TypeEvenement.P]: "Élection partielle",
    [TypeEvenement.N]: "Recommencement de procédures",
    [TypeEvenement.R]: "Référendum",
    [TypeEvenement.Re]: "Registre"
};