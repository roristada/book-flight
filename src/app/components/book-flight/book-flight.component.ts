import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Flight } from './flight';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {
  book: FormGroup;
  flight: Flight;
  flightD: any = [ ];
  setDate: Date

  constructor(private fb: FormBuilder) {
    this.flight = new Flight("","","","",0,new Date(),0,0,new Date())
    this.setDate = new Date(Date.now())
    this.book = this.fb.group({
      fullName: ['',Validators.required],
      from: ['',Validators.required],
      to: ['',Validators.required],
      type: ['',Validators.required],
      departure: ['',Validators.required],
      arrival: ['',Validators.required],
      adults: ['0',[Validators.required, Validators.max(10)]],
      children: ['0',[Validators.required, Validators.max(10)]],
      infants: ['0',[Validators.required, Validators.max(10)]]

    })
   }
  ngOnInit(): void {

  }


  submit() :void{
    confirm("Confirm Book A Flight ?")
    this.flightD.push(this.book.value)
    console.log(this.flightD)
    this.book.reset();
  }

}
