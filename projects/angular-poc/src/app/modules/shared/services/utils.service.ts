import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  normaliserRecherche(valeur: string) {
    return valeur.replace(/[èéêëÈÉÊË]/g, "e").replace(/[ùúûüÙÚÛÜ]/g, "u").replace(/[ìíîïÌÍÎÏ]/g, "i").replace(/[àáâäÀÁÂÄ]/g, "a").replace(/[òóôöÒÓÔÖ]/g, "o")
      .replace(/[çÇ]/g, "c").replace("-", "").replace(" ", "").replace("'", "").replace("‘", "").replace("\"", "").toUpperCase();
  }

  isEmpty(str: string) {
    return (!str || str.length === 0);
  }
}
