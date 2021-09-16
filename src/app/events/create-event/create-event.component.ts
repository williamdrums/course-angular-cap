import { EventService } from './../shared/index';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event: any
  isDirty: boolean = true;


  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {

  }

    saveEvent(formValues: any) {
      console.log(formValues)
      this.eventService.saveEvent(formValues);
      this.isDirty = false
      this.router.navigate(['/events']);
    }

    cancel() {
      this.router.navigate(['/events']);
    }
  }
