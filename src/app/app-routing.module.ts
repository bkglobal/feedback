import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'add', component: FeedbackFormComponent},
{path: 'view' , component: FeedbackComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
