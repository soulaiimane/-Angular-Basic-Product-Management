import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  customer!:Array<any> ;
  ngOnInit(): void {
    this.customer=[
      {id:1,DateInf:"08/06/2023",Marque:"Dacia",Puissance:150.6,Modele:"2023",ProprietaireId:6},
      {id:2,DateInf:"05/01/2023",Marque:"Volkswagen",Puissance:150.6,Modele:"2020",ProprietaireId:7},
      {id:3,DateInf:"11/30/2023",Marque:"Toyota",Puissance:150.6,Modele:"2021",ProprietaireId:1},
      {id:4,DateInf:"04/17/2023",Marque:"Mercedes",Puissance:150.6,Modele:"2022",ProprietaireId:6},
      {id:5,DateInf:"03/15/2023",Marque:"Audi",Puissance:150.6,Modele:"2020",ProprietaireId:9},
      {id:6,DateInf:"07/06/2023",Marque:"BMW",Puissance:150.6,Modele:"2013",ProprietaireId:7},
      {id:7,DateInf:"03/25/2023",Marque:"Hyundai",Puissance:150.6,Modele:"2014",ProprietaireId:6},
      {id:8,DateInf:"01/18/2023",Marque:"Renault",Puissance:150.6,Modele:"2010",ProprietaireId:1},

    ];
  }

}
