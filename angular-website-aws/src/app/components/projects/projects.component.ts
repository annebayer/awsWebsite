import {Component, inject, OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {Project} from './project.model';
import {RouterLink} from '@angular/router'


@Component({
  selector: 'app-projects',
  providers: [],
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectService)

  projects: Project[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.loadProjects();
  }


  loadProjects(): void {
    this.projectService.getProjects$().subscribe({
      next: (project) => {
        this.projects = project;
        console.log("Geladene Projekte: ,", this.projects)
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
        console.log(error)
      },
    })
  }
}
