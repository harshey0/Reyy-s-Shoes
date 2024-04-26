
const data = [
    {
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        title: "Nike Air Monarch IV",
        prevPrice: "$140",
        newPrice: 200,
        company: "Nike",
        color: "white",
        category: "sneakers",
        seller: "SneakerGalaxy",
        inStock: 7,
        comments: [
            { name: "John", star: 3, comment: "Great pair of shoes, very comfortable!" },
            { name: "Alice", star: 4, comment: "Love the design and the fit, highly recommend." }
        ],
        description: "The Nike Air Monarch IV is a classic sneaker known for its comfort and durability. Featuring an Air-Sole unit for responsive cushioning and a leather upper for support, it's perfect for everyday wear."
    },
    {
        img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
        title: "Nike Air Vapormax Plus",
        prevPrice: "$140",
        newPrice: 200,
        company: "Nike",
        color: "red",
        category: "sneakers",
        inStock: 12,
        comments: [
            { name: "Mike", star: 5, comment: "Excellent shoes, perfect for running." },
            { name: "Emily", star: 2, comment: "I've been using these for months, still as good as new." }
        ],
        description: "The Nike Air Vapormax Plus combines the iconic Air Max Plus upper with the revolutionary Vapormax Air unit for lightweight, bouncy cushioning. It offers a sleek, futuristic look and unbeatable comfort."
    },
    {
        img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
        title: "Nike Waffle One Sneaker",
        prevPrice: "$140",
        newPrice: 200,
        company: "Nike",
        color: "green",
        category: "sneakers",
        seller: "FootwearWorld",
        inStock: 5,
        comments: [
            { name: "Sophia", star: 4, comment: "Amazing comfort and style, worth every penny." },
            { name: "David", star: 5, comment: "Received them as a gift, couldn't be happier." }
        ],
        description: "The Nike Waffle One Sneaker reimagines a classic with modern details. It features a waffle outsole for traction and durability, while the lightweight foam midsole offers responsive cushioning. Perfect for casual outings."
    },
    {
        img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
        title: "Nike Running Shoe",
        prevPrice: "$140",
        newPrice: 200,
        company: "Adidas",
        color: "black",
        category: "sneakers",
        inStock: 10,
        comments: [
            { name: "William", star: 2, comment: "Great for running, provides excellent support." }
        ],
        description: "The Nike Running Shoe offers a blend of comfort and performance for your daily runs. Featuring a breathable upper and responsive cushioning, these shoes provide support and traction on various surfaces. Whether you're jogging or sprinting, they'll help you reach your fitness goals."
    },
    {
        img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
        title: "Flat Slip On Pumps",
        prevPrice: "$140",
        newPrice: 200,
        company: "Vans",
        color: "green",
        category: "flats",
        inStock: 8,
        comments: [
            { name: "Olivia", star: 4, comment: "Super lightweight and stylish, love them!" },
            { name: "Daniel", star: 2, comment: "Perfect fit, great for everyday wear." }
        ],
        description: "The Flat Slip On Pumps by Vans are a versatile choice for casual outings. With their slip-on design and comfortable fit, they're perfect for all-day wear. The durable outsole provides traction, while the cushioned footbed offers support."
    },
    {
        img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
        title: "Knit Ballet Flat",
        prevPrice: "$140",
        newPrice: 50,
        company: "Adidas",
        color: "black",
        category: "flats",
        seller: "ShoeEmporium",
        inStock: 3,
        comments: [
            { name: "Ava", star: 3, comment: "Awesome grip, really improves my swing." }
        ],
        description: "The Knit Ballet Flat by Adidas offers a stylish and comfortable option for everyday wear. Made with breathable knit fabric and a cushioned insole, these flats provide all-day comfort. Pair them with your favorite jeans or dress for a chic look."
    },
    
  
    {
        img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
        title: "Loafer Flats",
        prevPrice: "$140",
        newPrice: 50,
        company: "Vans",
        color: "white",
        category: "flats",
        inStock: 6,
        seller: "FashionFootprints",
        description: "The Loafer Flats by Vans offer a classic and versatile style for everyday wear. Featuring a slip-on design and durable construction, these flats provide comfort and convenience. Pair them with jeans or skirts for a laid-back yet stylish look."
    },
    
    
  
    {
        img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
        title: "Nike Zoom Freak",
        prevPrice: "$140",
        newPrice: 200,
        company: "Nike",
        color: "green",
        category: "sneakers",
        seller: "SneakerSquare",
        inStock: 9,
        comments: [
            { name: "Liam", star: 3, comment: "Love the design, very stylish." },
            { name: "Olivia", star: 4, comment: "Comfortable fit, great for walking." },
            { name: "Mason", star: 2, comment: "Excellent quality, durable materials." }
        ],
        description: "The Nike Zoom Freak sneakers are designed for athletes who demand performance and style. With responsive cushioning and a supportive fit, they provide comfort during intense workouts or everyday activities. The Zoom Air unit in the sole offers lightweight cushioning and impact protection."
    },
    
    
  
    {
        img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
        title: "Nike Men's Sneaker",
        prevPrice: "$140",
        newPrice: 200,
        company: "Adidas",
        color: "blue",
        category: "sneakers",
        seller: "FootwearFusion",
        inStock: 4,
        comments: [
            { name: "Ava", comment: "Classic design, easy to slip on and off." },
            { name: "James", comment: "Very comfortable, love the laid-back style." }
        ],
        description: "The Nike Men's Sneaker offers a blend of style and performance. Featuring a breathable upper and cushioned midsole, these sneakers provide comfort and support for all-day wear. With their versatile design, they're perfect for both casual outings and workouts."
    }
    ,
    
    {
        img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
        title: "PUMA BLACK-OCE",
        prevPrice: "$140",
        newPrice: 150,
        company: "Puma",
        color: "green",
        category: "sneakers",
        inStock: 11,
        seller: "ShoeShack",
        description: "The PUMA BLACK-OCE sneakers offer a sleek and stylish design for urban adventures. Featuring a lightweight construction and cushioned midsole, they provide all-day comfort. The breathable upper ensures ventilation, while the rubber outsole offers traction on various surfaces."
    }
    ,
    
    {
        img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
        title: "Pacer Future Sneaker",
        prevPrice: "$140",
        newPrice: 150,
        company: "Puma",
        color: "red",
        category: "sneakers",
        seller: "FreshFeet",
        inStock: 6,
        comments: [
            { name: "Harper", star: 4, comment: "Sleek design, very comfortable for long walks." },
            { name: "Ethan", comment: "Love the color and style, great addition to my collection." }
        ],
        description: "The Pacer Future Sneaker by Puma is a versatile and stylish choice for everyday wear. Featuring a lightweight design and cushioned midsole, these sneakers offer comfort and support for all-day wear. The durable outsole provides traction on various surfaces."
    }
    
,    
    
{
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    title: "Unisex-Adult Super",
    prevPrice: "$140",
    newPrice: 150,
    company: "Puma",
    color: "black",
    category: "sneakers",
    inStock: 3,
    comments: [
        { name: "Liam", star: 4, comment: "Love the design, very stylish." },
        { name: "Olivia", star: 3, comment: "Comfortable fit, great for walking." },
        { name: "Mason", comment: "Excellent quality, durable materials." }
    ],
    description: "The Unisex-Adult Super sneakers by Puma offer a sleek and modern design with a touch of retro style. Featuring a durable construction and cushioned midsole, they provide comfort and support for all-day wear. The versatile black color makes them easy to pair with any outfit."
}
,
    
{
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
    title: "Roma Basic Sneaker",
    prevPrice: "$140",
    newPrice: 150,
    company: "Puma",
    color: "white",
    category: "sneakers",
    inStock: 8,
    description: "The Roma Basic Sneaker by Puma offers a timeless style with modern comfort. Featuring a durable rubber outsole and cushioned midsole, these sneakers are perfect for everyday wear. With their classic design and versatile color, they complement any casual outfit effortlessly."
},

{
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    title: "Pacer Future Doubleknit",
    prevPrice: "$140",
    newPrice: 150,
    company: "Puma",
    color: "black",
    category: "sneakers",
    inStock: 5,
    comments: [
        { name: "Natalie", star: 3, comment: "Absolutely love the design, very eye-catching!" },
        { name: "Jack", star: 5, comment: "Comfortable fit, perfect for my daily runs." }
    ],
    description: "The Pacer Future Doubleknit sneakers by Puma offer a sleek and modern design for urban adventures. Featuring a lightweight construction and cushioned midsole, they provide all-day comfort. The breathable upper ensures ventilation, while the rubber outsole offers traction on various surfaces."
},

{
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Fusion Evo Golf Shoe",
    prevPrice: "$140",
    newPrice: 100,
    company: "Puma",
    color: "green",
    category: "sneakers",
    seller: "UrbanKicks",
    inStock: 9,
    comments: [
        { name: "James", star: 2, comment: "Sleek design, perfect for formal events." }
    ],
    description: "The Fusion Evo Golf Shoe by Puma is designed for golfers who demand performance and style on the course. With a waterproof upper and responsive cushioning, these shoes provide comfort and support during every swing. The durable outsole offers traction on various terrains."
}
,
{
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    title: "Low-Top Trainers",
    prevPrice: "$140",
    newPrice: 100,
    company: "Vans",
    color: "white",
    category: "sandals",
    inStock: 6,
    comments: [
        { name: "Lily", comment: "Sleek and modern design, goes well with any outfit." },
        { name: "Lucas", star: 4, comment: "Super comfy, feels like walking on clouds." }
    ],
    description: "The Low-Top Trainers by Vans are a versatile choice for casual outings. Featuring a lightweight canvas upper and cushioned footbed, they provide comfort and style. The durable rubber outsole offers traction on various surfaces, making them ideal for everyday wear."
},

{
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    title: "Rainbow Chex Skate",
    prevPrice: "$140",
    newPrice: 100,
    company: "Vans",
    color: "red",
    seller: "KicksKingdom",
    category: "flats",
    inStock: 7,
    comments: [
        { name: "Zoe", star: 5, comment: "Classic style, durable construction, couldn't ask for more." },
        { name: "Logan", star: 3, comment: "Great for everyday wear, love the retro vibe." }
    ],
    description: "The Rainbow Chex Skate shoes by Vans are perfect for skating enthusiasts. Featuring a durable canvas upper and cushioned insole, they offer comfort and support for all-day wear. The classic Vans waffle outsole provides traction and grip on the skateboard."
},

{
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "Classic Bandana Sneakers",
    prevPrice: "$140",
    newPrice: 50,
    company: "Nike",
    color: "black",
    category: "sandals",
    seller: "SneakerSafari",
    inStock: 4,
    comments: [
        { name: "Avery", star: 4, comment: "Very light and breathable, perfect for summer." },
        { name: "Mason", star: 4, comment: "Excellent grip, ideal for outdoor activities." }
    ],
    description: "The Classic Bandana Sneakers by Nike offer a trendy and stylish option for casual wear. Featuring a durable canvas upper and cushioned footbed, they provide comfort and support for all-day wear. The classic bandana print adds a touch of flair to your outfit."
},

{
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "Chunky High Heel",
    prevPrice: "$140",
    newPrice: 50,
    company: "Vans",
    color: "black",
    category: "heels",
    inStock: 11,
    comments: [
        { name: "Aria", star: 5, comment: "Stylish design, keeps my feet dry even on rainy days." },
        { name: "Jackson", star: 5, comment: "Improved my golf game, comfortable and supportive." }
    ],
    description: "The Chunky High Heel by Vans offers a bold and stylish look for any occasion. Featuring a chunky heel and platform sole, these heels provide stability and comfort. The versatile black color makes them easy to pair with any outfit, from casual to formal."
},

{
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "Slip On Stiletto High Heel",
    prevPrice: "$140",
    newPrice: 100,
    company: "Puma",
    color: "black",
    category: "heels",
    seller: "SoleSpectacle",
    inStock: 8,
    description: "The Slip On Stiletto High Heel by Puma offers a sleek and elegant design for special occasions. Featuring a pointed toe and stiletto heel, these heels add sophistication to any outfit. The slip-on style ensures easy wear, while the cushioned insole provides comfort."
}
,
    
{
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "DREAM PAIRS Court Shoes",
    prevPrice: "$140",
    newPrice: 150,
    company: "Nike",
    color: "red",
    category: "heels",
    inStock: 6,
    comments: [
        { name: "Scarlett", star: 2, comment: "Love the simplicity and comfort, great for casual outings." },
        { name: "Wyatt", comment: "Durable and versatile, my new favorite sneakers." }
    ],
    description: "The DREAM PAIRS Court Shoes by Nike offer a blend of style and comfort for formal occasions. Featuring a classic silhouette and cushioned insole, these court shoes provide support and stability. The bold red color adds a pop of color to your ensemble."
},

{
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    prevPrice: "$140",
    newPrice: 200,
    company: "Nike",
    color: "red",
    seller: "ShoeSizzle",
    category: "sneakers",
    inStock: 9,
    description: "The Nike Air Vapormax Plus combines the iconic Air Max Plus upper with the revolutionary Vapormax Air unit for lightweight, bouncy cushioning. It offers a sleek, futuristic look and unbeatable comfort."
},

{
    img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
    title: "Low Mid Block Heels",
    prevPrice: "$140",
    newPrice: 200,
    company: "Nike",
    color: "black",
    category: "heels",
    inStock: 7,
    comments: [
        { name: "Scarlett", star: 3, comment: "Love the simplicity and comfort, great for casual outings." },
        { name: "Wyatt", star: 3, comment: "Durable and versatile, my new favorite sneakers." }
    ],
    description: "The Low Mid Block Heels by Nike offer a stylish and comfortable option for everyday wear. With their low block heel and cushioned insole, these heels provide stability and support. The versatile black color makes them easy to pair with any outfit."
},

{
    img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
    title: "Chunky High Heel",
    prevPrice: "$140",
    newPrice: 50,
    company: "Adidas",
    color: "black",
    category: "heels",
    inStock: 6,
    comments: [
        { name: "Emily", star: 4, comment: "Very comfortable shoes, perfect for daily wear." }
    ],
    description: "The Chunky High Heel by Adidas offers a bold and trendy look for any occasion. Featuring a chunky heel and platform sole, these heels provide stability and comfort. The versatile black color makes them easy to pair with any outfit, from casual to formal."
},

{
    img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
    title: "Amore Fashion Stilettos",
    prevPrice: "$140",
    newPrice: 150,
    company: "Adidas",
    color: "white",
    category: "heels",
    seller: "FootwearFiesta",
    inStock: 5,
    comments: [
        { name: "Nova", star: 4, comment: "Fun and colorful design, perfect for skating." },
        { name: "Elijah", star: 4, comment: "Great traction, feels secure on the board." }
    ],
    description: "The Amore Fashion Stilettos by Adidas offer a sophisticated and elegant design for special occasions. Featuring a pointed toe and slim stiletto heel, these heels add glamour to any outfit. The white color adds a touch of freshness to your ensemble."
},

{
    img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
    title: "Bridal Sandals Glitter",
    prevPrice: "$140",
    newPrice: 50,
    company: "Adidas",
    color: "black",
    category: "heels",
    inStock: 3,
    comments: [
        { name: "Harper", star: 4, comment: "Great fit, stylish design, highly recommend!" }
    ],
    description: "The Bridal Sandals Glitter by Adidas offer a glamorous and festive look for weddings or special occasions. Featuring glittery straps and a comfortable footbed, these sandals provide style and comfort for hours of celebration. The black color adds a touch of elegance to your bridal ensemble."
}
,
    
{
    img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
    title: "Wedding Prom Bridal",
    prevPrice: "$140",
    newPrice: 50,
    company: "Adidas",
    color: "black",
    category: "flats",
    inStock: 8,
    description: "The Wedding Prom Bridal flats by Adidas offer a blend of style and comfort for special occasions. Featuring a sleek design and cushioned insole, these flats provide support for hours of dancing and celebration. The black color makes them versatile and easy to pair with any outfit."
},

{
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    title: "Nike Men's Sneaker",
    prevPrice: "$140",
    newPrice: 200,
    company: "Adidas",
    color: "blue",
    seller: "TrendyTreads",
    category: "sneakers",
    inStock: 4,
    comments: [
        { name: "Nova", star: 4, comment: "Fun and colorful design, perfect for skating." },
        { name: "Elijah", comment: "Great traction, feels secure on the board." }
    ],
    description: "The Nike Men's Sneaker offers a blend of style and performance. Featuring a breathable upper and cushioned midsole, these sneakers provide comfort and support for all-day wear. With their versatile design, they're perfect for both casual outings and workouts."
},

{
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "PUMA BLACK-OCE",
    prevPrice: "$140",
    newPrice: 150,
    company: "Puma",
    color: "green",
    category: "sneakers",
    inStock: 11,
    comments: [
        { name: "Daniel", star: 4, comment: "Comfortable and stylish, great for casual outings." }
    ],
    description: "The PUMA BLACK-OCE sneakers offer a sleek and stylish design for urban adventures. Featuring a lightweight construction and cushioned midsole, they provide all-day comfort. The breathable upper ensures ventilation, while the rubber outsole offers traction on various surfaces."
},

{
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    title: "Pacer Future Sneaker",
    prevPrice: "$140",
    newPrice: 150,
    company: "Puma",
    color: "red",
    seller: "FashionFootprints",
    category: "sneakers",
    inStock: 6,
    comments: [
        { name: "Penelope", star: 2, comment: "Unique print, adds a pop of personality to my outfit." },
        { name: "Mateo", star: 3, comment: "Very comfortable, love the attention to detail." }
    ],
    description: "The Pacer Future Sneaker by Puma is a versatile and stylish choice for everyday wear. Featuring a lightweight design and cushioned midsole, these sneakers offer comfort and support for all-day wear. The durable outsole provides traction on various surfaces."
},

{
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    title: "Unisex-Adult Super",
    prevPrice: "$140",
    newPrice: 150,
    company: "Puma",
    color: "black",
    category: "sneakers",
    inStock: 3,
    comments: [
        { name: "Emma", star: 5, comment: "Classic style, never goes out of fashion." }
    ],
    description: "The Unisex-Adult Super sneakers by Puma offer a sleek and modern design with a touch of retro style. Featuring a durable construction and cushioned midsole, they provide comfort and support for all-day wear. The versatile black color makes them easy to pair with any outfit."
},

{
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    title: "Pacer Future Doubleknit",
    prevPrice: "$140",
    newPrice: 150,
    company: "Puma",
    color: "black",
    seller: "ElegantEnsembles",
    category: "sneakers",
    inStock: 5,
    comments: [
        { name: "Hannah", star: 4, comment: "Classic and timeless design, perfect for formal occasions." },
        { name: "Luke", star: 4, comment: "Comfortable fit, great for long events like weddings." }
    ],
    description: "The Pacer Future Doubleknit sneakers by Puma offer a sleek and modern design for urban adventures. Featuring a lightweight construction and cushioned midsole, they provide all-day comfort. The breathable upper ensures ventilation, while the rubber outsole offers traction on various surfaces."
}
,
    
  
    {
        img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
        title: "Rainbow Chex Skate",
        prevPrice: "$140",
        newPrice: 100,
        company: "Vans",
        color: "red",
        category: "flats",
        inStock: "7",comments: [
            { name: "Ava",star: "3", comment: "Gorgeous heels, feel like a princess when I wear them." },
            { name: "Henry",star: "4", comment: "Very flattering and elegant, perfect for formal events." }
        ]
,        
        description: "The Rainbow Chex Skate shoes by Vans are perfect for skating enthusiasts. Featuring a durable canvas upper and cushioned insole, they offer comfort and support for all-day wear. The classic Vans waffle outsole provides traction and grip on the skateboard."
    },{
        img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
        title: "Roma Basic Sneaker",
        prevPrice: "$140",
        newPrice: 150,
        company: "Puma",
        color: "white",
        category: "sneakers",
        inStock: 8,
        comments: [
            { name: "Stella", star: 4, comment: "Elegant and sophisticated, exactly what I was looking for." },
            { name: "Eli", star: 4, comment: "Easy to wear and walk in, love the sleek design." }
        ],
        description: "The Roma Basic Sneaker by Puma offers a timeless style with modern comfort. Featuring a durable rubber outsole and cushioned midsole, these sneakers are perfect for everyday wear. With their classic design and versatile color, they complement any casual outfit effortlessly."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
        title: "Fusion Evo Golf Shoe",
        prevPrice: "$140",
        newPrice: 100,
        company: "Puma",
        color: "green",
        category: "sneakers",
        inStock: 9,
        comments: [
            { name: "Luna", star: 4, comment: "Absolutely stunning, adds sparkle to my bridal ensemble." },
            { name: "Gabriel", star: 5, comment: "Comfortable enough to dance the night away, love the glittery straps." }
        ],
        description: "The Fusion Evo Golf Shoe by Puma is designed for golfers who demand performance and style on the course. With a waterproof upper and responsive cushioning, these shoes provide comfort and support during every swing. The durable outsole offers traction on various terrains."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
        title: "Low-Top Trainers",
        prevPrice: "$140",
        newPrice: 100,
        company: "Vans",
        color: "white",
        category: "sandals",
        seller: "StylishSteps",
        inStock: 6,
        comments: [
            { name: "Oliver", star: 4, comment: "Incredible comfort, perfect for long walks." }
        ],
        description: "The Low-Top Trainers by Vans are a versatile choice for casual outings. Featuring a lightweight canvas upper and cushioned footbed, they provide comfort and style. The durable rubber outsole offers traction on various surfaces, making them ideal for everyday wear."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
        title: "Classic Bandana Sneakers",
        prevPrice: "$140",
        newPrice: 50,
        company: "Nike",
        color: "black",
        category: "sandals",
        inStock: 4,
        comments: [
            { name: "Sophia", star: 2, comment: "Love the vibrant colors, really stands out!" }
        ],
        description: "The Classic Bandana Sneakers by Nike offer a trendy and stylish option for casual wear. Featuring a durable canvas upper and cushioned footbed, they provide comfort and support for all-day wear. The classic bandana print adds a touch of flair to your outfit."
    },
    
    {
        img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
        title: "Chunky High Heel",
        prevPrice: "$140",
        newPrice: 50,
        company: "Vans",
        color: "black",
        category: "heels",
        inStock: 11,
        comments: [
            { name: "Madison", star: 3, comment: "Chic and comfortable, perfect for my wedding day." },
            { name: "Ethan", comment: "Great fit and support, love the sleek design." }
        ],
        description: "The Chunky High Heel by Vans offers a bold and stylish look for any occasion. Featuring a chunky heel and platform sole, these heels provide stability and comfort. The versatile black color makes them easy to pair with any outfit, from casual to formal."
    }
    
    
  ];
  
  export default data;
  