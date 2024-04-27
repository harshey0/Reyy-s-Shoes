// import Product from '../models/productModel.js';
// import axios from 'axios';
// import fs from 'fs';
// import path from 'path';
// import dotenv from "dotenv";

// dotenv.config({ path: "../.env" });
 
// async function downloadAndSaveImage(url) {
//   try {
//     const filename = url.substring(url.lastIndexOf('/') + 1);
    
//     const response = await axios.get(url, { responseType: 'stream' });
 
//     const filePath = path.join(__dirname, '../uploads', filename); 
//     const fileStream = fs.createWriteStream(filePath);
    
//     response.data.pipe(fileStream);

//     return new Promise((resolve, reject) => {
//       fileStream.on('finish', resolve);
//       fileStream.on('error', reject);
//     });
//   } catch (error) {
//     console.error('Error downloading image:', error);
//     throw error; 
//   }
// }

// export default async function downloadProductImages() {
//   try {
//     const product = await Product.find()
//     for (const item of product) {
//       if (item.img.includes('onrender')) {
//         await downloadAndSaveImage(item.img);
//         console.log(`Downloaded and saved image: ${item.img}`);
//       }
//     }

//     console.log('All images containing "onrender" downloaded and saved successfully.');
//   } catch (error) {
//     console.error('Error downloading product images:', error);
//   }
// }

