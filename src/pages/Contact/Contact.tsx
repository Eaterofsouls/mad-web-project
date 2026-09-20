import { useState } from 'react';
import './Contact.css';

interface ContactFormData {
  name: string;
  company: string;
  whatsapp: string;
  problem: string;
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    whatsapp: '',
    problem: '',
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const errors = {
    name: formData.name.length < 2 ? "Please enter your name." : null,
    company: formData.company.length < 2 ? "Please enter your company name." : null,
    whatsapp: formData.whatsapp.length < 6 ? "Please enter a valid WhatsApp number." : null,
    problem: formData.problem.length < 20 ? "Describe the operational challenge in at least 20 characters." : null,
  };

  const isValid = !errors.name && !errors.company && !errors.whatsapp && !errors.problem;

  const submitToDatabase = async () => {
    const response = await fetch('/api/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        company: formData.company,
        whatsapp: formData.whatsapp,
        problem: formData.problem
      })
    });

    if (!response.ok) {
      throw new Error('Server returned an error');
    }
    
    return await response.json();
  };

  const handleSubmit = async () => {
    if (!isValid) return;

    setSubmitState('submitting');

    try {
      const result = await submitToDatabase();
      
      if (result.success) {
        setSubmitState('success');
      } else {
        setSubmitState('error');
      }
    } catch (error) {
      console.error('[ASSESSMENT REQUEST ERROR]', error);
      setSubmitState('error');
    }
  };

  return (
    <div className="contact-page">

      <div className="contact-container">
        <div className="contact-layout">
          {/* Left Column */}
          <div className="contact-left">
            <h1 className="contact-headline">BEGIN ASSESSMENT</h1>
            <p className="contact-sub">
              We will review your operation and identify the highest-impact AI systems applicable to your stack. No generics. No decks. A specific diagnosis.
            </p>
            
            <div className="contact-next-steps">
              <div className="next-step-item">
                <span className="step-number">01</span>
                <p className="step-desc">We review your operation profile within 48 hours.</p>
              </div>
              <div className="next-step-item">
                <span className="step-number">02</span>
                <p className="step-desc">We map which of the 84 systems are directly applicable.</p>
              </div>
              <div className="next-step-item">
                <span className="step-number">03</span>
                <p className="step-desc">We present a prioritized implementation roadmap. Specific. Costed. Actionable.</p>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="contact-right">
            {submitState === 'success' ? (
              <div className="contact-success" aria-live="assertive" role="status">
                <div className="success-icon">[ ✓ ]</div>
                <p className="success-text">Assessment request received.</p>
                <p className="success-sub">We will contact you within 48 hours with a specific operational review.</p>
                <a href="/explorer" className="success-link">← RETURN TO SYSTEM MAP</a>
              </div>
            ) : (
              <div className="contact-form-area" role="main" aria-label="Assessment request form">
                {submitState === 'error' && (
                  <div className="contact-error" aria-live="assertive" role="alert">
                    SYSTEM UNAVAILABLE. Please try again.
                  </div>
                )}

                <div className="field-group">
                  <label className="field-label" htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="field-input"
                    placeholder="Full name"
                  />
                  {touched.name && errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="field-group">
                  <label className="field-label" htmlFor="contact-company">Company Name</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="field-input"
                    placeholder="Company or firm name"
                  />
                  {touched.company && errors.company && <span className="field-error">{errors.company}</span>}
                </div>

                <div className="field-group">
                  <label className="field-label" htmlFor="contact-whatsapp">WhatsApp Number</label>
                  <input
                    id="contact-whatsapp"
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="field-input"
                    placeholder="+1 234 567 8900"
                  />
                  {touched.whatsapp && errors.whatsapp && <span className="field-error">{errors.whatsapp}</span>}
                </div>

                <div className="field-group">
                  <label className="field-label" htmlFor="contact-problem">Problem Statement</label>
                  <textarea
                    id="contact-problem"
                    name="problem"
                    value={formData.problem}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="field-input field-textarea"
                    placeholder="Describe the operational challenge in at least 20 characters..."
                    rows={4}
                  />
                  {touched.problem && errors.problem && <span className="field-error">{errors.problem}</span>}
                </div>

                <div className="contact-actions" style={{ display: 'flex', gap: '16px', marginTop: '8px', flexWrap: 'wrap' }}>
                  <button
                    className={`contact-submit-btn${submitState === 'submitting' ? ' pulse' : ''}`}
                    id="contact-submit"
                    onClick={handleSubmit}
                    disabled={!isValid || submitState === 'submitting'}
                    aria-disabled={!isValid || submitState === 'submitting'}
                  >
                    {submitState === 'submitting' ? 'PROCESSING...' : 'REQUEST ASSESSMENT'}
                  </button>
                  <button
                    className="contact-submit-btn"
                    style={{ background: 'transparent', border: '1px solid var(--text-primary)', color: 'var(--text-primary)' }}
                    id="contact-whatsapp-submit"
                    onClick={() => {
                      if (!isValid) return;
                      
                      // Save to DB in the background
                      submitToDatabase().catch(e => console.error('[DB SAVE ERROR]', e));

                      const text = `Hi, I would like an assessment.\n\n*Name:* ${formData.name}\n*Company:* ${formData.company}\n*WhatsApp:* ${formData.whatsapp}\n\n*Problem Statement:*\n${formData.problem}`;
                      const encodedText = encodeURIComponent(text);
                      window.open(`https://wa.me/917600468109?text=${encodedText}`, '_blank');
                    }}
                    disabled={!isValid}
                  >
                    SEND VIA WHATSAPP
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

