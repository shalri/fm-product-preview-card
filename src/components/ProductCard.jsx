import PropTypes from "prop-types";
import cartIcon from "../images/icon-cart.svg";
import { products } from "./products";

const ProductCard = ({ productName }) => {
  const product = products.find(
    (product) => product.name.toLowerCase() === productName.toLowerCase(),
  );

  return (
    <article className="grid-rows mx-4 grid overflow-hidden rounded-lg bg-ppc-white">
      {/* TODO: Use picture element */}
      <img src={product.imgMobile} alt="" className="contain-content" />
      <section className="p-6">
        <p className="text-xs uppercase tracking-[0.5em] text-ppc-dark-grayish-blue">
          {product.category}
        </p>
        <h1 className="mt-2 font-fraunces text-3xl leading-[1.05] text-ppc-very-dark-blue">
          {product.name}
        </h1>
        <p className="mt-4 text-body leading-relaxed text-ppc-dark-grayish-blue">
          {product.desc}
        </p>
        <h2 className="mt-5 flex font-fraunces text-3xl text-ppc-dark-cyan">
          {" "}
          ${product.price}
          <del className="ml-5 inline-block font-montserrat text-body text-ppc-dark-grayish-blue">
            ${product.originalPrice}
          </del>
        </h2>
        <button className="mt-4 block flex w-full items-center justify-center gap-3 rounded-lg bg-ppc-dark-cyan py-3">
          {/* <img src="../images/icon-cart.svg" alt="cart" /> */}
          <img src={cartIcon} alt="cart" />
          <span className="text-sm font-bold text-ppc-white">Add to Cart</span>
        </button>
      </section>
    </article>
  );
};

ProductCard.propTypes = {
  productName: PropTypes.string,
};

export default ProductCard;
