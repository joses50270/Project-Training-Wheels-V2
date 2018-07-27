import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Main Pages
import { HomeComponent } from './components/home/home.component';
import { SplashComponent } from './components/splash/splash.component';
import { LoginComponent } from './components/login/login.component';
import { TechCurriculumComponent } from './components/tech-curriculum/tech-curriculum.component';

// Tech Curriculum
import { AngularComponent } from './components/tech-curriculum/angular/angular.component';
import { PythonComponent } from './components/tech-curriculum/python/python.component';
import { IonicComponent } from './components/tech-curriculum/ionic/ionic.component';
import { HtmlComponent } from './components/tech-curriculum/html/html.component';
import { CssComponent } from './components/tech-curriculum/css/css.component';
import { MongodbComponent } from './components/tech-curriculum/mongodb/mongodb.component';
import { NodejsComponent } from './components/tech-curriculum/nodejs/nodejs.component';
import { JsComponent } from './components/tech-curriculum/js/js.component';
import { GitComponent } from './components/tech-curriculum/git/git.component';
import { HerokuComponent } from './components/tech-curriculum/heroku/heroku.component';
import { BootstrapComponent } from './components/tech-curriculum/bootstrap/bootstrap.component';

// Prodcut Development
import { ProblemStatementsComponent } from './components/product-development/problem-statements/problem-statements.component';
import { AgileDevelopmentComponent } from './components/product-development/agile-development/agile-development.component';
import { DesignThinkingComponent } from './components/product-development/design-thinking/design-thinking.component';

// Culture
import { CultureComponent } from './components/culture/culture.component';
import { ProductDevelopmentComponent } from './components/product-development/product-development.component';
import { YouthDevelopmentComponent } from './components/youth-development/youth-development.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SplashComponent,
    LoginComponent,
    AngularComponent,
    PythonComponent,
    IonicComponent,
    HtmlComponent,
    CssComponent,
    MongodbComponent,
    NodejsComponent,
    JsComponent,
    GitComponent,
    HerokuComponent,
    BootstrapComponent,
    TechCurriculumComponent,
    ProblemStatementsComponent,
    AgileDevelopmentComponent,
    DesignThinkingComponent,
    CultureComponent,
    ProductDevelopmentComponent,
    YouthDevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
