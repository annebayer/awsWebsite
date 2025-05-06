import { inject, Injectable } from '@angular/core'
import {ArticleApi} from './article-api.service';


@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articleApi = inject(ArticleApi)

  getArticle$() {
    return this.articleApi.getAllArticles$()
  }
}
