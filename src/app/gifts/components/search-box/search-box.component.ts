import { Component, ElementRef, ViewChild } from '@angular/core';

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


  constructor() { }

  searchTag(){
    const newTag= this.tagInput.nativeElement.value;
    console.log({newTag});
  }


}
