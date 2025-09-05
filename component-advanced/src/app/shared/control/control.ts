import { AfterContentInit, afterEveryRender, afterNextRender, Component, contentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class Control implements AfterContentInit {
  label = input.required<string>();
  private el = inject(ElementRef);

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterEveryRender(() => {
      console.log('AFTER EVERY RENDER');
    });
    afterNextRender(() => {
      console.log('AFTER NEXT RENDER');
    });
  }
  ngAfterContentInit(): void {
    console.log('AFTER CONTENT INIT', this.control());
  }

  onClick() {
    console.log('Clicked!', this.control());
  }
}
function afterRenter(arg0: () => void) {
  throw new Error('Function not implemented.');
}

