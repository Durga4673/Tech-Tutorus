import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: DashboardComponent, data: { title: 'Empower Your Tech Skills with the Best Online Training Portal' } },
  { path: 'courses', component: CoursesComponent, data: { title: 'Courses' } },
  { path: 'aboutus', component: AboutUsComponent, data: { title: 'About Us' } },
  { path: 'register', component: RegisterComponentComponent, data: { title: 'Register' } },
  { path: 'blog', component: BlogComponent, data: { title: 'Blog' } },
  { path: 'blog/:title', component: BlogCardComponent, data: { title: 'Blog Details' } },
  { path: 'courses/:title', component: CourseDetailComponent, data: { title: 'Course Details' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
