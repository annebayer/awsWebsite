import {HttpClient, HttpHeaders} from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import {catchError, map, Observable} from 'rxjs'
import {ErrorHandlingService} from '../../shared/httperrorhandling/error-handling.service';
import {Article} from './article.model';
import {environment} from '../../../environments/environment';


interface ProjektseiteResponse {
  data: {
    listProjektseiten: {
      data: Article[];
    };
  };
}

const ListenProjektseitenQuery = `{
    listProjektseiten {
      data {
        title
        id
        description
      }
    }
  }
`;


@Injectable({
  providedIn: 'root'
})
export class ArticleApi {
  private readonly API_BASE_PATH = environment.webinyUrl;
  private readonly AUTH_TOKEN = environment.webinyToken;

  private readonly http = inject(HttpClient);
  private readonly errorHandlingService = inject(ErrorHandlingService);

  public getAllArticles$(): Observable<Article[]> {
    const headers = this.createHeaders();
    const body = { query: ListenProjektseitenQuery };

    return this.http
      .post<ProjektseiteResponse>(this.API_BASE_PATH, body, { headers })
      .pipe(
        map(response => response.data.listProjektseiten.data),
        catchError(this.errorHandlingService.handleError)
      );
  }

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.AUTH_TOKEN
    });
  }
}
