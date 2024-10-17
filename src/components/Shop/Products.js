import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1',
     price: 6,
      title: 'My first book',
       description: 'The first book i ever wrote '
       },
  { id: 'p2',
     price: 60,
      title: 'My second book',
       description: 'The second book i ever wrote '
       },
  { id: 'p3',
     price: 16,
      title: 'My third book',
       description: 'The third book i ever wrote '
       },
  { id: 'p4',
     price: 62,
      title: 'My fourth book',
       description: 'The fourth book i ever wrote '
       },
  { id: 'p5',
     price: 60,
      title: 'My fifth book',
       description: 'The fifth book i ever wrote '
       },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {DUMMY_PRODUCTS.map((product)=>
        <ProductItem
        key={product.id}
        id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      )}
       
       
      </ul>
    </section>
  );
};

export default Products;
