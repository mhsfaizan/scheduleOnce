import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Directive({
  selector: '[appMyFile]'
})
export class MyFileDirective implements OnInit {

  constructor(private el: ElementRef, private myService: MyServiceService) { }
  ngOnInit() {
  }
  @HostListener('change', ['$event.target'])
  onChange(input) {
    var data = this.myService.readFile(input.files[0]);
    data.onload = (e:any) => {
      let newOutput = e.target.result;
      var data = this.myService.covertToDigit(newOutput);
      var link = document.createElement("a");
      link.href = "data:text/plain" + "charset=utf-8," + escape(data);
      link.download = "output.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
