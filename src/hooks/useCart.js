import { useMutation, useQuery, useQueryClient } from "react-query";
import { getCart, addToCart, removeFromCart, removeAllFromCart } from "../api/cartApi";
import { useCartToken } from "./useCartToken";

export const useCart = () => {
  const queryClient = useQueryClient();
  const { cartToken, resetCartToken } = useCartToken();
  const cartResult = useQuery(["cart", cartToken], () =>
    getCart({ cartToken })
  );

  const { status: fetchStatus, data } = cartResult;
  const orderItems = data?.included
    ?.filter((i) => i.type === "order-item--default")
    .map((order) => {
      return {
        id: order.id,
        title: order.attributes.title,
        quantity: +order.attributes.quantity,
        price: order.attributes.unit_price.formatted,
        totalPrice: order.attributes.total_price?.formatted,
      };
    });
  const totalQuantity = orderItems?.reduce(
    (acc, item) => acc + +item.quantity,
    0
  );
  const order = data?.data.find((d) => d.type === "order--default");
  const cartData = {
    id: order?.id,
    orderItems,
    totalPrice: order?.attributes.total_price?.formatted || "0 €",
    totalQuantity,
  };

  const { mutate: addProductToCart, status: addProductToCartStatus } =
    useMutation(addToCart, {
      onSuccess: () => queryClient.invalidateQueries(["cart", cartToken]),
    });

  const { mutate: removeProductFromCart } = useMutation(removeFromCart, {
    onSettled: () => queryClient.invalidateQueries(["cart", cartToken]),
  });

  const { mutate: removeAllProductsFromCart } = useMutation(removeAllFromCart, {
    onSettled: () => queryClient.invalidateQueries(["cart", cartToken]),
  });

  const resetCart = () => {
    resetCartToken();
    queryClient.invalidateQueries(["cart", cartToken]);
  }

  return {
    fetchStatus,
    cartData,
    addProductToCart,
    addProductToCartStatus,
    removeProductFromCart,
    removeAllProductsFromCart,
    resetCart,
  };
};
