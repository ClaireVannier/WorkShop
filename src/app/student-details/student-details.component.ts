import { Student } from '../models/student.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss',
})
export class StudentDetailComponent implements OnInit {
  name?: string = '';

  students: Student[] = [
    {
      id: 1,
      firstName: 'Jonathan',
    },
    {
      id: 2,
      firstName: 'Emma',
    },
    {
      id: 3,
      firstName: 'Julie',
    },
    {
      id: 4,
      firstName: 'Alexis',
    },
    {
      id: 5,
      firstName: 'Claire',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name') || '';
    });
  }
}
