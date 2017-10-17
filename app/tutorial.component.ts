import {Component} from "@angular/core";
@Component ({
    selector: 'my-tutorial',
    template:`
        <h2>This is Tutorial Component</h2>
        <input type="text" [(ngModel)]="fname"/>
        <input type="text" [(ngModel)]="lname"/>
        <br/>
        Full name: {{fname}} {{lname}}
        <br/>
        <button (click)="OnClick($event)">Click me</button>
        <input type="text" #name/>
    `
})
export class TutorialComponent {
    OnClick(value){
        console.log(value);
    }
}