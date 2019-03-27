import { Component } from '@angular/core';

@Component({
    //  selector:'[first-call]',
    selector: '.first-call',
     templateUrl: './first.component.html',
     styleUrls: ['./first.component.css']
 }) 
 export class  ServerComponent {
server =false;
     myage :number=24;
     myname: string='abhilash';
inputdata='';
status=false;
constructor(){
    setTimeout(() =>{
{
    this.server=true;
}
 }, 2000);
}

ngOnInit(){}

call(event: Event){
    this.inputdata= (<HTMLInputElement>event.target).value;
    if(this.inputdata!=null){
this.status=true;
}
else{
    this.status=false;
}
 } 
 reset(){
this.inputdata='';
 }}