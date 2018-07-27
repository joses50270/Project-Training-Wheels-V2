import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AgileDevelopmentComponent } from 'src/app/components/product-development/agile-development/agile-development.component';
import { DesignThinkingComponent } from 'src/app/components/product-development/design-thinking/design-thinking.component';
import { ProblemStatementsComponent } from 'src/app/components/product-development/problem-statements/problem-statements.component';


@Component({
  selector: 'app-product-development',
  templateUrl: './product-development.component.html',
  styleUrls: ['./product-development.component.css']
})
export class ProductDevelopmentComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  toProblemStatements() {
    this.router.navigateByUrl('Product-Development/Problem-Statements');
  }

  toAgileDevelopment() {
    this.router.navigateByUrl('Product-Development/Agile-Development');
  }

  toDesignThinking() {
    this.router.navigateByUrl('Product-Development/Design-Thinking');
  }

}
