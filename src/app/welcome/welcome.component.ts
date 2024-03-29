import { WelcomeDataService } from './../service/data/welcome-data.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
//package com.in28minutes.springboot.web;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';//'./app.component';
//import { AppComponent } from '../app.component';

//@ComponentScan(
//      value = "com.in28minutes.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [DatePipe]
})

//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message';
  welcomeMessageFromService:string;
  name = '';
  datePipe: DatePipe = new DatePipe('en-US');
  currDate: string;
  
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService
    ) {}

  ngOnInit(){

    this.name = this.route.snapshot.params['name'];
    this.currDate = this.getformattedDate();
        
  }
  getformattedDate(){
    
    var date = new Date();
    var transformDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    return transformDate;

  }

  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());
    
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
    //console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }

  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());
    
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
    //console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }


  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error) {
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }
}

export class Class1 {

}

export class Class2 {
  
}