import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AngularComponent } from 'src/app/components/tech-curriculum/angular/angular.component';
import { CssComponent } from 'src/app/components/tech-curriculum/css/css.component';
import { HtmlComponent } from 'src/app/components/tech-curriculum/html/html.component';
import { IonicComponent } from 'src/app/components/tech-curriculum/ionic/ionic.component';
import { MongodbComponent } from 'src/app/components/tech-curriculum/mongodb/mongodb.component';
import { PythonComponent } from 'src/app/components/tech-curriculum/python/python.component';

@Component({
  selector: 'app-tech-curriculum',
  templateUrl: './tech-curriculum.component.html',
  styleUrls: ['./tech-curriculum.component.css']
})
export class TechCurriculumComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  toAngular() {
    this.router.navigateByUrl('Tech-Curriculum/Angular');
  }

  toHTML() {
    this.router.navigateByUrl('Tech-Curriculum/HTML');
  }

  toCSS() {
    this.router.navigateByUrl('Tech-Curriculum/CSS');
  }

  toPython() {
    this.router.navigateByUrl('Tech-Curriculum/Python');
  }

  toIonic() {
    this.router.navigateByUrl('Tech-Curriculum/Ionic');
  }

  toMongoDB() {
    this.router.navigateByUrl('Tech-Curriculum/MongoDB')
  }

}
