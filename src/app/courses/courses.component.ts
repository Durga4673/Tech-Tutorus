import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  
  isFirst = true;
  constructor(private router: Router) {}

  cards = [
    { 
      title: 'AWS',
      imgSrc: 'assets/images/aws-dh.png',
    },
    
    { 
      title: 'Data Science with Python',
      imgSrc: 'assets/images/python-datascience-dh.jpg',
    },
    { 
      title: 'Devops',
      imgSrc: 'assets/images/devops-dh.jpg',
    },
    { 
      title: 'Python',
      imgSrc: 'assets/images/python-training-emexo.png',
    },
    
    { 
      title: 'RPA',
      imgSrc: 'assets/images/RPA-dh.jpg',
    },

    { 
      title: 'Salesforce',
      imgSrc: 'assets/images/salesforce-cloud-logo.jpg'
    },
    { 
      title: 'Selenium',
      imgSrc: 'assets/images/selenium-dh.png'
    },
   
    { 
      title: 'Data Science',
      imgSrc: 'assets/images/data-science-dh.jpg',
    },

    { 
      title: 'Block Chain',
      imgSrc: 'assets/images/blockchain-technology.jpg',
    },

    { 
      title: 'Scrum Master',
      imgSrc: 'assets/images/scrum-master.jpg',
    },
  
  ];

  goToCourseDetail(title: string): void {
    this.router.navigate(['/courses', title.replace(/\s/g, '-')]);
  }

}
