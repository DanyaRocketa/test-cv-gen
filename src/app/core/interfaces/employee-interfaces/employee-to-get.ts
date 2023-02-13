export interface EmployeeToGet {
  id: number;
  username: string;
  email: string;
  skills: string[] | number[];
  languages: string[] | number[];
  description: string[] | number[];
  firstName: string;
  lastName: string;
  cvs: string[] | number[];
}
