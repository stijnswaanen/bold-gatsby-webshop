export const useCartToken = () => {
  const resetCartToken = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartToken", Math.random().toString(36).substr(2));
      console.log("reset cartToken");
    }
  };
  if (typeof window !== "undefined" && !localStorage.getItem("cartToken")) {
    resetCartToken();
  }

  const cartToken =
    typeof window !== "undefined"
      ? localStorage.getItem("cartToken")
      : Math.random().toString(36).substr(2);

  return { cartToken, resetCartToken };
};
