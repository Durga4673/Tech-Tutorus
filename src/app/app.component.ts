import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  constructor( private _dialog : MatDialog,
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(event => {
      const title = event['title'] ? `TechTutorus | ${event['title']}` : 'TechTutorus';
      this.titleService.setTitle(title);
    });
  }

  openEmployeeForm(){
    const dialogRef = this._dialog.open(DashboardComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          // this.getEmployeeList();
        }
      }
     })
    }
}
