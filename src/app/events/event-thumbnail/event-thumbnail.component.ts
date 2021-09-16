import { IEvent } from '../shared/event.model';
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent{
  @Input() event!: IEvent;

  constructor() { }

}
