import { Component,OnInit  } from '@angular/core';
import { ServiceService } from "../service/service.service";


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
 users:any;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    debugger;
    this.service.getUsers().subscribe(data => {
      this.users = data.items;
      console.log(data);
    });
  }
}
