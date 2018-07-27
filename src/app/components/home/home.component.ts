import { Component, OnInit } from '@angular/core';
import { TechCurriculumComponent } from 'src/app/components/tech-curriculum/tech-curriculum.component';
import { YouthDevelopmentComponent } from 'src/app/components/youth-development/youth-development.component';
import { ProductDevelopmentComponent } from 'src/app/components/product-development/product-development.component';
import { CultureComponent } from 'src/app/components/culture/culture.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  toTechCurriculum() {
    this.router.navigateByUrl('Tech-Curriculum');
  }

  toYouthDevelopment() {
    this.router.navigateByUrl('Youth-Development');
  }

  toTXTCulture() {
    this.router.navigateByUrl('TXT-Culture');
  }

  toProductDevelopment() {
    this.router.navigateByUrl('Product-Development');
  }

}
