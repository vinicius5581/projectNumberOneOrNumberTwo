const initState = [
    {
        id: "page-about-us",
        title: "About Us",
        path: "about",
        body: "Hello from home about page",
        elements: []
    },
    {
        id: "home",
        title: "Home",
        path: "/",
        body: "Welcom to the home page",
        elements: []
    }
];

const pagesReducer = (state = initState, action) => {
switch (action.type) {
    default:
    return state;
}
};

export default pagesReducer;