import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CreateUserComponent } from './create-user/create-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatCardModule} from '@angular/material/card';
import { authInterceptorProvider } from './services/auth.interceptor';
import { AdminDashboardComponent } from './dashboard/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './dashboard/user/user-dashboard/user-dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './dashboard/admin/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './dashboard/admin/sidebar/sidebar.component';
import { ViewCategoriesComponent } from './dashboard/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './dashboard/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './dashboard/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './dashboard/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './dashboard/admin/update-quiz/update-quiz.component';
import { ViewQuizquestionsComponent } from './dashboard/admin/view-quizquestions/view-quizquestions.component';
import { AddQuestionComponent } from './dashboard/admin/add-question/add-question.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-build-classic';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UpdateQuestionComponent } from './dashboard/admin/update-question/update-question.component';
import { SidebarComponent as UserSideBar } from './dashboard/user/sidebar/sidebar.component';
import { LoadQuizComponent } from './dashboard/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './dashboard/user/instructions/instructions.component';
import { StartQuizComponent } from './dashboard/user/start-quiz/start-quiz.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import {  NgxUiLoaderHttpModule } from "ngx-ui-loader";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateUserComponent,
    LoginComponent,
    HomePageComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizquestionsComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    UserSideBar,
    LoadQuizComponent,
    InstructionsComponent,
    StartQuizComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  ],
  
    
    
  
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
