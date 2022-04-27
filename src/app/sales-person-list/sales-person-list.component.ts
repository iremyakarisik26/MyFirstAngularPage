import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';
declare let alertify:any;
@Component({ 
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


// Create an array of objects
salesPersonList: SalesPerson [] =[
  new SalesPerson("LENOVO LEGION","LAPTOP i7 ",10000),
  new SalesPerson("ASUS ZENBOOK","LAPTOP i7",12000),
  new SalesPerson("MICROSOFT","MOUSE KIRMIZI",200),
  new SalesPerson("HUAWEI FREEBUDS PRO","BLUETHOOT KULAKLIK",1800)
];
 
  constructor() { 
    
  }

  addToBasket(){
    alertify.success('Sepete Eklendi');
  }
  
  minusToBasket(){
    alertify.error('Sepetten Çıkarıldı');
  }

  ngOnInit(): void {
  }

}



