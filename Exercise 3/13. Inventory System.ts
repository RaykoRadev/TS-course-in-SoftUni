class Product {
    private static productCount: number = 0;
    readonly id: number = Product.productCount;
    _name!: string;
    _price!: number;

    constructor(name: string, price: number) {
        Product.productCount++;
        this.name = name;
        this.price = price;
    }

    set name(name: string) {
        if (name.length < 1) {
            throw new Error("Name has to be atleast 1 charachter long!");
        }
        this._name = name;
    }

    set price(orgPrice: number) {
        if (orgPrice <= 0) {
            throw new Error("Price cant be negativ or 0!");
        }
        this._price = orgPrice;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}

class Inventory {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    listProducts(): string {
        let result: string = "";

        for (const el of this.products) {
            result += `ID: ${el.id}, Name: ${el._name}, Price: $${el._price} \n`;
        }

        result += `Total products created: ${this.products.length}`;
        return result;
    }
}

const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());

// Product.productCount = 10;
// const product = new Product("", 800);
// const product2 = new Product("Phone", 0);
// product.id = 5;
