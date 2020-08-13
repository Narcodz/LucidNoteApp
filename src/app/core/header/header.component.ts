import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Component} from '@angular/core';
import { Response } from "@angular/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageSetvice: DataStorageService,
    public authService:AuthService){}

  onSaveData(){
    this.dataStorageSetvice.saveNotes()
    .subscribe((response:Response) => {
        console.log(response);
      }
    );
  }

  onFetchData(){
    this.dataStorageSetvice.retrieveNotes();
  }

onLogout(){
  this.authService.logout()
}
}
