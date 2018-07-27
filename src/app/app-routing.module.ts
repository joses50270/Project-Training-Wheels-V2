import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Main Pages
import { HomeComponent } from 'src/app/components/home/home.component';
import { SplashComponent } from 'src/app/components/splash/splash.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { TechCurriculumComponent } from 'src/app/components/tech-curriculum/tech-curriculum.component';
import { ProductDevelopmentComponent } from 'src/app/components/product-development/product-development.component';
import { YouthDevelopmentComponent } from 'src/app/components/youth-development/youth-development.component';
import { CultureComponent } from 'src/app/components/culture/culture.component';

// Tech Curriculum
import { AngularComponent } from 'src/app/components/tech-curriculum/angular/angular.component';
import { BootstrapComponent } from 'src/app/components/tech-curriculum/bootstrap/bootstrap.component';
import { CssComponent } from 'src/app/components/tech-curriculum/css/css.component';
import { GitComponent } from 'src/app/components/tech-curriculum/git/git.component';
import { HerokuComponent } from 'src/app/components/tech-curriculum/heroku/heroku.component';
import { HtmlComponent } from 'src/app/components/tech-curriculum/html/html.component';
import { IonicComponent } from 'src/app/components/tech-curriculum/ionic/ionic.component';
import { JsComponent } from 'src/app/components/tech-curriculum/js/js.component';
import { MongodbComponent } from 'src/app/components/tech-curriculum/mongodb/mongodb.component';
import { NodejsComponent } from 'src/app/components/tech-curriculum/nodejs/nodejs.component';
import { PythonComponent } from 'src/app/components/tech-curriculum/python/python.component';

// Product Devleopment
import { AgileDevelopmentComponent } from 'src/app/components/product-development/agile-development/agile-development.component';
import { DesignThinkingComponent } from 'src/app/components/product-development/design-thinking/design-thinking.component';
import { ProblemStatementsComponent } from 'src/app/components/product-development/problem-statements/problem-statements.component';


const routes: Routes = [
  {
    path: 'Splash',
    component: SplashComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Tech-Curriculum',
    component: TechCurriculumComponent
  },
  {
    path: 'Tech-Curriculum/Angular',
    component: AngularComponent
  },
  {
    path: 'Tech-Curriculum/Bootstrap',
    component: BootstrapComponent
  },
  {
    path: 'Tech-Curriculum/CSS',
    component: CssComponent
  },
  {
    path: 'Tech-Curriculum/Git',
    component: GitComponent
  },
  {
    path: 'Tech-Curriculum/Heroku',
    component: HerokuComponent
  },
  {
    path: 'Tech-Curriculum/HTML',
    component: HtmlComponent
  },
  {
    path: 'Tech-Curriculum/Ionic',
    component: IonicComponent
  },
  {
    path: 'Tech-Curriculum/JavaScript',
    component: JsComponent
  },
  {
    path: 'Tech-Curriculum/MongoDB',
    component: MongodbComponent
  },
  {
    path: 'Tech-Curriculum/NodeJS',
    component: NodejsComponent
  },
  {
    path: 'Tech-Curriculum/Python',
    component: PythonComponent
  },
  {
    path: 'Product-Development',
    component: ProductDevelopmentComponent
  },
  {
    path: 'Product-Development/Agile-Development',
    component: AgileDevelopmentComponent
  },
  {
    path: 'Product-Development/Design-Thinking',
    component: DesignThinkingComponent
  },
  {
    path: 'Product-Development/Problem-Statements',
    component: ProblemStatementsComponent
  },
  {
    path: 'Youth-Development',
    component: YouthDevelopmentComponent
  },
  {
    path: 'TXT-Culture',
    component: CultureComponent
  },
  {
    path: '**',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
