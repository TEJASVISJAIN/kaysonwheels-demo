import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div>
        <section className="premium-page-header">
          <div className="container">
            <h1>Product Not Found</h1>
            <p>The product you're looking for doesn't exist</p>
          </div>
        </section>
        <section className="premium-section" style={{ textAlign: 'center' }}>
          <div className="container">
            <Link to="/" className="btn-premium-primary">
              <i className="fa-solid fa-home"></i> Go to Home
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Premium Page Header */}
      <section className="premium-page-header">
        <div className="container">
          <div style={{ marginBottom: '15px' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.95rem' }}>
              Home
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.5)', margin: '0 10px' }}>/</span>
            <Link 
              to={product.category === 'Auto Chains' ? '/auto-chains' : '/motorcycle-sprockets'}
              style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.95rem' }}
            >
              {product.category}
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.5)', margin: '0 10px' }}>/</span>
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.95rem' }}>{product.name}</span>
          </div>
          <h1>{product.name}</h1>
          <p>{product.category}</p>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="premium-section">
        <div className="container">
          <div className="row">
            {/* Product Images */}
            <div className="col-md-5" style={{ marginBottom: '30px' }}>
              <div className="premium-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ 
                  width: '100%', 
                  height: '350px',
                  background: '#f8f8f8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={product.images[selectedImage]} 
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '15px'
                    }}
                  />
                </div>
                {product.images.length > 1 && (
                  <div style={{ 
                    display: 'flex', 
                    gap: '10px', 
                    padding: '15px',
                    borderTop: '1px solid var(--off-white)',
                    flexWrap: 'wrap'
                  }}>
                    {product.images.map((image, index) => (
                      <div 
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        style={{
                          width: '60px',
                          height: '60px',
                          background: '#f8f8f8',
                          borderRadius: 'var(--radius-md)',
                          border: selectedImage === index ? '2px solid var(--primary-red)' : '2px solid var(--off-white)',
                          cursor: 'pointer',
                          overflow: 'hidden',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <img 
                          src={image} 
                          alt={`${product.name} ${index + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            padding: '5px'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product Information */}
            <div className="col-md-7">
              <div style={{ marginBottom: '20px' }}>
                <span style={{ 
                  display: 'inline-block',
                  padding: '6px 16px',
                  background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))',
                  color: 'white',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  marginBottom: '15px'
                }}>
                  {product.category}
                </span>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '15px', lineHeight: '1.2' }}>
                  {product.name}
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--slate-light)', marginBottom: '25px' }}>
                  {product.description}
                </p>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div style={{ marginBottom: '25px' }}>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: '700', 
                    marginBottom: '15px',
                    color: 'var(--charcoal)'
                  }}>
                    Key Features
                  </h3>
                  <div style={{ display: 'grid', gap: '10px' }}>
                    {product.features.map((feature, index) => (
                      <div 
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px',
                          background: 'var(--off-white)',
                          borderRadius: 'var(--radius-md)',
                          borderLeft: '3px solid var(--primary-red)'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))',
                          display: 'flex',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}>
                          <i className="fa-solid fa-check" style={{ color: 'white', fontSize: '0.65rem' }}></i>
                        </div>
                        <span style={{ 
                          color: 'var(--slate-dark)', 
                          fontSize: '0.95rem',
                          lineHeight: '1.5'
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              <div className="premium-card" style={{ marginBottom: '25px', padding: '20px' }}>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: '700', 
                  marginBottom: '15px',
                  color: 'var(--charcoal)'
                }}>
                  Technical Specifications
                </h3>
                <div>
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div 
                      key={index}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px 0',
                        borderBottom: index !== Object.entries(product.specifications).length - 1 ? '1px solid var(--off-white)' : 'none'
                      }}
                    >
                      <span style={{ 
                        fontWeight: '600',
                        color: 'var(--charcoal)',
                        fontSize: '0.95rem'
                      }}>
                        {key}
                      </span>
                      <span style={{ 
                        color: 'var(--slate-light)',
                        fontSize: '0.95rem'
                      }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <Link to="/enquiry" className="btn-premium-primary" style={{ flex: '1', minWidth: '200px' }}>
                  <i className="fa-solid fa-paper-plane"></i> Request Quote
                </Link>
                <button 
                  onClick={() => navigate(-1)}
                  className="btn-premium-outline"
                  style={{ flex: '1', minWidth: '200px' }}
                >
                  <i className="fa-solid fa-arrow-left"></i> Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section - Compact */}
      <section style={{ background: 'var(--off-white)', padding: '30px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px' }}>
              Quality Assurance
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--slate-light)', maxWidth: '700px', margin: '0 auto 20px' }}>
              All products manufactured in accordance with national and international standards with rigorous quality checks.
            </p>
          </div>

          <div className="row">
            <div className="col-md-4" style={{ marginBottom: '20px' }}>
              <div style={{ textAlign: 'center', padding: '15px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px'
                }}>
                  <i className="fa-solid fa-certificate" style={{ fontSize: '1.3rem', color: 'white' }}></i>
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>ISO Certified</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-light)', margin: 0 }}>
                  ISO 9001:2015 quality standards
                </p>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: '20px' }}>
              <div style={{ textAlign: 'center', padding: '15px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px'
                }}>
                  <i className="fa-solid fa-microscope" style={{ fontSize: '1.3rem', color: 'white' }}></i>
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>Quality Testing</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-light)', margin: 0 }}>
                  100% inspection & testing
                </p>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: '20px' }}>
              <div style={{ textAlign: 'center', padding: '15px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px'
                }}>
                  <i className="fa-solid fa-award" style={{ fontSize: '1.3rem', color: 'white' }}></i>
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>Premium Materials</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-light)', margin: 0 }}>
                  High-grade trusted materials
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
