export type Item = {
  id: number,
  name: string,
  amount: string,
};

export type CreateItem = Omit<Item, 'id'>;

export type User = {
  username: string,
  classe: string,
  level: number,
  password: string,
};

export type Order = {
  id: number,
  userId: number,
  productsIds: number[],
};