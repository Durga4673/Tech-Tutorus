import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface BlogPost {
  title: string;
  imageUrl: string;
  date: string;
  content: string;
}

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  blogPost?: BlogPost;
  sanitizedContent?: SafeHtml;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['post']) {
      this.blogPost = navigation.extras.state['post'] as BlogPost;
      localStorage.setItem('selectedPost', JSON.stringify(this.blogPost));
      
      // Sanitize the content to allow safe HTML rendering
      if (this.blogPost) {
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(
          this.formatContent(this.blogPost.content)
        );
      }
    }
  }

  ngOnInit(): void {
    if (!this.blogPost) {
      const savedPost = localStorage.getItem('selectedPost');
      if (savedPost) {
        this.blogPost = JSON.parse(savedPost);
        
        // Sanitize the content if retrieved from localStorage
        if (this.blogPost) {
          this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(
            this.formatContent(this.blogPost.content)
          );
        }
      } else {
        this.router.navigate(['/blog']); // Redirect if no data found
      }
    }
  }

  // Helper method to format content (convert newlines to paragraphs)
  private formatContent(content: string): string {
    // Split content by double newlines to preserve paragraph structure
    return content.split('\n\n')
      .map(paragraph => `<p>${paragraph}</p>`)
      .join('');
  }
}