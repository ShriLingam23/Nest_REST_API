import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import { Item } from './interfaces/item.interface';


@Injectable()
export class ItemsService {
    // private readonly items : Item[] = [
    //     {
    //         id:'1351433525',
    //         name :"Appa",
    //         description : "om sri sai ram",
    //         qty: 10
    //     },
    //     {
    //         id:'86456413854',
    //         name :"Sai",
    //         description : "sri rama jeyam",
    //         qty: 23
    //     }
    // ];

    constructor(@InjectModel('Item') private readonly itemModel:Model<Item>){ }

    async findAll(): Promise<Item[]>{
        return await this.itemModel.find();
    }

    async findOne(id : string): Promise<Item>{
        return await this.itemModel.findOne({ _id: id});
    }

    async create(item : Item): Promise<Item>{
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    async delete(id:string):Promise<Item>{
        return await this.itemModel.findByIdAndRemove(id);
    }

    async update(id:string,item:Item):Promise<Item>{
        return this.itemModel.findByIdAndUpdate(id, item, {new:true});
    }

    // findAll(): Item[]{
    //     return this.items;
    // }

    // findOne(id : string): Item{
    //     return this.items.find(item => item.id===id);
    // }
}
