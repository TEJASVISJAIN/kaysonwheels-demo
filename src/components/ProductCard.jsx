import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card-content">
        <span className="product-category" style={{ 
          display: 'inline-block',
          fontSize: '0.75rem',
          color: '#d32f2f',
          fontWeight: '600',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
          letterSpacing: '0.5px'
        }}>
          {product.category}
        </span>
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-description">{product.shortDescription}</p>
        <div className="product-card-footer">
          <Link 
            to={`/product/${product.id}`} 
            className="product-card-link"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
