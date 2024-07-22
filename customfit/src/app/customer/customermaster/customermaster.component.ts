import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customermaster',
  templateUrl: './customermaster.component.html',
  styleUrls: ['./customermaster.component.scss']
})
export class CustomermasterComponent implements OnInit{
  public loginid=localStorage.getItem('loginid')
  public logindata:any[]=[];

  ngOnInit(): void {
    console.log(this.loginid)
    // this.logindata=
  }

}
