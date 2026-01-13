import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields (Name, Email, and Message)');
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ox40k5g';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_yc04e2o';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'XRE8C4ecURVxrkrkH';

      // Template parameters that will be sent in the email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject || 'General Enquiry',
        message: formData.message
      };

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      alert('Thank you for your enquiry! We\'ll get back to you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly at kaysoncycles@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Premium Page Header */}
      <section className="premium-page-header">
        <div className="container">
          <h1>Send Enquiry</h1>
          <p>Get in Touch with Our Team for Product Information</p>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="premium-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8" style={{ margin: '0 auto' }}>
              <div className="premium-card" style={{ padding: '30px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px' }}>
                    We'd Love to Hear From You
                  </h2>
                  <p style={{ fontSize: '1.1rem', color: 'var(--slate-light)' }}>
                    Fill out the form below and our team will get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6" style={{ marginBottom: '30px' }}>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '10px', 
                        fontWeight: '600',
                        color: 'var(--charcoal)',
                        fontSize: '0.95rem'
                      }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          border: '2px solid var(--off-white)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--off-white)'}
                      />
                    </div>

                    <div className="col-md-6" style={{ marginBottom: '30px' }}>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '10px', 
                        fontWeight: '600',
                        color: 'var(--charcoal)',
                        fontSize: '0.95rem'
                      }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          border: '2px solid var(--off-white)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--off-white)'}
                      />
                    </div>

                    <div className="col-md-6" style={{ marginBottom: '30px' }}>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '10px', 
                        fontWeight: '600',
                        color: 'var(--charcoal)',
                        fontSize: '0.95rem'
                      }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter your phone"
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          border: '2px solid var(--off-white)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--off-white)'}
                      />
                    </div>

                    <div className="col-md-6" style={{ marginBottom: '30px' }}>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '10px', 
                        fontWeight: '600',
                        color: 'var(--charcoal)',
                        fontSize: '0.95rem'
                      }}>
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          border: '2px solid var(--off-white)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--off-white)'}
                      />
                    </div>

                    <div className="col-md-12" style={{ marginBottom: '40px' }}>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '10px', 
                        fontWeight: '600',
                        color: 'var(--charcoal)',
                        fontSize: '0.95rem'
                      }}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder="Tell us more about your requirements..."
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          border: '2px solid var(--off-white)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none',
                          resize: 'vertical',
                          fontFamily: 'inherit'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--off-white)'}
                      />
                    </div>

                    <div className="col-md-12" style={{ textAlign: 'center' }}>
                      <button 
                        type="submit" 
                        className="btn-premium-primary" 
                        style={{ padding: '18px 60px', fontSize: '1.1rem' }}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                          </>
                        ) : (
                          <>
                            <i className="fa-solid fa-paper-plane"></i> Send Enquiry
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
