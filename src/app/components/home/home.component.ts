import { Component, OnInit } from '@angular/core';
import { sportsData } from '../../data/sportsData';
import { DataService } from '../../services/data.service';

//SweetAlert2
import Swal from 'sweetalert2'
import { IDocumentData, ISportsData } from '../../interfaces/Data.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sports:Array <IDocumentData|ISportsData> =sportsData;
  totalData:Array<IDocumentData>;
  haveFilterData:boolean = false;

  constructor(private dataService : DataService) {
    this.totalData=this.dataService.getTotalData();
    this.dataService.enviarSearchWordObservable.subscribe(searchWord=>{
      //Swal.showLoading();
      const auxData=this.totalData.filter(x=>(this.removeAccents(x.title.toLowerCase()).includes(this.removeAccents(searchWord.toLowerCase())) ||
                                              this.removeAccents(x.content.toLowerCase()).includes(this.removeAccents(searchWord.toLowerCase()))));
      if(!auxData.length ) {

        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `No se encontraron resultados para "${searchWord}"!`,
      })}
      else{
        this.sports=auxData;
        this.haveFilterData=!!searchWord.length;
        console.log(this.haveFilterData);
      }
      //Swal.close();
    })
    
   }

  ngOnInit(): void {
    
  }

  removeAccents(str:string):string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

}
