import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parts'
})
export class PartsPipe implements PipeTransform {
  parts: string;
  transform(value: any): any {
    this.parts = '';
    if(value === 'neither'){
      this.parts = 'Neither';
    }
    if(value === 'partA'){
      this.parts = 'Part A';
    }
    if(value === 'partB'){
      this.parts = 'Part B';
    }
    if(value === 'both'){
      this.parts = 'Both';
    }
    return this.parts;
  }

}
