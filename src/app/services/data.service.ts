import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { sportsData } from '../data/sportsData';
import { menuData } from '../data/menuData';
import { CondAcuerdoData } from '../data/CondAcuerdoData';
import { ReglasGralesApuestasData } from '../data/ReglasGralesApuestasData';
import { carrerasData } from '../data/CarrerasData';
import { eSportsData } from '../data/eSportsData';
import { apuestasMasConsultadasData } from '../data/apuestasMasConsultadasData';
import { IDocumentData } from '../interfaces/Data.interface';
import * as Mark from 'mark.js';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  menuData=menuData;

  sportsData=sportsData;
  condAcuerdoData=CondAcuerdoData;
  reglasGralesApuestasData=ReglasGralesApuestasData;
  carrerasData=carrerasData;
  eSportsData=eSportsData;
  apuestasMasConsultadasData=apuestasMasConsultadasData;
  mark = new Mark(document.getElementsByName("content"));
  options:Mark.MarkOptions = {
    "element": "mark",
    "className": "",
    "exclude": [],
    "separateWordSearch": false,
    "accuracy": "partially",
    "diacritics": true,
    "synonyms": {},
    "iframes": false,
    "iframesTimeout": 5000,
    "acrossElements": false,
    "caseSensitive": false,
    "ignoreJoiners": false,
    "ignorePunctuation": [],
    "wildcards": "disabled",
    "done": function(counter){
        const results = $(".card-text").find("mark")
        if (results.length) window.scrollTo(0, (results.eq(0).offset()?.top||0)-100);
        else Swal.fire({
          title: 'No se encontraron resultados',
          text: 'Intenta con otra palabra',
        })
    },
    "debug": false,
    "log": window.console
};


  private searchWordSubject = new Subject<string>();
  enviarSearchWordObservable = this.searchWordSubject.asObservable();

  constructor() { }

  getDataDetail(title:string) {
    const data = this.sportsData.find(dat=>dat.title==title)||
           this.condAcuerdoData.find(dat=>dat.title==title)||
           this.reglasGralesApuestasData.find(dat=>dat.title==title)||
           this.carrerasData.find(dat=>dat.title==title)||
           this.eSportsData.find(dat=>dat.title==title)||
           this.apuestasMasConsultadasData.find(dat=>dat.title==title)||
           {};
           console.log("DATA EN SERVICE: ",data);
    return {...data};
  }

  getTotalData():Array<IDocumentData>{
    return [...this.sportsData,...this.condAcuerdoData,...this.reglasGralesApuestasData,...this.carrerasData,...this.eSportsData];
  }



  getSearchWord(searchWord:string){
    
    if (window.location.pathname=='/home'){
    this.searchWordSubject.next(searchWord);
    }else{
      this.mark.unmark();
      this.mark = new Mark(document.getElementsByName("content"));
      if (searchWord.length)
      this.mark.mark(searchWord,this.options);
    }
  }
}
