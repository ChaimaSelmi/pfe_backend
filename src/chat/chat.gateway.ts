import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(8001, {cors:"*"})
export class ChatGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message:string): void {
    console.log(message)
    this.server.emit('message', message); // Broadcast message to all connected clients
  }
}