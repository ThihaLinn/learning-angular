import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirectiveDirective implements OnChanges {

  constructor( private template: TemplateRef<any> ,private container:ViewContainerRef){

  }

  @Input()
  value: any;

  ngOnChanges(changes: SimpleChanges): void {
    if(this.value){
     Object.entries(this.value).forEach((array,index)=>{
      this.container.createEmbeddedView(this.template,{
          i:index,
          k:array[0],
          v:array[1]
      })
     })
    }
   
  }

}
