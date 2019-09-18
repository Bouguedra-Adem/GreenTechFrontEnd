import { Doc } from '../Lot1_5/doc';
import { Demand } from '../Lot1_5/demand';

export class User {
    id: any;
    nom: String;
    prenom: String;
    nss: String;
    email: String;
    organisme: String;
    numTelf: String;
    pass: String;
    role: String;
    valide:any;
    demandeRess:Demand[];
    doc: Doc[];



}

