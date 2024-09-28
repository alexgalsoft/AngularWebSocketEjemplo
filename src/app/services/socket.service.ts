import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: WebSocket | null = null;
  private subject: Subject<any> = new Subject();

  public mensajes$ = this.subject.asObservable();

  constructor(){
    this.conexion()
  }

  private conexion() : void{
    this.socket = new WebSocket("wss://localhost:7266/ws")

    this.socket.onopen = () => {
      console.log('Conexión establecido con el Servidor ...')
    }

    this.socket.onmessage = (event) => {
      const mensaje = event.data
      this.subject.next(mensaje)
    }

    this.socket.onclose = () => {
      console.log('Cerrando la conexión con el servidor')
    }

    this.socket.onerror = (error) => {
      console.log('Error de conexión con el servidor:' , error)
    }

  }

  public enviarMensaje(mensaje:string) : void{
    this.socket?.send(mensaje)
  }

}
  

