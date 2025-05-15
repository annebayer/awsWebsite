import {Component, inject, OnInit, signal} from '@angular/core';
import {ProjectService} from '../project.service';
import {Project} from '../project.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-projects',
  providers: [],
  templateUrl: './project.component.html',
  standalone: true,
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  private projectService = inject(ProjectService)
  projektseite = signal("")
  private route: ActivatedRoute = inject(ActivatedRoute)
  project = signal<Project|null>(null);
  errorMessage: string = '';

  ngOnInit(): void {
    this.projektseite.set(this.route.snapshot.params['slug'])
    this.loadProject();
  }


  loadProject(): void {
    this.projectService.getProject$(this.projektseite()).subscribe({
      next: (projectApi) => {
        this.project.set(projectApi);
        console.log("Geladene Projekte: ,", this.project())
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    })
  }
}
