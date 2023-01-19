export interface Product {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface User {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface Order {
  user: User;
  productsIds: number[];
}
