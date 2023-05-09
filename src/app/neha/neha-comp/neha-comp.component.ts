import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-neha-comp',
  templateUrl: './neha-comp.component.html',
  styleUrls: ['./neha-comp.component.scss']
})
export class NehaCompComponent implements OnInit {
  msg : string = 'Snackbar Service is Successfully !!!'

  constructor(private _snackbarService:SnackbarService) { }

  ngOnInit(): void {
   
  }

  onclcok(msg:string){
    this._snackbarService.openSnackBar(this.msg)
  }

}
