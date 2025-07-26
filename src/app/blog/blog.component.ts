import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface BlogPost {
  title: string;
  imageUrl: string;
  date: string;
  content: string;
}

interface BlogArticlesResponse {
  articles: BlogPost[];
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {


  blogPosts: BlogPost[] = [];


  // blogPosts = [
  //   {
  //     title: 'Importance of Learning an Artificial Intelligence',
  //     imageUrl: 'assets/images/AI.png',
  //     date: 'Dec 1, 2024',
  //     content: `Artificial Intelligence (AI) is no longer a futuristic concept—it is a present-day reality 
  //     that is transforming industries, businesses, and daily life. From virtual assistants like Siri and Alexa 
  //     to self-driving cars and advanced medical diagnostics, AI is revolutionizing how we live and work. 
  //     As AI continues to shape the future, learning an AI course has become crucial for professionals, students, 
  //     and tech enthusiasts who wish to stay ahead in their careers.`
  //   },

  // ];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<BlogArticlesResponse>('assets/data/blog-posts.json').subscribe(response => {
      this.blogPosts = response.articles;
    });
  }


  viewCardDetail(post: BlogPost): void {
    this.router.navigate(['/blog', post.title.replace(/\s/g, '-')], { state: { post } });
  }

  getShortContent(content: string, length: number = 150): string {
    return content.length > length ? content.substring(0, length) + '...' : content;
  }
}
