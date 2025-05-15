import {HttpClient, HttpHeaders} from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import {catchError, map, Observable} from 'rxjs'
import {ErrorHandlingService} from '../../shared/httperrorhandling/error-handling.service';
import {Project} from './project.model';
import {environment} from '../../../environments/environment';


interface ProjectsResponse {
  data: {
    listProjekte: {
      data: Project[];
    };
  };
}

const ListenProjekteQuery = `{
    listProjekte {
      data {
        title
        aktivesProjekt
        description
        slug
        image
      }
  }
  }
`;

const ListenProjektQuery = (slug: string) => `{
    listProjekte (where: {slug: "${slug}"}) {
      data {
        title
        aktivesProjekt
        description
        slug
        image
      }
  }
  }
`;


@Injectable({
  providedIn: 'root'
})
export class ProjectsApi {
  private readonly API_BASE_PATH = environment.webinyUrl;
  private readonly AUTH_TOKEN = environment.webinyToken;

  private readonly http = inject(HttpClient);
  private readonly errorHandlingService = inject(ErrorHandlingService);

  public getProjects$(): Observable<Project[]> {
    const headers = this.createHeaders();
    const body = { query: ListenProjekteQuery };

    return this.http
      .post<ProjectsResponse>(this.API_BASE_PATH, body, { headers })
      .pipe(
        map(response => response.data.listProjekte.data),
        catchError(this.errorHandlingService.handleError)
      );
  }

  public getProject$(slug: string): Observable<Project> {
    const headers = this.createHeaders();
    const body = { query: ListenProjektQuery(slug) };

    return this.http
      .post<ProjectsResponse>(this.API_BASE_PATH, body, { headers })
      .pipe(
        map(response => response.data.listProjekte.data[0]),
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
