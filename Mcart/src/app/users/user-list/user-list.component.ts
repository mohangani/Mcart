import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ColSpanParams } from 'ag-grid-community';
import { urlConstants } from 'src/app/constants';
import { HttpHelperService } from 'src/app/Services/http-helper.service';
import { IuserModel } from 'src/models/userModel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersList: IuserModel[] = null;

  colSpan = function (params: ColSpanParams) {
    return params.data === 2 ? 3 : 1;
  };

  public columnDefs: ColDef[] = [
    { field: '', checkboxSelection: true, width: 10 },
    { field: 'fullName', sortable: true, filter: true },
    { field: 'dob' },
    { field: 'email' },
    { field: 'userName' },
    { field: 'password' },
    { field: '',  maxWidth:611100 },
  ];

  autoGroupColumnDef = {
    headerName: 'Email',
    field: 'email',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  };

  public defaultColDef: ColDef = {
    resizable: true,
  };

  @ViewChild('grid') agGrid : AgGridAngular;
  constructor(private httpHelperservice: HttpHelperService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  public getUsers(pageNo?: number | undefined) {
    pageNo = pageNo ?? 1;
    let url = urlConstants.GetUsers + `?pageNo=${pageNo}&pageSize=20`;
    this.httpHelperservice.Get<IuserModel[]>(url).subscribe(x => {
      this.usersList = x;
      console.log(x);
    });
  }

  onEditClick() {

    var selectedrecords = this.agGrid.api.getSelectedRows();

    if(selectedrecords.length>1){
      alert("Please Select 1 record to Edit.")
      return;
    }

    console.log(selectedrecords[0].id);
  }

  onDeleteClick(){
    var selectedrecords = this.agGrid.api.getSelectedRows();
      if(confirm("Are you sure! \n You want to delete the selected records?"))
        console.log(selectedrecords);
  }

}
