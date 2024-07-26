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
      title: 'Devops',
      imgSrc: 'assets/images/devops-dh.jpg',
    },
    { 
      title: 'Python',
      imgSrc: 'assets/images/python.jpg',
    },
    
    { 
      title: 'RPA',
      imgSrc: 'assets/images/RPA-dh.jpg',
    },

    { 
      title: 'Salesforce',
      imgSrc: 'assets/images/Salesforce-New-Img.png'
    },
    { 
      title: 'Selenium',
      imgSrc: 'assets/images/selenium-dh.png'
    },
   
    { 
      title: 'Data Science',
      imgSrc: 'assets/images/Tech-tutorus-DataScience.png',
    },

    { 
      title: 'Block Chain',
      imgSrc: 'assets/images/blockchain-technology.jpg',
    },

    { 
      title: 'Scrum Master',
      imgSrc: 'assets/images/scrum-master.jpg',
    },
    { 
      title: 'Mule Soft',
      imgSrc: 'assets/images/mulesoft.jpg',
    },
    { 
      title: 'Power BI',
      imgSrc: 'assets/images/power-BI.jpg',
    },
    { 
      title: 'Full Stack',
      imgSrc: 'assets/images/Full-Stack-img.jpg',
    },

    { 
      title: 'Cyber Security',
      imgSrc: 'assets/images/Cyber-Security.png',
    },

    { 
      title: 'UI UX Design',
      imgSrc: 'assets/images/UI-UX-Design.jpg',
    },
  
  
  ];

  goToCourseDetail(title: string): void {
    this.router.navigate(['/courses', title.replace(/\s/g, '-')]);
  }

}
