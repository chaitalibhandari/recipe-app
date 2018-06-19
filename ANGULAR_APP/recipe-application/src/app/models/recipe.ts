export class Recipe{

    id:number;
    name:string;
    image:string;
    description:string;
    ingredients:Ingredients[];
}

export class Ingredients{
    ingredient:string;
}