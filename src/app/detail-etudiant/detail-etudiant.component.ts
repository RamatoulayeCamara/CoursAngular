import {Component, OnInit} from '@angular/core';
import {Carte, Etudiants} from "../ipslModule";
import {carteMkml, etudiantMkml} from "../data";
import {DatePipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-detail-etudiant',
  standalone: true,
  imports: [
    JsonPipe,
    DatePipe
  ],
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.scss']
})
export class DetailEtudiantComponent implements OnInit{
  etudiant?: Etudiants;
  carte?: Carte;

  ngOnInit(): void {
    this.etudiant=etudiantMkml;
    this.carte=carteMkml;

  }



}
