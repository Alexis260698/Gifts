import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GiftsService {

private _tagsHistory: string[] = [];


  constructor() { }

   getTagsHistory(){
    return [...this._tagsHistory];
  }

  public searchTag(tag: string ): void {
    this._tagsHistory.unshift(tag);
  }




}
