import { DOCUMENT } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// import timeGridPligin from  '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import esLocale from '@fullcalendar/core/locales/es'

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
  public events: any[]=[];
  public options: any;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { 
        title: 'event 1', 
        date: '2021-10-20' 
      },
      { 
        title: 'event 2', 
        date: '2021-10-21' 
      },
      {
        title: "evento 1",
        date: '2021-10-14',
        description: "El evento 1"

      },
      {
        title: "evento 2",
        date: '2021-10-15',
        description: "El evento 2"
      },
      {
        title: "evento 3",
        date: '2021-10-16',
        description: "El evento 3"
      }
    ],
    editable: true 
    
  };

  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }





  
  

  constructor(private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document
    ) 
    { }

     

  ngOnInit(): void {
    // let elemento = this._document.getElementById('calendar');
    // let script = this._renderer2.createElement('script');
    // script.type = 'application/javascript';
    // script.src = '../../assets/js/funciones_especiales.js';
    // this._renderer2.appendChild(elemento,script);

    // this.options = {
    //   plugins: [dayGridPlugin, interactionPlugin, timeGridPligin, esLocale],
    //   defaultDate: new Date(),
    //   locale: esLocale,
    //   header: {
    //     left: 'prev,next today',
    //     center: 'title',
    //     right: 'dayGridMonth,timeGridWeek,timeGridDay'
    //   },
    //   editable: false 
    // }

    this.events = [
      {
        title: "evento 1",
        start: new Date(),
        description: "El evento 1"

      },
      {
        title: "evento 2",
        start: new Date(new Date().getTime() + 86400000),
        description: "El evento 2"
      },
      {
        title: "evento 3",
        start: new Date(new Date().getTime() + (86400000 * 2)),
        description: "El evento 3"
      }
    ]
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    //alerta();
    console.log(calendario);
  }

}
