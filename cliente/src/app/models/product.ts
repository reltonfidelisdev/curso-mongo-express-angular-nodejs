export class Product{
    _id?: number;
    name: string;
    category: string;
    pizzaria: string;
    price: number;

    constructor (name: string, category: string, pizzaria: string, price: number) {
        this.name = name;
        this.category = category;
        this.pizzaria = pizzaria;
        this.price = price;
    }
}