import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeName!: FormGroup
  basicsForm!: FormGroup

  basicsFormData:any = [
    [
      {
        type: 'input',
        label: 'First Name',
        formControlName: 'firstName'
      },
      {
        type: 'input',
        label: 'Middle Name', 
        formControlName: 'middleName'
      },
      {
        type: 'input',
        label: 'Last Name', 
        formControlName: 'lastName'
      }
    ],
    [
      {
        type: 'input',
        label: 'Employee ID', 
        formControlName: 'employeeId'
      },
      {
        type: 'select',
        label: 'Gender',
        options: ['Male', 'Female', 'Others'],
        formControlName: 'gender'
      },
    ],
    [
      {
        type: 'datepicker',
        label: 'Date of Joining',
        formControlName: 'dateOfJoining'
      },
      {
        type: 'autocomplete',
        label: 'Designation',
        options: ['autocomplete'],
        formControlName: 'designation',
      }
    ],
    [
      {
        type: 'checkbox',
        label: 'Employee is a Director/person with substantial interest in the company.',
        icon: 'info',
        formControlName: 'substatialInterest'
      }
    ],
    [
      {
        type: 'input',
        label: 'Work Email',
        formControlName: 'workEmail'
      },
    ],
    [
      {
        type: 'input',
        label: 'Department',
        formControlName: 'department'
      },
      {
        type: 'select',
        label: 'Work Location',
        options: ['location A', 'location B'],
        formControlName: 'workLocation'
      }
    ],
    [
      {
        type: 'checkbox',
        label: 'Enable Portal Access',
        text: 'The employee will be able to view payslips, submit their IT declaration and create reimbursement claims through the employee portal.',
        formControlName: 'enablePortalAccess'
      }
    ]
  ]

  salaryDetailsFormData: any = [
    [
      {
        type: 'label'
      }
    ]
  ]

  personalInfoFormData: any = [
    [
      {
        type: 'input',
        label: 'Personal Email Address',
      }
    ]
  ]

  stepperData:any = [
    this.basicsFormData,
    this.basicsFormData,
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.basicsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      employeeId: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      designation: ['', Validators.required],
      substatialInterest: [false, Validators.required],
      workEmail: ['', Validators.required],
      department: ['', Validators.required],
      workLocation: ['', Validators.required],
      enablePortalAccess: [false, Validators.required],
      professionalTax: ['', Validators.required]
    })
  }

}
