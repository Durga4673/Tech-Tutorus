import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

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
      title: 'UI/UX Design',
      imgSrc: 'assets/images/UI-UX-Design.jpg',
    },
  
  ];


  slides = [
    { img: "assets/images/Tech-tutorus-DataScience.png", heading: "Data Science" },
    { img: "assets/images/Salesforce-New-Img.png", heading: "Saleforce" },
    { img: "assets/images/aws-dh.png", heading: "AWS" },
    { img: "assets/images/devops-dh.jpg", heading: "Devops" },
    { img: "assets/images/python.jpg", heading: "Python" },
    { img: "assets/images/RPA-dh.jpg", heading: "RPA" },
    { img: "assets/images/selenium-dh.png", heading: "Selenium" },
    { img: "assets/images/blockchain-technology.jpg", heading: "Block Chain" },
    { img: "assets/images/scrum-master.jpg", heading: "Scrum Master" },
    { img: "assets/images/mulesoft.jpg", heading: "Mule Soft" },
    { img: "assets/images/power-BI.jpg", heading: "Power BI" },
    { img: "assets/images/Full-Stack-img.jpg", heading: "Full Stack" },
    { img: "assets/images/Cyber-Security.png", heading: "Cyber Security" },
    { img: "assets/images/UI-UX-Design.jpg", heading: "UI/UX Design" },


];
  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1, 
    'autoplay': true, 
    'autoplaySpeed': 1000, 
    'dots': true, 
    'infinite': true, 
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
    responsive:[
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  constructor(private router: Router) {
    this.setSlideConfig();
  }

  setSlideConfig() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1440) {
      this.slideConfig.slidesToShow = 4; // Show 4 slides at 1440px or higher
      this.slideConfig.slidesToScroll = 1; // Scroll 4 items at a time at 1440px or higher
    } else if (screenWidth > 1024) {
      this.slideConfig.slidesToShow = 3; // Show 3 slides between 1024px and 1439px
      this.slideConfig.slidesToScroll = 1; // Scroll 3 items at a time between 1024px and 1439px
    } else if (screenWidth >= 768) {
      this.slideConfig.slidesToShow = 2; // Show 2 slides between 768px and 1023px
      this.slideConfig.slidesToScroll = 1; // Scroll 2 items at a time between 768px and 1023px
    } else {
      this.slideConfig.slidesToShow = 1; // Show 1 slide below 768px
      this.slideConfig.slidesToScroll = 1; // Scroll 1 item at a time below 768px
    }
  }

  goToCourseDetail(title: string): void {
    this.router.navigate(['/courses', title.replace(/\s/g, '-')]);
    window.scrollTo(0, 0);
  }

  navigateToCourses() {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    
    // Navigate to the "/courses" route
    this.router.navigate(['/courses']);
  }

  navigateToRegister(){
    window.scrollTo(0, 0);
    
    // Navigate to the "/courses" route
    this.router.navigate(['/register']);
  }
}


