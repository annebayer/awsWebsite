import { inject, Injectable } from '@angular/core'
import {ProjectsApi} from './projects-api.service';


@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectsApi = inject(ProjectsApi)

  getProjects$() {
    return this.projectsApi.getProjects$()
  }
  getProject$(slug:string) {
    return this.projectsApi.getProject$(slug)
  }
}
