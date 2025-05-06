import {Component, inject, OnInit} from '@angular/core';
import {ArticleService} from './article.service';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  providers: [],
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  private articleService = inject(ArticleService)
  articles: Article[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.loadArticles();
  }


  loadArticles(): void {
    this.articleService.getArticle$().subscribe({
      next: (article) => {
        this.articles = article;
        console.log("Geladene Artikel: ,", this.articles)
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
        console.log(error)
      },
    })
  }
}
