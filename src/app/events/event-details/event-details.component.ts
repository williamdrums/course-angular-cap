import { IEvent } from './../shared/event.model';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route } from "@angular/router";
import { EventService } from "../shared/event-service";

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
    .container{ padding-left:20px; padding-rigth: 20px; }
    .event-image: { height: 100px;}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent | undefined;

    constructor
    (
        private eventService: EventService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.event = this.eventService.getEventById(
             +this.route.snapshot.params['id']);
    }
}