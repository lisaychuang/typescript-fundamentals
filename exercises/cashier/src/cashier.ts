interface CartItem{
  name: string;
  price: number;
  qty: number;
}

interface CartAPI{
  length: number;
  total: number;
  addItem: (cartItem: CartItem) => CartAPI;
  add: (name:string, price: number, qty?: number) => CartAPI;
}

export function cashier() {
  let items: CartItem[] = [];
  return {
    get length() {
      return items.reduce((tot, item) => {
        return tot + item.qty;
      }, 0);
    },
    get total() {
      return items.reduce((tot, item) => {
        return Math.round(tot + (item.price * item.qty) * 100);
      }, 0) * 0.01;
    }, 
    add(name, price, qty=1): CartAPI{
      items.push({
        name, price, qty
      });
      return this;
    },
    addItem(item):CartAPI{
      items.push(item);
      return this;
    }
  };
}