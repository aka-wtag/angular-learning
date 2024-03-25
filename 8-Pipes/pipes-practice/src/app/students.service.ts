import { Student } from './student.model';

export class StudentService {
  students: Student[] = [
    {
      name: 'S1',
      course: 'CSE',
      marks: 520,
      DOB: new Date('11-12-2000'),
      gender: 'Male',
    },
    {
      name: 'S2',
      course: 'EEE',
      marks: 420,
      DOB: new Date('10-06-2000'),
      gender: 'Male',
    },
    {
      name: 'S3',
      course: 'CSE',
      marks: 540,
      DOB: new Date('09-22-2000'),
      gender: 'Female',
    },
  ];

  totalMarks: number = 600;
}
