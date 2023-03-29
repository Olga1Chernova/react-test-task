import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "Home page",
        link: "/products"
    },
    {
        id: nanoid(),
        text: "Add product",
        link: "/add-product"
    }
];

export default items;