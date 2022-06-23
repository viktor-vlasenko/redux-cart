import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "001", price: 4.9, title: "Book", description: "To read occasionally" },
  { id: "002", price: 8.55, title: "T-shirt", description: "To wear maybe" },
  { id: "003", price: 1.39, title: "Soda", description: "To drink... duh" },
];

const Products = (props) => {
  const itemList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      price={product.price}
      title={product.title}
      description={product.description}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{itemList}</ul>
    </section>
  );
};

export default Products;
