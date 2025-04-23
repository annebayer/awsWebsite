import { Component, OnInit } from '@angular/core';
import {StrapiService} from './StrapiService';

@Component({
  selector: 'app-strapi',
  templateUrl: './strapi.component.html',
})
export class StrapiComponent implements OnInit {
  data: any[] = [];
  bla: string = "";


  constructor(private strapiService: StrapiService) {}

  ngOnInit() {
    this.loadData().then(r => console.log(r));
  }

  async loadData() {
    try {
      const response = await this.strapiService.getData();
      console.log(response)
      this.data = response.data;
      console.log(this.data)
      console.log(this.data[0])
      console.log(this.data[0].title)
      this.bla =this.data[2].title
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
