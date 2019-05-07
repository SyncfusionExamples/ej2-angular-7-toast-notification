import { Component, OnInit, ViewChild, EmitType } from '@angular/core';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild('defaultToast')
  public toastObj: ToastComponent;
  @ViewChild('toastBtnShow')
  public buttonEleShow: ButtonComponent;
  public position: Object = { X: "Right" };

  public onCreate: EmitType<Object> = () => {
      setTimeout(()=>{
        this.toastObj.show();
        },200);
    }
  public showToast: EmitType<Object> = (e: Object) => {
    this.toastObj.show();
  }
  public hideToast: EmitType<Object> = (e: Object) => {
    this.toastObj.hide('All');
  }

}
