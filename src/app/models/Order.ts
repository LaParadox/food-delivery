export interface Order {
    id?: string;
    name?: string;
    price?: string;
    description?: string;
    imgUrl?: string;
}

export interface Bucket {
    userId?: string;
    orderTime?: Date;
    order?: Order;
}