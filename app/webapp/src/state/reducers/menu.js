const initState = {
    items: [
      {
        id: "menu-1",
        path: "/",
        title: "Home"
      },
      {
        id: "menu-2",
        path: "/about",
        title: "About Us"
      }
    ],
    active: null
  };
  
  const menuReducer = (state = initState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default menuReducer;