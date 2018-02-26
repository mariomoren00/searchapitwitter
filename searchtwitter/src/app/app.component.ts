import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchWord: FormControl;

  status = false;
  countWords = 0;
  publications = [];

  constructor(private searchService: SearchService) { 
    this.searchService.getAccess().subscribe(
      (result) => { 
        localStorage.setItem('token', result['data']);
      },
      (error) =>{
        console.error(error);
      })
  }

  search(): void{
    this.searchService.getSearch({query: this.searchWord}).subscribe(
      (result) => { 
        this.status = result['success'];
        this.countWords = result['data'].search_metadata.count;
        this.publications = result['data'].statuses;
      },
      (error) =>{
        console.error(error);
      })
  }

}
