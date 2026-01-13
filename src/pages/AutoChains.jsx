import { Link } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';

const AutoChains = () => {
  const autoChains = getProductsByCategory('Auto Chains');

  return (
    <div>
      {/* Premium Page Header */}
      <section className="premium-page-header">
        <div className="container">
          <h1>Auto Chains</h1>
          <p>High-Quality Motorcycle Chains for Superior Performance</p>
        </div>
      </section>

      {/* Premium Content Section */}
      <section className="premium-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 70px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '25px' }}>
              Premium Auto Chains
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: 'var(--slate-light)' }}>
              We manufacture high-quality auto chains including 428 and 428H variants. Our chains are designed for durability and performance, 
              meeting both national and international standards. Each chain undergoes rigorous quality control to ensure optimal power 
              transmission and longevity.
            </p>
          </div>

          <div className="row">
            {autoChains.map((product) => (
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
                        View Details <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                      <Link to="/enquiry" className="btn-premium-outline">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section style={{ background: 'var(--off-white)', padding: '50px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px' }}>
              Why Choose Our Auto Chains
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--slate-light)', maxWidth: '700px', margin: '0 auto' }}>
              Engineered for excellence with premium materials and precision manufacturing
            </p>
          </div>
          
          <div className="row">
            <div className="col-md-4" style={{ marginBottom: '30px' }}>
              <div className="premium-feature-box">
                <div className="premium-feature-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h3 className="premium-feature-title">Superior Durability</h3>
                <p className="premium-feature-description">
                  Manufactured with premium grade steel for exceptional strength and longevity in demanding conditions.
                </p>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: '30px' }}>
              <div className="premium-feature-box">
                <div className="premium-feature-icon">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <h3 className="premium-feature-title">Quality Certified</h3>
                <p className="premium-feature-description">
                  Meeting international standards with rigorous testing to ensure consistent performance and reliability.
                </p>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: '30px' }}>
              <div className="premium-feature-box">
                <div className="premium-feature-icon">
                  <i className="fa-solid fa-gears"></i>
                </div>
                <h3 className="premium-feature-title">Precision Engineering</h3>
                <p className="premium-feature-description">
                  Advanced manufacturing processes ensure perfect fit and optimal power transmission efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoChains;
