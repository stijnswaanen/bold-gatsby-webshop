const cartApiUrl =
  "http://ec2-18-130-227-17.eu-west-2.compute.amazonaws.com/jsonapi";

const getCart = async ({ cartToken }) => {
  const response = await fetch(`${cartApiUrl}/carts`, {
    headers: {
      "Accept": 'application/vnd.api+json',
      "Commerce-Cart-Token": cartToken,
    },
  });
  const data = await response.json();
  return data;
};

const addToCart = async ({ cartToken, activeSize }) => {
  const response = await fetch(`${cartApiUrl}/cart/add?include=order_id,order_id.order_items,purchased_entity`, {
    method: "POST",
    headers: {
      "Accept": 'application/vnd.api+json',
      "Commerce-Cart-Token": cartToken,
      "Content-Type": 'application/vnd.api+json',
    },
    body: JSON.stringify({ data: [
      {
        type: activeSize.type.replaceAll('_', '-'),
        id: activeSize.id,
        meta: {
          quantity: 1,
        }
      },
    ]}),
  });
  const data = await response.json();
  return data;
};

const removeFromCart = async ({ cartToken, orderId, orderItemId }) => {
  const response = await fetch(`${cartApiUrl}/carts/${orderId}/items`, {
    method: "DELETE",
    headers: {
      "Accept": 'application/vnd.api+json',
      "Commerce-Cart-Token": cartToken,
    },
    body: JSON.stringify({ data: [
      {
        type: 'order-item--default',
        id: orderItemId,
      },
    ]}),
  });
  return response.ok;
}

const removeAllFromCart = async ({ cartToken, orderId }) => {
  const response = await fetch(`${cartApiUrl}/carts/${orderId}`, {
    method: "DELETE",
    headers: {
      "Accept": 'application/vnd.api+json',
      "Commerce-Cart-Token": cartToken,
    }
  });
  return response.ok;
}

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  removeAllFromCart,
};
