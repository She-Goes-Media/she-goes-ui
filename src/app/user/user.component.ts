import { Component, OnInit } from '@angular/core';
import { User } from '../state/model';
import { UserService } from '../service/app.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns = ['id', 'email'];
  dataSource = new MatTableDataSource();
  users: [User];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.dataSource.data = data
        console.log('data', data);
      }
    );
  }

}
