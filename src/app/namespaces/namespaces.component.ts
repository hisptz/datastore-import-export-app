import { Component, OnInit } from '@angular/core';
import { NameSpacesService } from "./namespaces.service"
import { NameSpaceModule } from './namespace.module';
import { Router } from '@angular/router';
import { EventEmmiterService } from '../event-emmiter.service';


@Component({
  selector: 'app-namespaces',
  templateUrl: './namespaces.component.html',
  styleUrls: ['./namespaces.component.css']
})
export class NamespacesComponent implements OnInit {

  p: number = 1;

  loadedNameSpaces:NameSpaceModule[] = [];

  fetchingNameSpaces: boolean = false;

  error = null;

  constructor(private nameSpaces: NameSpacesService, private router: Router, private eventEmmiterService: EventEmmiterService) { }

  ngOnInit() {

    if (this.eventEmmiterService.subsVar==undefined) {    
      this.eventEmmiterService.subsVar = this.eventEmmiterService.    
      reloadNamespaces.subscribe((name:string) => {    
        //console.log(name);
        this.getNameSpaces();    
      });    
    } 

    this.getNameSpaces();
  }


  //outsorce namespaces' service function load and pipe name spaces
  getNameSpaces(){
    this.fetchingNameSpaces = true;

    this.nameSpaces.fetchNameSpaces().subscribe(
      fetchedNameSpaces=>{
        this.loadedNameSpaces = fetchedNameSpaces;
        //console.log(this.loadedNameSpaces);
        this.fetchingNameSpaces = false;
      },
      error => {
        this.error = error.message;
      }
    );
  }

  deleteNamespace(name: string){
    //console.log(name);
    this.nameSpaces.deleteNameSpace(name).subscribe(
      responceData => {

        console.log(responceData);
        this.getNameSpaces();
      }
    );
  }

  loadSingleNS(name: string){
    //console.log(name);
    this.router.navigate(['/namespace', name]);
  }

}
