import { DOCUMENT } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking


declare const alerta: any; 
declare const calendario: any; 
declare const ini_events: any;
declare var funciones_especiales: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit, AfterContentInit {

  constructor(private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document
    ) 
    {      
     
     }

     calendarOptions: CalendarOptions = {
      initialView: 'dayGridMonth'
    };

  ngOnInit(): void {
    let elemento = this._document.getElementById('calendar');
    let script = this._renderer2.createElement('script');
    script.type = 'application/javascript';
    script.src = '../../assets/js/funciones_especiales.js';
    this._renderer2.appendChild(elemento,script);

    
    // 
    // ini_events();
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    //alerta();
    console.log(calendario);
  }

}
