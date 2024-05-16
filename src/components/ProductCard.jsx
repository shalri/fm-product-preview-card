import PropTypes from "prop-types";
import cartIcon from "../images/icon-cart.svg";
import { products } from "./products";

const ProductCard = ({ productName }) => {
  const product = products.find(
    (product) => product.name.toLowerCase() === productName.toLowerCase(),
  );

  return (
    <article className="grid-rows mx-4 grid overflow-hidden rounded-lg bg-ppc-white sm:max-w-[600px] sm:grid-cols-2">
      <picture>
        <source srcSet={product.imgLarge} media="(min-width: 40em)" />
        <img src={product.imgMobile} alt={product.name} className="w-full" />
      </picture>
      <section className="p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.5em] text-ppc-dark-grayish-blue">
          {product.category}
        </p>
        <h1 className="mt-2 font-fraunces text-3xl leading-[1.05] text-ppc-very-dark-blue sm:mt-4">
          {product.name}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-ppc-dark-grayish-blue sm:mt-5">
          {product.desc}
        </p>
        <h2 className="mt-5 flex font-fraunces text-3xl text-ppc-dark-cyan sm:mt-7">
          {" "}
          ${product.price}
          <del className="ml-5 inline-block font-montserrat text-body text-ppc-dark-grayish-blue">
            ${product.originalPrice}
          </del>
        </h2>
        <button className="mt-4 flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-ppc-dark-cyan transition-all duration-200 hover:bg-ppc-very-dark-cyan sm:mt-6">
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
