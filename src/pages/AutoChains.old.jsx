import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../data/products';

const AutoChains = () => {
  const autoChainProducts = getProductsByCategory('Auto Chains');

  return (
    <>
      {/* Page Header */}
      <section className="page-header-modern">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>
                Auto Chains
                <span>High-Quality Motorcycle Chains</span>
              </h1>
              <nav>
                <ol className="breadcrumb-modern" style={{ listStyle: 'none', padding: 0 }}>
                  <li><Link to="/">Home</Link></li>
                  <li style={{ color: '#fff' }}>Auto Chains</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-modern">
        <div className="container">
          <div className="row mb-xlg">
            <div className="col-md-10 col-md-offset-1 text-center">
              <h2 className="modern-heading" style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>
                Premium Auto Chains
              </h2>
              <p className="modern-text" style={{ fontSize: '1.1rem' }}>
                We manufacture high-quality auto chains including 428 and 428H variants. Our chains 
                are designed for durability and performance, meeting both national and international 
                standards. Each chain undergoes rigorous quality control to ensure optimal power 
                transmission and longevity.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="row modern-grid modern-grid-3" style={{ display: 'grid', marginBottom: '3rem' }}>
            {autoChainProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="row mt-modern">
            <div className="col-md-12">
              <div className="modern-card">
                <h3 className="modern-heading">Why Choose Our Auto Chains?</h3>
                <div className="row" style={{ marginTop: '2rem' }}>
                  <div className="col-md-6">
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0,
                      display: 'grid',
                      gap: '1rem'
                    }}>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <span style={{ color: '#d32f2f', fontSize: '1.25rem', fontWeight: 'bold', flexShrink: 0 }}>✓</span>
                        <span className="modern-text">
                          <strong>Superior Materials:</strong> Made from high-carbon steel for maximum strength
                        </span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <span style={{ color: '#d32f2f', fontSize: '1.25rem', fontWeight: 'bold', flexShrink: 0 }}>✓</span>
                        <span className="modern-text">
                          <strong>Heat Treated:</strong> Enhanced durability through professional heat treatment
                        </span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <span style={{ color: '#d32f2f', fontSize: '1.25rem', fontWeight: 'bold', flexShrink: 0 }}>✓</span>
                        <span className="modern-text">
                          <strong>Precision Manufacturing:</strong> CNC machined for perfect tolerances
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0,
                      display: 'grid',
                      gap: '1rem'
                    }}>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <span style={{ color: '#d32f2f', fontSize: '1.25rem', fontWeight: 'bold', flexShrink: 0 }}>✓</span>
                        <span className="modern-text">
                          <strong>International Standards:</strong> Compliant with IS 10615 / ISO 606
                        </span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <span style={{ color: '#d32f2f', fontSize: '1.25rem', fontWeight: 'bold', flexShrink: 0 }}>✓</span>
                        <span className="modern-text">
                          <strong>Corrosion Resistant:</strong> Special coating for extended service life
                        </span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <span style={{ color: '#d32f2f', fontSize: '1.25rem', fontWeight: 'bold', flexShrink: 0 }}>✓</span>
                        <span className="modern-text">
                          <strong>Quality Tested:</strong> Rigorous quality control at every stage
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="row mt-modern">
            <div className="col-md-12 text-center">
              <h3 className="modern-heading" style={{ marginBottom: '1.5rem' }}>
                Need a Custom Solution?
              </h3>
              <p className="modern-text" style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
                Contact us for custom specifications and bulk orders
              </p>
              <Link to="/enquiry" className="btn-primary-modern" style={{ marginRight: '1rem' }}>
                Request Quote
              </Link>
              <Link to="/contact" className="btn-outline-modern">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AutoChains;
