import { Link } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';

const MotorcycleSprockets = () => {
  const sprockets = getProductsByCategory('Motorcycle Sprocket');

  return (
    <div>
      <section className="premium-page-header">
        <div className="container">
          <h1>Motorcycle Sprockets</h1>
          <p>Precision Engineered for Performance</p>
        </div>
      </section>

      <section className="premium-section">
        <div className="container">
          <h2 className="premium-section-title">Premium Motorcycle Sprockets</h2>
          <p className="premium-section-subtitle">
            Our motorcycle sprockets are precision-engineered components designed for optimal power transfer and reliability.
          </p>

          <div className="row" style={{ marginTop: '60px' }}>
            {sprockets.map((product) => (
              <div key={product.id} className="col-md-6" style={{ marginBottom: '40px' }}>
                <div className="product-card-premium">
                  <div className="product-card-premium-image-container">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="product-card-premium-image"
                    />
                  </div>
                  <div className="product-card-premium-body">
                    <span className="product-card-premium-category">{product.category}</span>
                    <h3 className="product-card-premium-title">{product.name}</h3>
                    <p className="product-card-premium-description">{product.description}</p>
                    <div className="product-card-premium-footer">
                      <Link to={`/product/${product.id}`} className="btn-premium-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MotorcycleSprockets;
