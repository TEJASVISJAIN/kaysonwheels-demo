import { Link } from 'react-router-dom';

const QualityPolicy = () => {
  return (
    <div>
      {/* Premium Page Header */}
      <section className="premium-page-header">
        <div className="container">
          <h1>Quality Policy</h1>
          <p>Commitment to Excellence in Every Product</p>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="premium-section">
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col-md-8" style={{ paddingRight: '30px' }}>
              <div className="premium-section-label">QUALITY ASSURANCE</div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '30px', lineHeight: '1.2' }}>
                Our Quality Commitment
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--slate-light)', marginBottom: '25px' }}>
                We are acknowledged in the market for offering most high quality products that meet 
                the requirements of our domestic and international clients. Being quality-conscious firm, 
                we deliver flawless range of products to our discerning clients.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--slate-light)', marginBottom: '25px' }}>
                We are supported by technically updated in house quality testing unit that is embedded 
                with advanced tools and equipment. Our quality controllers test the entire product on 
                varied parameters thereby rendering utmost client satisfaction.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--slate-light)', marginBottom: '35px' }}>
                We are reckoned in the industry for delivering quality-approved product range at most 
                affordable rates.
              </p>
            </div>
            <div className="col-md-4">
              <div className="premium-card" style={{ 
                padding: '35px 25px', 
                textAlign: 'center',
                background: 'linear-gradient(145deg, var(--off-white), #ffffff)'
              }}>
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  background: 'linear-gradient(135deg, var(--primary-red), #8B0000)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 30px',
                  boxShadow: 'var(--shadow-strong)'
                }}>
                  <i className="fa-solid fa-medal" style={{ fontSize: '4rem', color: 'white' }}></i>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px' }}>ISO Certified</h3>
                <p style={{ color: 'var(--slate-light)', fontSize: '1rem', lineHeight: '1.7' }}>
                  Meeting international quality standards and compliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section style={{ background: 'var(--off-white)', padding: '50px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <div className="premium-section-label" style={{ justifyContent: 'center' }}>
              <span>WHY CHOOSE US</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px' }}>
              Our Competitive Advantages
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--slate-light)', maxWidth: '700px', margin: '0 auto' }}>
              We have established a reputed name and an envious position in the market
            </p>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="premium-card" style={{ padding: '35px', marginBottom: '30px' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: 'var(--slate-light)', marginBottom: '0' }}>
                  We have established a reputed name and an envious position in the market due to our 
                  quality products & service. It is due to the hard labor of our efficient workforce that 
                  we have been able to cater to the varied needs of our clients that are spread not only 
                  in India but across the globe. We focus on quality, reliability, and improvisation of 
                  our business in order to sustain our position in the industry.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4" style={{ marginBottom: '30px' }}>
              <div className="premium-feature-box">
                <div className="premium-feature-icon">
                  <i className="fa-solid fa-clipboard-check"></i>
                </div>
                <h3 className="premium-feature-title">Quality Testing</h3>
                <p className="premium-feature-description">
                  Advanced in-house testing unit with modern tools and equipment for comprehensive product evaluation.
                </p>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: '30px' }}>
              <div className="premium-feature-box">
                <div className="premium-feature-icon">
                  <i className="fa-solid fa-users"></i>
                </div>
                <h3 className="premium-feature-title">Expert Workforce</h3>
                <p className="premium-feature-description">
                  Skilled and efficient team dedicated to meeting the varied needs of clients across the globe.
                </p>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: '30px' }}>
              <div className="premium-feature-box">
                <div className="premium-feature-icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3 className="premium-feature-title">Continuous Improvement</h3>
                <p className="premium-feature-description">
                  Focus on quality, reliability, and improvisation to sustain our position in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="premium-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <div className="premium-section-label" style={{ justifyContent: 'center' }}>
              <span>OUR PROCESS</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px' }}>
              Quality Control Process
            </h2>
          </div>

          <div className="row">
            <div className="col-md-3" style={{ marginBottom: '30px' }}>
              <div style={{ textAlign: 'center', padding: '40px 30px', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-subtle)', height: '100%' }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  background: 'var(--primary-red)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'white'
                }}>1</div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '15px' }}>Material Selection</h4>
                <p style={{ color: 'var(--slate-light)', lineHeight: '1.7' }}>
                  Premium grade raw materials sourced from certified suppliers
                </p>
              </div>
            </div>
            <div className="col-md-3" style={{ marginBottom: '30px' }}>
              <div style={{ textAlign: 'center', padding: '40px 30px', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-subtle)', height: '100%' }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  background: 'var(--primary-red)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'white'
                }}>2</div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '15px' }}>Manufacturing</h4>
                <p style={{ color: 'var(--slate-light)', lineHeight: '1.7' }}>
                  Precision manufacturing with modern CNC machinery
                </p>
              </div>
            </div>
            <div className="col-md-3" style={{ marginBottom: '30px' }}>
              <div style={{ textAlign: 'center', padding: '40px 30px', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-subtle)', height: '100%' }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  background: 'var(--primary-red)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'white'
                }}>3</div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '15px' }}>Quality Testing</h4>
                <p style={{ color: 'var(--slate-light)', lineHeight: '1.7' }}>
                  Rigorous testing on multiple parameters
                </p>
              </div>
            </div>
            <div className="col-md-3" style={{ marginBottom: '30px' }}>
              <div style={{ textAlign: 'center', padding: '40px 30px', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-subtle)', height: '100%' }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  background: 'var(--primary-red)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'white'
                }}>4</div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '15px' }}>Final Approval</h4>
                <p style={{ color: 'var(--slate-light)', lineHeight: '1.7' }}>
                  Quality-approved products ready for dispatch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityPolicy;
