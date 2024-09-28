import { Component } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  mensajes : string[] = []

  empleados : string[] = ['Ana', 'Juan']

  constructor(private webSocketService: SocketService) {}

  ngOnInit() : void{
    this.webSocketService.mensajes$.subscribe((mensaje:string) =>{
      this.mensajes.push(mensaje)
    })

  }



}
