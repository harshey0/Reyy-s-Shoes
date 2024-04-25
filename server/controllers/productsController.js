import multer from 'multer';
import Product from "../models/productModel.js"
import path from "path"
import { fileURLToPath } from 'url'; 

export default async function products(req,res){
    
    try
    {
        res.json(await Product.find());
    }
    catch(error)
    {
        res.json("error fetching products ");
        console.error("error fetching products :", error);
    }}

    export async function productByid(req,res){

        const {id}=req.body;
    
        try
        {
            res.json(await Product.findOne({_id:id}));
        }
        catch(error)
        {
            res.json("error fetching products ");
            console.error("error fetching products :", error);
        }}

    export async function productdel(req,res){

        const {id}=req.params;
    
        try
        {
            await Product.findOneAndDelete({ _id: id });
            res.send("Product deleted successfully");


        }
        catch(error)
        {
            console.log("error deleting product :", error);
        }}






        const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null,  path.join(__dirname, '../uploads'));
            },
            filename: function (req, file, cb) {
              const ext = path.extname(file.originalname);
              cb(null, Date.now() + ext);
            },
          });
          
          const upload = multer({ storage });
          
        
          export async function addproduct(req, res, next) {
            try {
              upload.single('newImg')(req, res, async (err) => {
                if (err) {
                  console.error('Error uploading file:', err);
                  return res.status(400).send('Error uploading file');
                }
                if (!req.file) {
                  return res.status(400).send('No file uploaded');
                }
          
                const { title, prevPrice, newPrice, company, color, category, seller, inStock, description } = req.body;

                const prevprice = "$" + prevPrice;
                const img = `${process.env.URLS}/uploads/` + req.file.filename;
          
                const newProduct = new Product({
                  img,
                  title,
                  prevPrice: prevprice,
                  newPrice,
                  company,
                  color,
                  category,
                  seller,
                  inStock,
                  description
                });
          
                await newProduct.save();
                res.send("Product added Successfully");
              });
            } catch (error) {
              console.log("error adding product :", error);
              next(error);
            }
          }
          
          export async function editproduct(req, res, next) {
            const { id } = req.params;
            try {
                
                if (req.file) {

                    upload.single('newImg')(req, res, async (err) => {
                        if (err) {
                          console.error('Error uploading file:', err);
                          return res.status(400).send('Error uploading file');
                        }
                        const { title, prevPrice, newPrice, company, color, category, seller, inStock, description } = req.body;

                        const prevprice = "$" + prevPrice;
                        const img = `${process.env.URLS}/uploads/` + req.file.filename;
                    await Product.findByIdAndUpdate(id, {
                        img,
                        title,
                        prevPrice: prevprice,
                        newPrice,
                        company,
                        color,
                        category,
                        seller,
                        inStock,
                        description
                    });
                }) }


                else {
                    const { title, prevPrice, newPrice, company, color, category, seller, inStock, description } = req.body;
                    const prevprice = "$" + prevPrice;
                    await Product.findByIdAndUpdate(id, {
                        title,
                        prevPrice: prevprice,
                        newPrice,
                        company,
                        color,
                        category,
                        seller,
                        inStock,
                        description
                    });
                }
                
                res.status(200).send("Product updated successfully");
            } catch (error) {
                console.error("Error updating product:", error);
                res.status(500).send("Internal Server Error");
                next(error);
            }
        }
        