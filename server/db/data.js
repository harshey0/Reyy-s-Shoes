
const data = [
    {
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        title: "Nike Air Monarch IV",
        star: "4",
        reviews: "(65 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Nike",
        color: "white",
        category: "sneakers",
        inStock: "7",
        description: "The Nike Air Monarch IV is a classic sneaker known for its comfort and durability. Featuring an Air-Sole unit for responsive cushioning and a leather upper for support, it's perfect for everyday wear."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
        title: "Nike Air Vapormax Plus",
        star: "3",
        reviews: "(472 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Nike",
        color: "red",
        category: "sneakers",
        inStock: "12",
        description: "The Nike Air Vapormax Plus combines the iconic Air Max Plus upper with the revolutionary Vapormax Air unit for lightweight, bouncy cushioning. It offers a sleek, futuristic look and unbeatable comfort."
    },
    
  
    {
        img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
        title: "Nike Waffle One Sneaker",
        star: "4",
        reviews: "(244 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Nike",
        color: "green",
        category: "sneakers",
        inStock: "5",
        description: "The Nike Waffle One Sneaker reimagines a classic with modern details. It features a waffle outsole for traction and durability, while the lightweight foam midsole offers responsive cushioning. Perfect for casual outings."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
        title: "Nike Running Shoe",
        star: "3",
        reviews: "(563 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Adidas",
        color: "black",
        category: "sneakers",
        inStock: "10",
        description: "The Nike Running Shoe offers a blend of comfort and performance for your daily runs. Featuring a breathable upper and responsive cushioning, these shoes provide support and traction on various surfaces. Whether you're jogging or sprinting, they'll help you reach your fitness goals."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
        title: "Flat Slip On Pumps",
        star: "5",
        reviews: "(547 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Vans",
        color: "green",
        category: "flats",
        inStock: "8",
        description: "The Flat Slip On Pumps by Vans are a versatile choice for casual outings. With their slip-on design and comfortable fit, they're perfect for all-day wear. The durable outsole provides traction, while the cushioned footbed offers support."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
        title: "Knit Ballet Flat",
        star: "4",
        reviews: "(653 reviews)",
        prevPrice: "$140,00",
        newPrice: "50",
        company: "Adidas",
        color: "black",
        category: "flats",
        inStock: "3",
        description: "The Knit Ballet Flat by Adidas offers a stylish and comfortable option for everyday wear. Made with breathable knit fabric and a cushioned insole, these flats provide all-day comfort. Pair them with your favorite jeans or dress for a chic look."
    },
    
  
    {
        img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
        title: "Loafer Flats",
        star: "1",
        reviews: "(456 reviews)",
        prevPrice: "$140,00",
        newPrice: "50",
        company: "Vans",
        color: "white",
        category: "flats",
        inStock: "6",
        description: "The Loafer Flats by Vans offer a classic and versatile style for everyday wear. Featuring a slip-on design and durable construction, these flats provide comfort and convenience. Pair them with jeans or skirts for a laid-back yet stylish look."
    },
    
  
    {
        img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
        title: "Nike Zoom Freak",
        star: "2",
        reviews: "(653 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Nike",
        color: "green",
        category: "sneakers",
        inStock: "9",
        description: "The Nike Zoom Freak sneakers are designed for athletes who demand performance and style. With responsive cushioning and a supportive fit, they provide comfort during intense workouts or everyday activities. The Zoom Air unit in the sole offers lightweight cushioning and impact protection."
    },
    
  
    {
        img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
        title: "Nike Men's Sneaker",
        star: "3",
        reviews: "(565 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Adidas",
        color: "blue",
        category: "sneakers",
        inStock: "4",
        description: "The Nike Men's Sneaker offers a blend of style and performance. Featuring a breathable upper and cushioned midsole, these sneakers provide comfort and support for all-day wear. With their versatile design, they're perfect for both casual outings and workouts."
    },
    
  
    {
        img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
        title: "PUMA BLACK-OCE",
        star: "2",
        reviews: "(653 reviews)",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Puma",
        color: "green",
        category: "sneakers",
        inStock: "11",
        description: "The PUMA BLACK-OCE sneakers offer a sleek and stylish design for urban adventures. Featuring a lightweight construction and cushioned midsole, they provide all-day comfort. The breathable upper ensures ventilation, while the rubber outsole offers traction on various surfaces."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
        title: "Pacer Future Sneaker",
        star: "5",
        reviews: "(243 reviews)",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Puma",
        color: "red",
        category: "sneakers",
        inStock: "6",
        description: "The Pacer Future Sneaker by Puma is a versatile and stylish choice for everyday wear. Featuring a lightweight design and cushioned midsole, these sneakers offer comfort and support for all-day wear. The durable outsole provides traction on various surfaces."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
        title: "Unisex-Adult Super",
        star: "1",
        reviews: "(254 reviews)",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Puma",
        color: "black",
        category: "sneakers",
        inStock: "3",
        description: "The Unisex-Adult Super sneakers by Puma offer a sleek and modern design with a touch of retro style. Featuring a durable construction and cushioned midsole, they provide comfort and support for all-day wear. The versatile black color makes them easy to pair with any outfit."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
        title: "Roma Basic Sneaker",
        star: "3",
        reviews: "(675 reviews)",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Puma",
        color: "white",
        category: "sneakers",
        inStock: "8",
        description: "The Roma Basic Sneaker by Puma offers a timeless style with modern comfort. Featuring a durable rubber outsole and cushioned midsole, these sneakers are perfect for everyday wear. With their classic design and versatile color, they complement any casual outfit effortlessly."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
        title: "Pacer Future Doubleknit",
        star: "2",
        reviews: "(235 reviews)",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Puma",
        color: "black",
        category: "sneakers",
        inStock: "5",
        description: "The Pacer Future Doubleknit sneakers by Puma offer a sleek and modern design for urban adventures. Featuring a lightweight construction and cushioned midsole, they provide all-day comfort. The breathable upper ensures ventilation, while the rubber outsole offers traction on various surfaces."
    },
    
  
    
    {
        img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
        title: "Fusion Evo Golf Shoe",
        star: "5",
        reviews: "(542 reviews)",
        prevPrice: "$140,00",
        newPrice: "100",
        company: "Puma",
        color: "green",
        category: "sneakers",
        inStock: "9",
        description: "The Fusion Evo Golf Shoe by Puma is designed for golfers who demand performance and style on the course. With a waterproof upper and responsive cushioning, these shoes provide comfort and support during every swing. The durable outsole offers traction on various terrains."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
        title: "Low-Top Trainers",
        star: "3",
        reviews: "(525 reviews)",
        prevPrice: "$140,00",
        newPrice: "100",
        company: "Vans",
        color: "white",
        category: "sandals",
        inStock: "6",
        description: "The Low-Top Trainers by Vans are a versatile choice for casual outings. Featuring a lightweight canvas upper and cushioned footbed, they provide comfort and style. The durable rubber outsole offers traction on various surfaces, making them ideal for everyday wear."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
        title: "Rainbow Chex Skate",
        star: "5",
        reviews: "(764 reviews)",
        prevPrice: "$140,00",
        newPrice: "100",
        company: "Vans",
        color: "red",
        category: "flats",
        inStock: "7",
        description: "The Rainbow Chex Skate shoes by Vans are perfect for skating enthusiasts. Featuring a durable canvas upper and cushioned insole, they offer comfort and support for all-day wear. The classic Vans waffle outsole provides traction and grip on the skateboard."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
        title: "Classic Bandana Sneakers",
        star: "2",
        reviews: "(12 reviews)",
        prevPrice: "$140,00",
        newPrice: "50",
        company: "Nike",
        color: "black",
        category: "sandals",
        inStock: "4",
        description: "The Classic Bandana Sneakers by Nike offer a trendy and stylish option for casual wear. Featuring a durable canvas upper and cushioned footbed, they provide comfort and support for all-day wear. The classic bandana print adds a touch of flair to your outfit."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
        title: "Chunky High Heel",
        star: "4",
        reviews: "(653 reviews)",
        prevPrice: "$140,00",
        newPrice: "50",
        company: "Vans",
        color: "black",
        category: "heels",
        inStock: "11",
        description: "The Chunky High Heel by Vans offers a bold and stylish look for any occasion. Featuring a chunky heel and platform sole, these heels provide stability and comfort. The versatile black color makes them easy to pair with any outfit, from casual to formal."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
        title: "Slip On Stiletto High Heel",
        star: "1",
        reviews: "(653 reviews)",
        prevPrice: "$140,00",
        newPrice: "100",
        company: "Puma",
        color: "black",
        category: "heels",
        inStock: "8",
        description: "The Slip On Stiletto High Heel by Puma offers a sleek and elegant design for special occasions. Featuring a pointed toe and stiletto heel, these heels add sophistication to any outfit. The slip-on style ensures easy wear, while the cushioned insole provides comfort."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
        title: "DREAM PAIRS Court Shoes",
        star: "3",
        reviews: "(424 reviews)",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Nike",
        color: "red",
        category: "heels",
        inStock: "6",
        description: "The DREAM PAIRS Court Shoes by Nike offer a blend of style and comfort for formal occasions. Featuring a classic silhouette and cushioned insole, these court shoes provide support and stability. The bold red color adds a pop of color to your ensemble."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
        title: "Nike Air Vapormax Plus",
        star: "5",
        reviews: "(324 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Nike",
        color: "red",
        category: "sneakers",
        inStock: "9",
        description: "The Nike Air Vapormax Plus combines the iconic Air Max Plus upper with the revolutionary Vapormax Air unit for lightweight, bouncy cushioning. It offers a sleek, futuristic look and unbeatable comfort."
    },
    
  
    {
        img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
        title: "Low Mid Block Heels",
        star: "3",
        reviews: "(674 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Nike",
        color: "black",
        category: "heels",
        inStock: "7",
        description: "The Low Mid Block Heels by Nike offer a stylish and comfortable option for everyday wear. With their low block heel and cushioned insole, these heels provide stability and support. The versatile black color makes them easy to pair with any outfit."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
        title: "Chunky High Heel",
        star: "2",
        reviews: "(355 reviews)",
        prevPrice: "$140,00",
        newPrice: "50",
        company: "Adidas",
        color: "black",
        category: "heels",
        inStock: "6",
        description: "The Chunky High Heel by Adidas offers a bold and trendy look for any occasion. Featuring a chunky heel and platform sole, these heels provide stability and comfort. The versatile black color makes them easy to pair with any outfit, from casual to formal."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
        title: "Amore Fashion Stilettos",
        star: "4",
        reviews: "(244 reviews)",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Adidas",
        color: "white",
        category: "heels",
        inStock: "5",
        description: "The Amore Fashion Stilettos by Adidas offer a sophisticated and elegant design for special occasions. Featuring a pointed toe and slim stiletto heel, these heels add glamour to any outfit. The white color adds a touch of freshness to your ensemble."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
        title: "Bridal Sandals Glitter",
        star: "3",
        reviews: "(757 reviews)",
        prevPrice: "$140,00",
        newPrice: "50",
        company: "Adidas",
        color: "black",
        category: "heels",
        inStock: "3",
        description: "The Bridal Sandals Glitter by Adidas offer a glamorous and festive look for weddings or special occasions. Featuring glittery straps and a comfortable footbed, these sandals provide style and comfort for hours of celebration. The black color adds a touch of elegance to your bridal ensemble."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
        title: "Wedding Prom Bridal",
        star: "2",
        reviews: "(876 reviews)",
        prevPrice: "$140,00",
        newPrice: "50",
        company: "Adidas",
        color: "black",
        category: "flats",
        inStock: "8",
        description: "The Wedding Prom Bridal flats by Adidas offer a blend of style and comfort for special occasions. Featuring a sleek design and cushioned insole, these flats provide support for hours of dancing and celebration. The black color makes them versatile and easy to pair with any outfit."
    },

    {
        img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
        title: "Nike Men's Sneaker",
        star: "3",
        reviews: "(544 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Adidas",
        color: "blue",
        category: "sneakers",
        inStock: "4",
        description: "The Nike Men's Sneaker offers a blend of style and performance. Featuring a breathable upper and cushioned midsole, these sneakers provide comfort and support for all-day wear. With their versatile design, they're perfect for both casual outings and workouts."
    },
    
  
    {
        img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
        title: "PUMA BLACK-OCE",
        star: "2",
        reviews: "(874 reviews)",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Puma",
        color: "green",
        category: "sneakers",
        inStock: "11",
        description: "The PUMA BLACK-OCE sneakers offer a sleek and stylish design for urban adventures. Featuring a lightweight construction and cushioned midsole, they provide all-day comfort. The breathable upper ensures ventilation, while the rubber outsole offers traction on various surfaces."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
        title: "Pacer Future Sneaker",
        star: "5",
        reviews: "(243 reviews)",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Puma",
        color: "red",
        category: "sneakers",
        inStock: "6",
        description: "The Pacer Future Sneaker by Puma is a versatile and stylish choice for everyday wear. Featuring a lightweight design and cushioned midsole, these sneakers offer comfort and support for all-day wear. The durable outsole provides traction on various surfaces."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
        title: "Unisex-Adult Super",
        star: "1",
        reviews: "(867 reviews)",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Puma",
        color: "black",
        category: "sneakers",
        inStock: "3",
        description: "The Unisex-Adult Super sneakers by Puma offer a sleek and modern design with a touch of retro style. Featuring a durable construction and cushioned midsole, they provide comfort and support for all-day wear. The versatile black color makes them easy to pair with any outfit."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
        title: "Roma Basic Sneaker",
        star: "3",
        reviews: "(424 reviews)",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Puma",
        color: "white",
        category: "sneakers",
        inStock: "8",
        description: "The Roma Basic Sneaker by Puma offers a timeless style with modern comfort. Featuring a durable rubber outsole and cushioned midsole, these sneakers are perfect for everyday wear. With their classic design and versatile color, they complement any casual outfit effortlessly."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
        title: "Pacer Future Doubleknit",
        star: "2",
        reviews: "(677 reviews)",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Puma",
        color: "black",
        category: "sneakers",
        inStock: "5",
        description: "The Pacer Future Doubleknit sneakers by Puma offer a sleek and modern design for urban adventures. Featuring a lightweight construction and cushioned midsole, they provide all-day comfort. The breathable upper ensures ventilation, while the rubber outsole offers traction on various surfaces."
    },
    
  
    {
        img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
        title: "Rainbow Chex Skate",
        star: "5",
        reviews: "(533 reviews)",
        prevPrice: "$140,00",
        newPrice: "100",
        company: "Vans",
        color: "red",
        category: "flats",
        inStock: "7",
        description: "The Rainbow Chex Skate shoes by Vans are perfect for skating enthusiasts. Featuring a durable canvas upper and cushioned insole, they offer comfort and support for all-day wear. The classic Vans waffle outsole provides traction and grip on the skateboard."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
        title: "Fusion Evo Golf Shoe",
        star: "5",
        reviews: "(576 reviews)",
        prevPrice: "$140,00",
        newPrice: "100",
        company: "Puma",
        color: "green",
        category: "sneakers",
        inStock: "9",
        description: "The Fusion Evo Golf Shoe by Puma is designed for golfers who demand performance and style on the course. With a waterproof upper and responsive cushioning, these shoes provide comfort and support during every swing. The durable outsole offers traction on various terrains."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
        title: "Low-Top Trainers",
        star: "3",
        reviews: "(355 reviews)",
        prevPrice: "$140,00",
        newPrice: "100",
        company: "Vans",
        color: "white",
        category: "sandals",
        inStock: "6",
        description: "The Low-Top Trainers by Vans are a versatile choice for casual outings. Featuring a lightweight canvas upper and cushioned footbed, they provide comfort and style. The durable rubber outsole offers traction on various surfaces, making them ideal for everyday wear."
    },
    
    
    {
        img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
        title: "Classic Bandana Sneakers",
        star: "2",
        reviews: "(687 reviews)",
        prevPrice: "$140,00",
        newPrice: "50",
        company: "Nike",
        color: "black",
        category: "sandals",
        inStock: "4",
        description: "The Classic Bandana Sneakers by Nike offer a trendy and stylish option for casual wear. Featuring a durable canvas upper and cushioned footbed, they provide comfort and support for all-day wear. The classic bandana print adds a touch of flair to your outfit."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
        title: "Chunky High Heel",
        star: "4",
        reviews: "(367 reviews)",
        prevPrice: "$140,00",
        newPrice: "50",
        company: "Vans",
        color: "black",
        category: "heels",
        inStock: "11",
        description: "The Chunky High Heel by Vans offers a bold and stylish look for any occasion. Featuring a chunky heel and platform sole, these heels provide stability and comfort. The versatile black color makes them easy to pair with any outfit, from casual to formal."
    },
    
  ];
  
  export default data;
  