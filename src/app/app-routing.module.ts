import { InstantiateExpr } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { AddCategoryComponent } from './dashboard/admin/add-category/add-category.component';
import { AddQuestionComponent } from './dashboard/admin/add-question/add-question.component';
import { AddQuizComponent } from './dashboard/admin/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './dashboard/admin/admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './dashboard/admin/profile/profile.component';
import { UpdateQuestionComponent } from './dashboard/admin/update-question/update-question.component';
import { UpdateQuizComponent } from './dashboard/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './dashboard/admin/view-categories/view-categories.component';
import { ViewQuizquestionsComponent } from './dashboard/admin/view-quizquestions/view-quizquestions.component';
import { ViewQuizzesComponent } from './dashboard/admin/view-quizzes/view-quizzes.component';
import { InstructionsComponent } from './dashboard/user/instructions/instructions.component';
import { LoadQuizComponent } from './dashboard/user/load-quiz/load-quiz.component';
import { StartQuizComponent } from './dashboard/user/start-quiz/start-quiz.component';
import { UserDashboardComponent } from './dashboard/user/user-dashboard/user-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminGaurdGuard } from './services/admin-gaurd.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  { path: 'create-user', component: CreateUserComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGaurdGuard], children: [{ path: '', component: HomePageComponent }, { path: 'profile', component: ProfileComponent }, { path: 'categories', component: ViewCategoriesComponent }, { path: 'addcategory', component: AddCategoryComponent }, { path: 'quizzes', component: ViewQuizzesComponent }, { path: 'add-quiz', component: AddQuizComponent }, { path: 'quiz/:qid', component: UpdateQuizComponent }, { path: 'view-questions/:qid/:title', component: ViewQuizquestionsComponent },{path:'add-question/:qid/:title',component:AddQuestionComponent},{path:'update-question/:quesId',component:UpdateQuestionComponent}] },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [NormalGuard] ,children:[{
    path:':catId',component:LoadQuizComponent
  },{
    path:'instructions/:qid',component:InstructionsComponent
  },] }
  ,{
    path:'start/:qid',component:StartQuizComponent,
    canActivate: [NormalGuard]
  }
  // {path:'',redirectTo:'create-user',pathMatch:'full'},
  // {path:'',redirectTo:'create-user',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
