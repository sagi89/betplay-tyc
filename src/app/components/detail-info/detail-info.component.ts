import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../services/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { pagesModules } from './pagesImport'

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.css'],
})
export class DetailInfoComponent implements OnInit{
  data:any;
  components: any = pagesModules
  

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService,
    public sanitizer : DomSanitizer
  ) {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.route.url.subscribe(() => {
      this.getData();
    });
  }
  

  getData(): void {
    const title = this.route.snapshot.paramMap.get('detalle')?.split('_').join(' ');
    this.data = this.dataService.getDataDetail(title ? title : '');
    if(this.data.isComponent) this.data.content = this.components[this.data.content];
  }

  support ():boolean {
    if (!window.DOMParser) return false;
    var parser = new DOMParser();
    try {
      parser.parseFromString('x', 'text/html');
    } catch(err) {
      return false;
    }
    return true;
  }


  // stringToHTML (str:string) {

  //   // If DOMParser is supported, use it
  //   if (this.support()) {
  //     var parser = new DOMParser();
  //     var doc = parser.parseFromString(str, 'text/html');
  //     return doc.body;
  //   }
  
  //   // Otherwise, fallback to old-school method
  //   var dom = document.createElement('div');
  //   dom.innerHTML = str;
  //   return dom;
  
  // };
}
