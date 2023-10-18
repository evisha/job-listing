export interface Job {
  id: number;
  title: string;
  description: string;
  company: string;
  salary: number;
  location: string;
  category?: string
}
