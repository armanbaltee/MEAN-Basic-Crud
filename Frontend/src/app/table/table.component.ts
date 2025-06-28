import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: any[] = []
  viewUrl = 'http://localhost:7000/viewdata';
  selectedUser: any = null;
  showModal: boolean = false;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.http.get<any[]>(this.viewUrl).subscribe({
      next: (res)=> this.data = res,
      error: (err)=> console.log(err)
    })
  }

  openEditPopup(user: any){
    this.selectedUser = user;
    this.showModal = true;
  }
  closePopup() {
    this.showModal = false;
    this.selectedUser = null;
  }

  updateUser(updatedUser: any) {
    const email = this.selectedUser.email;

    this.http.put(`http://localhost:7000/updatedata/${email}`, updatedUser, { responseType: 'text' })
      .subscribe({
        next: () => {
          console.log('User updated!');
          this.closePopup();
          this.getData();
        },
        error: (err) => console.error('Update error:', err)
      });
  }

  deleteData(email: String){
    this.http.delete(`http://localhost:7000/deletedata/${email}`, { responseType: 'text' }).subscribe({
      next: () => {
        console.log("User deleted!");
        this.getData();
      },
      error: (err) => console.error(err)
    });
  }
}
