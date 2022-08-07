export type Item = {
  id: number,
  name: string,
  amount: string,
};

export type CreateItem = Omit<Item, 'id'>;
