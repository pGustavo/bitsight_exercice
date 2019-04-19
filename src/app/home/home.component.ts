import {Component, OnInit} from '@angular/core';
import {UserService} from '@app/services/user.service';
import {User} from '@app/models/users.model';
import {Repository} from '@app/models/repository.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[] = [];
  repos: Repository[] = [];
  topUser: User = new User();
  topRepo: Repository = new Repository();

  has = true;
  loading: boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    console.log(this.loading);
    this.loading = true;
    setInterval(() => {
      this.getHotUser();
    }, 120 * 1000);
    this.getHotRepo();
    this.getHotUser();
  }

  getFollowers(link: string, user: User) {
    console.log(this.loading);

    this.userService.getJson(link).subscribe((followers: any) => {
        this.loading = true;
        user.followers = followers.length;
      }, error => {
        this.loading = false;
        console.log(error);
      },
      () => {
        console.log(this.loading);

        this.loading = false;
        console.log(this.loading);

      });
  }

  getHotRepo() {
    console.log(this.loading);

    this.userService.getAllRepositoriesByStars('popular', 'stars').subscribe((repos: any) => {
        this.loading = true;
        repos.items.forEach(repo => {
          this.repos.push({
            full_name: repo.full_name,
            description: repo.description,
            html_url: repo.html_url,
            owner: repo.owner,
            forks: repo.forks,
            stargazers_count: repo.stargazers_count,
            id: repo.id
          });
        });
      }, error => {
        console.log(this.loading);

        this.loading = false;
        console.log(error);
      },
      () => {
        console.log(this.loading);

        this.topRepo = this.repos[0];
        this.loading = false;
        console.log(this.loading);

      });
  }

  getHotUser() {
    console.log(this.loading);

    this.userService.getAllUsersByFollowers('popular', 'followers').subscribe((users: any) => {
        this.loading = true;
        users.items.forEach(user => {
          this.users.push({
            login: user.login,
            avatar_url: user.avatar_url,
            id: user.id,
            followers_url: user.followers_url,
            events_url: user.events_url,
            followers: 0
          });
        });
      }, error => {
        console.log(this.loading);

        this.loading = false;
        console.log(error);
      },
      () => {
        console.log(this.loading);

        this.loading = false;
        console.log(this.loading);

        this.topUser = this.users[0];
        this.getFollowers(this.topUser.followers_url, this.topUser);
        this.users.slice(0, 5).forEach(user => {
          this.getFollowers(user.followers_url, user);
        });
      });

  }

  menuShow() {
    console.log(this.loading);

    this.has = !this.has;
  }
}

