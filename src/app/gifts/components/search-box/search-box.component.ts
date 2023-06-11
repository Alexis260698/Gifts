import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../../services/gift.service';

@Component({
  selector: 'gifts-search-box',
  template:  `
  <h5>Buscar:</h5>
  <input type="text"
  class="form-control"
  placeholder="buscar gifts..."
  (keyup.enter)="searchTag()"
  #txtTagInput
  >
`
})

export class searchBoxComponent {
  @ViewChild('txtTagInput')
  tagInput !: ElementRef<HTMLInputElement>;


  constructor(private giftsService: GiftsService) { }

  searchTag(){
    const newTag= this.tagInput.nativeElement.value;

    this.giftsService.searchTag(newTag);

    this.tagInput.nativeElement.value = "";
  }


}
