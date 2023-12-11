import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[highlight]'
})

export class HelloDirective implements OnChanges {

    @Input()
    highlight: String=''; 

    @Input()
    text:String='';

    constructor(private eleRef: ElementRef,private render: Renderer2) {
        console.log(this.highlight)
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.highlight)
        this.render.addClass(this.eleRef.nativeElement, 'mb-2')
        this.render.addClass(this.eleRef.nativeElement, 'p-4')
        this.render.setStyle(this.eleRef.nativeElement,'background-color',this.highlight || 'yellow')
        this.render.setStyle(this.eleRef.nativeElement, 'color', this.text || 'black')
    }


    @HostListener("mouseenter")
    mouseIn(){
        this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'black')
        this.render.setStyle(this.eleRef.nativeElement, 'color',  'white')
    }

    @HostListener("mouseleave")
    mouseOut() {
        this.render.setStyle(this.eleRef.nativeElement, 'background-color', this.highlight || 'yellow')
        this.render.setStyle(this.eleRef.nativeElement, 'color', this.text || 'black')  
    }



}