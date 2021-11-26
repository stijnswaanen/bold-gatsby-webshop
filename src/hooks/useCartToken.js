export const useCartToken = () => {
  const resetCartToken = () =>{
     localStorage.setItem("cartToken", Math.random().toString(36).substr(2));
     console.log('reset cartToken');
  }
  if (!localStorage.getItem("cartToken")) {
    resetCartToken();
  }
  
  const cartToken = localStorage.getItem("cartToken");

  return { cartToken, resetCartToken };
};
