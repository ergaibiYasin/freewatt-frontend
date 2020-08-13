import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

	content: any;

	constructor(
		private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
		
		@Inject(MAT_DIALOG_DATA) private data
	) { }

  ngOnInit(): void {
    this.content = this.data;

  }
  
	close() {
		this.dialogRef.close('success');
	}

	cancel() {
		this.dialogRef.close();
	}

}