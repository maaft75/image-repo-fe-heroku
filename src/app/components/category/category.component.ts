import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/images/images.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category : string;
  allProds : Array<any>;
  categoryProds : Array<any>;

  constructor(private activatedRoute : ActivatedRoute, private imageService : ImagesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => 
      {
        this.category = params.name;
        this.imageService.GetImages().subscribe(
          (data) => 
          { 
            this.allProds = data;
            this.categoryProds = this.allProds.filter(x => { return x.category.toLocaleLowerCase() == this.category.toLocaleLowerCase() });
        })
      })

    
  }

}
