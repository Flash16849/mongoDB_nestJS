import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  
  @Post('/send')
  create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @Get('/getAll')
  findAll() {
    return this.chatService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string){
    return this.chatService.findOne(id);
  }  

  @Put()
  updateOne(@Query('id') id: string, @Body() updateChatDto: UpdateChatDto){
    return this.chatService.updateOne(id, updateChatDto);
  }

  @Delete()
  delete(@Query('id') id: string){
    return this.chatService.deleteOne(id);
  }

}
