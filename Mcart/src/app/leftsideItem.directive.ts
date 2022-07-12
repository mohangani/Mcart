import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, ViewChild } from "@angular/core";

@Directive({
    selector: "[leftsideitem]"
})

export class LeftSideItem implements OnInit {

    @Input("color") color:string; 
    @Input("colorOnLeave") colorOnLeave:string; 

    @HostListener('mouseenter') mouseEnter(){
        this.onMouseOver(this.color);
    }

    @HostListener('mouseleave') mouseLeave(){
        this.onMouseOver(this.colorOnLeave);
    }

    //@HostBinding('style.backgroundColor') bgcolor; 


    constructor(private elemement: ElementRef, private renderer:Renderer2 ) {

    }

    ngOnInit() {
    }

    onMouseOver(bgColor: string) {
        console.log(bgColor);
       // this.elemement.nativeElement.style.backgroundColor = bgColor;
       //this.bgcolor = bgColor;
       this.renderer.setStyle(this.elemement.nativeElement,"backgroundColor",bgColor);
    }

    

}