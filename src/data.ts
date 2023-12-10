import { title } from "process";

type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Cheese Burger",
    desc: "(Cheese Burger, French Fries, Soda)",
    img: "/temporary/cheeseburger.png",
    price: 35.9,
  },
  {
    id: 2,
    title: "Chicken Burger",
    desc: "(Chicken Burger, French Fries, Soda)",
    img: "/temporary/cheeseburger.png",
    price: 35.9,
  },
  {
    id: 3,
    title: "Double Burger",
    desc: "(Double Burger, French Fries, Soda)",
    img: "/temporary/cheeseburger.png",
    price: 35.9,
  },
  {
    id: 4,
    title: "Hot Chicken Burger",
    desc: "(Hot Chicken Burger, French Fries, Soda)",
    img: "/temporary/cheeseburger.png",
    price: 35.9,
  },
  {
    id: 5,
    title: "Spicy Hot Burger",
    desc: "(Spicy Hot Burger, French Fries, Soda)",
    img: "/temporary/cheeseburger.png",
    price: 35.9,
  },
  {
    id: 6,
    title: "Double Chicken Burger",
    desc: "(Double Chicken Burger, French Fries, Soda)",
    img: "/temporary/cheeseburger.png",
    price: 35.9,
  },
];

export const burgers: Products = [
  {
    id: 1,
    title: "Cheese Burger",
    desc: "(Cheese Burger, French Fries, Soda)",
    img: "/temporary/cheeseburger.png",
    price: 35.9,
  },
  {
    id: 2,
    title: "Chicken Burger",
    desc: "(Chicken Burger, French Fries, Soda)",
    img: "/temporary/cheeseburger.png",
    price: 35.9,
  },
  {
    id: 3,
    title: "Double Burger",
    desc: "(Double Burger, French Fries, Soda)",
    img: "/temporary/cheeseburger.png",
    price: 35.9,
  },
  {
    id: 4,
    title: "Hot Chicken Burger",
    desc: "(Hot Chicken Burger, French Fries, Soda)",
    img: "/temporary/cheeseburger.png",
    price: 35.9,
  },
  {
    id: 5,
    title: "Spicy Hot Burger",
    desc: "(Spicy Hot Burger, French Fries, Soda)",
    img: "/temporary/cheeseburger.png",
    price: 35.9,
  },
  {
    id: 6,
    title: "Double Chicken Burger",
    desc: "(Double Chicken Burger, French Fries, Soda)",
    img: "/temporary/cheeseburger.png",
    price: 35.9,
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Cheese Burger",
  desc: "(Cheese Burger, French Fries, Soda)",
  img: "/temporary/cheeseburger.png",
  price: 35.9,
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "burgers",
    title: "Menua Burger",
    desc: "Berbagai Macam Burger dengan Cita Rasa yang Lezat",
    img: "/temporary/bgburger.png",
  },
  {
    id: 2,
    slug: "chickens",
    title: "Menua Ayam",
    desc: "Daging Ayam yang Gurih dan Lezat dengan Tingkat Kematangan yang Pas",
    img: "/temporary/bgchicken.png",
  },
  {
    id: 3,
    slug: "others",
    title: "Menua Lainnya",
    desc: "Berbagai Macam Pilihan Makanan yang Menarik",
    img: "/temporary/bgff.png",
  },
];
