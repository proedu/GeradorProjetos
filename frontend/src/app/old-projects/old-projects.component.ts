import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-old-projects',
  templateUrl: './old-projects.component.html',
  styleUrls: ['./old-projects.component.scss']
})
export class OldProjectsComponent implements OnInit {

  public projects : any


  constructor(
    private restService : RestapiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('payload');
    localStorage.removeItem('educational-project');
    this.getProjects();
  }
  
  getProjects() {
    this.restService.getApi("api/projects").subscribe(res => {
      //console.log(res);
      this.projects = res;
      //console.log(this.projects);
    });
  }

  openProject(id) {
    this.router.navigate(['/download/'+id]);
  }

}
