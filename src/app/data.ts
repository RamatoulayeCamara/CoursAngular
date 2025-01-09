import {Carte, Class, Departement, Etudiants} from "./ipslModule";

export var  deptGIT:Departement={
  code: "GIT",
  nom: "Genie Informatique et Telecom"

};

export var  deptGEC:Departement={
  code: "GEC",
  nom: "Genie Civil"

};


export var  deptGEM:Departement={
  code: "GEM",
  nom: "Genie Electromecanique"

};


export var  ListeDept:Departement[]=[
  deptGIT,deptGEM,deptGEC
]

export var ing3Info:Class={
  code: "ing3",
  description: "Derniere annee cycle ing",
  filliere: { code: "info", nom: "Informatique", dept: deptGIT },
  nom: "ING3"

}

export var etudiantMkml: Etudiants= {
  adresse: "Bambey",
  classe: ing3Info,
  code: "P3040",
  email: "email@gmail.com",
  nom: "Leye",
  prenom: "Mame Khady",
  telephone: "777567657"

}

export  var ListeEtudiants: Etudiants[]=[
  etudiantMkml,
  {
    adresse: "Bambey",
    classe: ing3Info,
    code: "P3040",
    email: "email@gmail.com",
    nom: "Leye",
    prenom: "Mame Khady",
    telephone: "777567657"

},{
    adresse: "Thies",
    classe: ing3Info,
    code: "P3044",
    email: "sylla@gmail.com",
    nom: "Sylla",
    prenom: "Ablaye",
    telephone: "777007657"

  },{
    adresse: "kaolack",
    classe: ing3Info,
    code: "P3045",
    email: "mor@gmail.com",
    nom: "Mboup",
    prenom: "Mor",
    telephone: "777007657"

  }

]
export var carteMkml: Carte={
  id:6788678,
  anneDebut:2020,
  dateDeliv:new Date(2020, 0, 1),
  etudiant: etudiantMkml,
  filliere: ing3Info.filliere
}
