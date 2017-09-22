import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
     usernameInput="";
     github=[];
     err="";
     constructor(private _githubService: GithubService) {
          this.getGithub();
     }
     getGithub() {
          this._githubService.retrieveGithub(this.usernameInput)
          .then(github => {this.github = github; this.err=null})
          .catch(err => {this.err = err; this.github=[]});
     }
     ngOnInit() { }
}
