import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchProvider } from '../../providers/search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  status = false;
  countWords = 0;
  publications = [];
  searchWord = '';

  /**
   * 
   * @param navCtrl 
   * @param searchProvider method
   */
  constructor(public navCtrl: NavController, public searchProvider: SearchProvider) {
    this.searchProvider.getAccess().subscribe((result) => {
        if(result['success'])
          localStorage.setItem('token', result['data']); 
      },(error) =>{
        console.error(error);
      })
  }

  /** 
   * 
   * @param searchWord string
   * @param searchProvider method
  */
  search(){
    this.searchProvider.getSearch({query: this.searchWord}).subscribe((result) => { 
        if(result['success'])
          this.status = result['success'];
          this.countWords = result['data'].search_metadata.count;
          this.publications = result['data'].statuses;
      },(error) =>{
        console.error(error);
      })
  }

}
