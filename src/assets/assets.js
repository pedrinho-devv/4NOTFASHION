
import p_img1 from './card1.jpg'
import p_img2_1 from './card2.jpg'
import p_img2_2 from './card3.jpg'
import p_img2_3 from './card4.jpg'
import p_img2_4 from './card5.jpg'
import p_img3 from './card6.jpg'
import p_img4 from './card1.jpg'
import p_img5 from './card2.jpg'
import p_img6 from './card3.jpg'


import card1 from './card1.jpg' 
import card2 from './card2.jpg' 
import card3 from './card3.jpg' 
import card4 from './card4.jpg' 
import card5 from './card5.jpg' 
import card6 from './card6.jpg' 
import about_img from './abouthero.jpg'
import men from './menhero.jpg'
import woman from './womanhero.jpg'
import footerhero from './footerhero.jpg'

export const assets = {
        card1,
        card2,
        card3,
        card4,
        card5,
        card6,
        about_img,
        men,
        woman,
        footerhero
}


export const products = [
    {
        _id: "aaaaa",
        name: "Code Ninja Cotton Tee",
        description: "Uma camiseta leve e confortável para os mestres do código. Ideal para quem vive entre linhas de programação.",
        price: 100,
        image: [p_img1],
        category: "Geek",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Binary Samurai T-shirt",
        description: "Camiseta estilosa para programadores que dominam a arte do código como verdadeiros samurais digitais.",
        price: 100,
        image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
        category: "Geek",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Chibi Hacker Cotton Top",
        description: "Para os pequenos gênios do código! Camiseta confortável com estilo anime e toque geek.",
        price: 220,
        image: [p_img3],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "404 Not Found T-shirt",
        description: "Camiseta perfeita para quem gosta de piadas geeks. Código 404, estilo 100% garantido!",
        price: 110,
        image: [p_img4],
        category: "Geek",
        subCategory: "Topwear",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Otaku Code Hoodie",
        description: "Moletom confortável para maratonar animes e programar madrugada adentro.",
        price: 130,
        image: [p_img5],
        category: "Geek",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaaf",
        name: "Kawaii Developer Cotton Top",
        description: "Estilo kawaii para pequenas programadoras e fãs de animes.",
        price: 140,
        image: [p_img6],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "L", "XL"],
        date: 1716623423448,
        bestseller: false
    },
    {
        _id: "aaaag",
        name: "Cyberpunk Code Joggers",
        description: "Calça estilosa para um look futurista e confortável para programar e assistir séries de ficção científica.",
        price: 190,
        image: [p_img3],
        category: "Geek",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Git Commit Push T-shirt",
        description: "Camiseta essencial para programadores que vivem no terminal!",
        price: 140,
        image: [p_img1],
        category: "Geek",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        bestseller: false
    }
];
