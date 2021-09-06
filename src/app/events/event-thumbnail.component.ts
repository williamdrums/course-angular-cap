import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
    <h2>{{event?.name}}<h2>
    <div>Date: {{event?.date | date: 'dd/MM/yyyy'}}</div>
    <div>Time: {{event?.time}}</div>
    <div>Price: \${{event?.price}}</div>
    <div *ngIf="event?.location"></div>

    <div>
        <span>Location: {{event.location.address}}</span>
        <span class="pad-left">{{event.location.city}},{{event.location.country}}</span>
    </div>
<div> 
`,
    styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    
    
`]
})
export class EventThumbnailComponent {
    @Input() event: any;

}