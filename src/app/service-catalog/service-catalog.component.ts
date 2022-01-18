import { Component, OnInit } from '@angular/core';
import { SERVICES } from '../services';

@Component({
  selector: 'app-service-catalog',
  templateUrl: './service-catalog.component.html',
  styleUrls: ['./service-catalog.component.css']
})
export class ServiceCatalogComponent implements OnInit {
  services = SERVICES;
  constructor() { }

  ngOnInit(): void {
  }

}
