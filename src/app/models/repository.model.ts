import {User} from '@app/models/users.model';

export class Repository {
  full_name: string;
  id: number;
  owner: User;
  html_url: string;
  description: string;
  stargazers_count: string;
  forks: number;
}
