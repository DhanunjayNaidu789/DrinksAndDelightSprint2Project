import { Component, OnInit } from '@angular/core';
import { DistributorDetailsDto } from '../Model/DistributorDetailsDto';

import { Router } from '@angular/router';
import { ProjectService } from '../Project.Service';

@Component({
  selector: 'app-distributor-details',
  templateUrl: './distributor-details.component.html',
  styleUrls: ['./distributor-details.component.css']
})
export class DistributorDetailsComponent implements OnInit {


  distributordetails ;

  constructor(private DistributorService:ProjectService,private router:Router) {

       this.getDistributorDetails();
   }




  ngOnInit(): void {


  }

  getDistributorDetails()
  {
    this.DistributorService.getDistributorDetails().subscribe((data) => {

      this.distributordetails = data;
      console.log(this.distributordetails);
    }, error => {
      console.log(error.error);
      if (error.error == "No distributor details Found")
        this.distributordetails = null;

    });
  }



}
