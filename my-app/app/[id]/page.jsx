


import products from "../../data/product.json";
import ProductCard from '../../components/PRODUCTCARD';



export default function productDetailPage({params}){

  const { id } = params;
  const product = products.find(i => i.id === Number(id));
  if (!product) return <div>Product not found</div>;
    return(
        <>
     <ProductCard product={product} />
     
        </>
    )
}