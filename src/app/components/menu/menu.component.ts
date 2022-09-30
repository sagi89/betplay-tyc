import { Component, OnInit } from '@angular/core';
import { menuData } from '../../data/menuData';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuData = menuData;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  DescargarPdf(): void {
    document.getElementById('closeCanvasButton')?.click();
    window.open(
      '/assets/descarga_documento_TYC/TYC_Betplay.pdf',
      '_blank',
      'toolbar=0,menubar=0'
    );
  }

  mostrarMenu(): void {
    console.log('mostrar menu');
    document.getElementById('menu')?.classList.toggle('mostrar');
  }

  cerrarCanvas(): void {
    document.getElementById('closeCanvasButton')?.click();
  }
}
