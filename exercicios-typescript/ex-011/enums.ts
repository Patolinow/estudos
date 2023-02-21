const enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERD,
  RETURNED,
}

let stats = OrderStatus.DELIVERD;

function isDelivered(stats: OrderStatus) {
  return stats === OrderStatus.DELIVERD;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  UP = "w",
  DOWN = "s",
  LEFT = "a",
  RIGHT = "d",
}

ArrowKeys.LEFT;

type Order = {
  orderNumber: number;
  status: number;
};

const order: Order = {
  orderNumber: 234323432,
  status: OrderStatus.PENDING,
};
const order2: Order = {
  orderNumber: 123123534,
  status: OrderStatus.DELIVERD,
};
