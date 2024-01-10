import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IncrementalMainService } from 'src/app/services/incremental-main.service';
import { ExitConfirmationComponent } from '../exit-confirmation/exit-confirmation.component';

@Component({
  selector: 'app-misc-button',
  templateUrl: './misc-button.component.html',
  styleUrls: ['./misc-button.component.css']
})
export class MiscButtonComponent {

  constructor(private IncrementalMain: IncrementalMainService, private dialog: MatDialog) { }

  // D I A L O G   A L T   G O V 
  buttonDeleteSave(){
    const dialogRef = this.dialog.open(ExitConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result == true)
      {
        this.IncrementalMain.deleteSave()
      }
    });    
  }

  buttonPrintPesosFixed(amount: number)
  {
    this.IncrementalMain.addPesos(amount)
  }

}
