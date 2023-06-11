import { Component } from '@angular/core';
import { GiftsService } from '../../../gifts/services/gift.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor(private giftsService:GiftsService){}

  get tags(){
    return this.giftsService.getTagsHistory;
  }

}
