import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../models/header/header.model';
import { HeaderService } from '../services/header-service/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  header: Header = new Header();  // Singular, no array

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.retrieveHeaders();
  }

  retrieveHeaders(): void {
    this.headerService.getHeader().subscribe({
      next: (data) => {
        this.header = data[0];  // Toma solo el primer elemento del array
        console.log('Headers obtenidos:', this.header);
      },
      error: (err) => {
        console.error('Error al obtener headers:', err);
      }
    });
  }
}
