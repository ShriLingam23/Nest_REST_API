import { Controller,Get,Post,Put,Delete, Body, Req, Res, Param } from '@nestjs/common';
import {CreateItemDto} from './dto/create-item.dto';
import {Request, Response} from 'express';

import {Item} from './interfaces/item.interface';
import {ItemsService} from './items.service';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService:ItemsService){}

    @Get()
    findAll(): Promise<Item[]>{
        return this.itemService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item>{
        return this.itemService.findOne(id);
    }

    // @Get()
    // findAll(@Req() req:Request, @Res() res: Response): Response{
    //     console.log(req.url);
    //     return res.send('Hello World');
    // }

    // @Get(':id')
    // findOne(@Param('id') id): string{
    //     //return `Item : ${param.id}`
    //     return `Item : ${id}`
    // }

    @Post()
    create(@Body() createItemDto : CreateItemDto): Promise<Item>{
        // return `Name :${createItemDto.name} Desc:${createItemDto.description}`;
        return this.itemService.create(createItemDto);
    }

    @Put(':id')
    update(@Body() updateItemDto : CreateItemDto,@Param('id') id):Promise<Item>{
        return this.itemService.update(id,updateItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id):Promise<Item>{
        return this.itemService.delete(id);
    }
}
