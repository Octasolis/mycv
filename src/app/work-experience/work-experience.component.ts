import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperience } from '../models/work-experience/work-experience.model';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent implements OnInit {
  workExperience: WorkExperience[] = [];

  constructor(private workExperienceService: WorkExperienceService) { }

  ngOnInit(): void {
    this.retrieveWorkExperience();
  }

  retrieveWorkExperience(): void {
    this.workExperienceService.getWorkExperience().subscribe({
      next: (data) => {
        this.workExperience = data;
        console.log('Work Experience obtenida:', this.workExperience);
      },
      error: (err) => {
        console.error('Error al obtener work experience:', err);
      }
    });
  }
}
