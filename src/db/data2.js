import { AiFillStar } from "react-icons/ai";

const data = [
   { img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/38e0a196-20d2-4820-9f3f-e44c98318039/air-max-90-shoes-QfTnV3.png",
    title: "Nike Tanjun",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(50 reviews)",
    prevPrice: "$50.00",
    newPrice: "45",
    company: "Nike",
    color: "black",
    category: "Sneakers"
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6f687ba8-9271-4de0-a65f-6d2632408b88/air-max-pulse-shoes-vntJKX.png",
    title: "Nike Revolution 5",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(45 reviews)",
    prevPrice: "$60.00",
    newPrice: "49.99",
    company: "Nike",
    color: "black",
    category: "Sneakers"
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ffbb54e2-f757-48b3-83de-a0903f05d893/revolution-7-road-running-shoes-dC34tK.png",
    title: "Nike Court Royale",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(55 reviews)",
    prevPrice: "$55.00",
    newPrice: "48",
    company: "Nike",
    color: "black",
    category: "Sneakers"
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1c4bdbce-c85c-4c98-9448-c519badd709f/dunk-low-twist-shoes-V6NqFG.png",
    title: "Nike Flex Experience RN 10",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(40 reviews)",
    prevPrice: "$45.00",
    newPrice: "40",
    company: "Nike",
    color: "black",
    category: "Sneakers"
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4763b078-c16f-44bd-a5d0-2fcad00b653c/air-max-excee-shoes-Zvl8cs.png",
    title: "Nike Revolution 4",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(60 reviews)",
    prevPrice: "$55.00",
    newPrice: "47.50",
    company: "Nike",
    color: "black",
    category: "Sneakers"
  },
  
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c7f91e6-4cf2-4bb5-991e-c19390a2b5de/custom-nike-air-force-1-mid-by-you-shoes.png",
    title: "Nike Tanjun",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(20 reviews)",
    prevPrice: "$45.00",
    newPrice: "40",
    company: "Nike",
    color: "Black",
    category: "Flats"
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/922139e1-3221-4e96-a9f9-3fbb67926e17/nikecourt-legacy-shoes-PKg8wX.png",
    title: "Nike Benassi JDI",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(15 reviews)",
    prevPrice: "$35.00",
    newPrice: "30",
    company: "Nike",
    color: "Black",
    category: "Flats"
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/057c2bbd-d065-44eb-913f-51dd4f98d680/air-force-1-07-shoe-HWWX9W.png",
    title: "Nike Kawa Slide",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(25 reviews)",
    prevPrice: "$40.00",
    newPrice: "35",
    company: "Nike",
    color: "Black",
    category: "Flats"
  },
  {
    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/3f83888c-012e-4ec9-9022-0a5de65eeb34/air-footscape-woven-black-and-smoke-grey-fb1959-001-release-date.jpg",
    title: "Nike Ultra Comfort 3",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(18 reviews)",
    prevPrice: "$50.00",
    newPrice: "45",
    company: "Nike",
    color: "Black",
    category: "Flats"
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6f687ba8-9271-4de0-a65f-6d2632408b88/air-max-pulse-shoes-vntJKX.png",
    title: "Nike Revolution 5",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(30 reviews)",
    prevPrice: "$55.00",
    newPrice: "50",
    company: "Nike",
    color: "Black",
    category: "Flats"
  },

  {
    img: "https://m.media-amazon.com/images/I/712jZNYZo9L._SL1500_.jpg",
    title: "Nike Ultra Comfort 3",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(35 reviews)",
    prevPrice: "$45.00",
    newPrice: "40",
    company: "Nike",
    color: "black",
    category: "Sandals"
  },
  {
    img: "https://assets.ajio.com/medias/sys_master/root/20230104/IZNX/63b5bc6cf997ddfdbd11d6a8/nike_black_vista_sports_sandals.jpg",
    title: "Nike Victori One",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(42 reviews)",
    prevPrice: "$50.00",
    newPrice: "45",
    company: "Nike",
    color: "black",
    category: "Sandals"
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a0dbb908-ae33-4059-b5a5-76ed54b5f3be/icon-classic-se-sandals-Svhhl2.png",
    title: "Nike Offcourt",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(28 reviews)",
    prevPrice: "$48.00",
    newPrice: "42",
    company: "Nike",
    color: "black",
    category: "Sandals"
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f334171-7100-408e-b1cd-3001fcb77679/calm-flip-flops-mvR5GJ.png",
    title: "Nike Benassi",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(50 reviews)",
    prevPrice: "$40.00",
    newPrice: "35",
    company: "Nike",
    color: "black",
    category: "Sandals"
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/efc5cd8c-be4f-4e4c-beaf-65ebf386ef99/air-more-uptempo-slides-L9svNK.png",
    title: "Nike Kawa",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(22 reviews)",
    prevPrice: "$38.00",
    newPrice: "30",
    company: "Nike",
    color: "black",
    category: "Sandals"
  },
  {
    img: "https://example.com/image1.jpg",
    title: "Nike Air Heels",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(10 reviews)",
    prevPrice: "$45.00",
    newPrice: "40",
    company: "Nike",
    color: "black",
    category: "Heels"
  },
  {
    img: "https://example.com/image2.jpg",
    title: "Nike Flex Heels",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(15 reviews)",
    prevPrice: "$50.00",
    newPrice: "45",
    company: "Nike",
    color: "black",
    category: "Heels"
  },
  {
    img: "https://example.com/image3.jpg",
    title: "Nike Air Zoom Heels",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(20 reviews)",
    prevPrice: "$48.00",
    newPrice: "43",
    company: "Nike",
    color: "black",
    category: "Heels"
  },
  {
    img: "https://example.com/image4.jpg",
    title: "Nike Revolution Heels",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(12 reviews)",
    prevPrice: "$47.00",
    newPrice: "42",
    company: "Nike",
    color: "black",
    category: "Heels"
  },
  {
    img: "https://example.com/image5.jpg",
    title: "Nike Free Heels",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(18 reviews)",
    prevPrice: "$49.00",
    newPrice: "44",
    company: "Nike",
    color: "black",
    category: "Heels"
  },{
    img: "https://i.pinimg.com/474x/dc/5e/21/dc5e2188b7b462df4fd010ef507c210c.jpg",
    title: "Nike Air Heels",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(10 reviews)",
    prevPrice: "$45.00",
    newPrice: "40",
    company: "Nike",
    color: "black",
    category: "Heels"
  },
  {
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e9d41cd4-a2c5-4ca7-a3aa-f4bf597658d0/custom-nike-air-force-1-mid-by-you-shoes.png",
    title: "Nike Blue Sneaker",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(10 reviews)",
    prevPrice: "$60.00",
    newPrice: "45",
    company: "Nike",
    color: "Blue",
    category: "sneakers"
  },
  {
    img: "nike_red_sneaker.jpg",
    title: "Nike Red Sneaker",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(15 reviews)",
    prevPrice: "$55.00",
    newPrice: "40",
    company: "Nike",
    color: "Red",
    category: "sneakers"
  },
  {
    img: "nike_green_sneaker.jpg",
    title: "Nike Green Sneaker",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(12 reviews)",
    prevPrice: "$50.00",
    newPrice: "35",
    company: "Nike",
    color: "Green",
    category: "sneakers"
  },
  {
    img: "nike_white_sneaker.jpg",
    title: "Nike White Sneaker",
    star: "<AiFillStar className='rating-star' />",
    reviews: "(20 reviews)",
    prevPrice: "$65.00",
    newPrice: "50",
    company: "Nike",
    color: "White",
    category: "sneakers"
  },

]
export default data;