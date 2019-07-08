import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  @Input() controls: FormControl;
  constructor(private formBuilder: FormBuilder ) {
  }

  ngOnInit() {
  }

  

}
