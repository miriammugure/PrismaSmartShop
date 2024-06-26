import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const products = await prisma.products.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json("There was an error on the server side");
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await prisma.products.findFirst({
      where: { id },
      select: {
        id: true,
        productthumbnail: true,
        producttitle: true,
        productcost: true,
        productdescription: true,
        onoffer: true
      }
    });
    if (!product) {
        return res.status(404).json("No product found" );

    } res.status(200).json( product);
    
  } catch (error) {
    res.status(500).json("There was an error on the server side");
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await prisma.products.delete({
      where: { id },
      select: {
        id: true,
        productthumbnail: true,
        producttitle: true,
        productcost: true,
        productdescription: true,
        onoffer: true
      }
    });
    res.status(200).json( { message:"Product deleted successfully",product});
  } catch (error) {
    res.status(500).json("There was an error on the server side");
  }
});

router.post("/", async (req, res) => {
  const {
    productthumbnail,
    producttitle,
    productcost,
    productdescription,
    onoffer
  } = req.body;
  if (!productthumbnail || !producttitle || !productcost || !productdescription || typeof onoffer === 'undefined') {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const newProduct = await prisma.products.create({
      data: {
        productthumbnail,
        producttitle,
        productcost,
        productdescription,
        onoffer
      },
      select: {
        id: true,
        productthumbnail: true,
        producttitle: true,
        productcost: true,
        productdescription: true,
        onoffer: true
      }
    });
    res.status(200).json({message:"Product created successfully",newProduct});
  } catch (error) {
    res.status(500).json("There was an error on the server side");
  }
});

router.patch("/:id", async (req, res) => {

    const id = req.params.id;
    const {
      productthumbnail,
      producttitle,
      productcost,
      productdescription,
      onoffer
    } = req.body;
 
  
    try {
      let updateProduct;
      if(productthumbnail){(
        updateProduct=await prisma.products.update({
          where:{id},
          data:{productthumbnail:productthumbnail}
        })
      )
      }
      if(producttitle){(
        updateProduct=await prisma.products.update({
          where:{id},
          data:{producttitle:producttitle}
        })
      )
      }
      if(productcost){(
        updateProduct=await prisma.products.update({
          where:{id},
          data:{productcost:productcost}
        })
      )
      }
      if(productdescription){(
        updateProduct=await prisma.products.update({
          where:{id},
          data:{productdescription:productdescription}
        })
      )
      }

      if(onoffer){(
        updateProduct=await prisma.products.update({
          where:{id},
          data:{onoffer:onoffer}
        })
      )
      }
   
      res.status(200).json({message:"Product updated successfully",updateProduct});
    } catch (error) {
      res.status(500).json("There was an error on the server side");
    }
  });
  
export default router;
