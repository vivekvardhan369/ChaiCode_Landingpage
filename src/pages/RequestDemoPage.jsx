import React, { useState, useEffect, useRef } from 'react';
import logo from "../images/logo_new.png";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const QuanfiaPopupForm = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState({
    type: 'success',
    message: 'Your request has been submitted, we\'ll get back to you shortly'
  });
  
  const formRef = useRef();
  
  // Form values state
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    source: ''
  });
  
  // Form errors state
  const [formErrors, setFormErrors] = useState({
    fullName: '',
    email: '',
    source: '',
    captcha:''
  });

  // Function to toggle popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Validate email format
  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle input changes and validate on keyup
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value
    });
    
    // Validate on keyup
    validateField(id, value);
  };
  
  // Validate a specific field
  const validateField = (fieldName, value) => {
    let error = '';
    
    switch (fieldName) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Please complete this required field.';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Please complete this required field.';
        } else if (!isValidEmail(value)) {
          error = 'Email must be formatted correctly.';
        }
        break;
      case 'source':
        if (!value.trim()) {
          error = 'Please complete this required field.';
        }
        break;
      default:
        break;
    }
    
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: error
    }));
  };
  
  // Handle form submission with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const fieldNames = ['fullName', 'email', 'source'];
    let isValid = true;
    
    fieldNames.forEach(field => {
      validateField(field, formValues[field]);
      if (!formValues[field].trim()) {
        isValid = false;
      }
    });
    
    if (!isValidEmail(formValues.email)) {
      isValid = false;
    }

    // validate reCAPTCHA
    if (!captchaValue){
      isValid = false;
      setFormErrors(prev =>({
        ...prev,
        captcha: 'Please complete the CAPTCHA Verification'
      }));
    }
    
    if (isValid) {
      setIsSubmitting(true);
      
      // EmailJS send email
      emailjs
        .sendForm(
          'service_vi4vipj', 
          'template_zeeyg9r',
          formRef.current,
          {
            publicKey: 'hybdyKV4wgGOhOf_I', 
            'g-recaptcha-response': captchaValue // Include the CAPTCHA token
          }
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            setNotificationMessage({
              type: 'success',
              message: 'Your request has been submitted, we\'ll get back to you shortly'
            });
            setShowNotification(true);
            togglePopup();
            
            // Reset form values
            setFormValues({
              fullName: '',
              email: '',
              source: ''
            });
            setCaptchaValue(null);

            // Auto-hide notification after 5 seconds
            setTimeout(() => {
              setShowNotification(false);
            }, 5000);
          },
          (error) => {
            console.error('EmailJS error:', error.text);
            setNotificationMessage({
              type: 'error',
              message: 'There was a problem submitting your request. Please try again.'
            });
            setShowNotification(true);
            
            // Auto-hide notification after 5 seconds
            setTimeout(() => {
              setShowNotification(false);
            }, 5000);
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  // Use this to control the popup via external triggers
  useEffect(() => {
    const handleExternalOpen = (event) => {
      console.log("Event received:", event.detail);
      if (event.detail?.action === 'openDemoPopup') {
        setIsPopupOpen(true);
      }
    };

    // Add event listener for external triggers
    document.addEventListener('requestDemo', handleExternalOpen);
    
    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener('requestDemo', handleExternalOpen);
    };
  }, []);

  // Control body scroll when popup is open/closed
  useEffect(() => {
    if (isPopupOpen) {
      // Disable scrolling on the body when popup is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when popup is closed
      document.body.style.overflow = '';
    }

    // Clean up function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPopupOpen]); // Run effect when popup state changes

  return (
    <div className="relative">
      {/* Success/Error Notification */}
      <div 
        className={`fixed top-5 right-0 z-50 transform transition-transform duration-500 ease-in-out ${
          showNotification ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className={`${notificationMessage.type === 'success' ? 'bg-green-800' : 'bg-red-800'} text-white px-6 py-4 rounded-l-lg shadow-lg flex items-center`}>
          <div className="mr-3">
            {notificationMessage.type === 'success' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          <p>{notificationMessage.message}</p>
        </div>
      </div>

      {/* The popup component */}
      <div className={`cnct__popup ${isPopupOpen ? 'block' : 'hidden'}`}>
        <div className="cnct__popup-otr fixed inset-0 flex items-center justify-center z-50">
          {/* Background overlay with blur effect */}
          <div 
            className="absolute inset-0 bg-[#151725] bg-opacity-95 backdrop-blur-sm"
            onClick={togglePopup}
          ></div>

          {/* Popup content */}
          <div className="cnct__pop-wrap relative bg-[#0C0E1B] w-full max-w-xl mx-4 rounded-lg overflow-hidden shadow-xl" style={{ minHeight: '700px' }}>
            {/* Close button */}
            <a 
              href="#" 
              className="btn_form_trigger absolute top-4 right-4 text-indigo-400 hover:text-indigo-300"
              onClick={(e) => {
                e.preventDefault();
                togglePopup();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M15 15L8 8M8 8L1 1M8 8L15 1M8 8L1 15" stroke="#434989" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div className="cnct__popup-wrap p-8">
              {/* Logo */}
              <div className="popup-logo mb-6">
                <img src={logo} alt="Quanfia Logo" className="h-8" />
              </div>

              {/* Heading and content */}
              <div className="popup-hdr mb-6">
                <h2 className="text-white text-2xl font-bold mb-4">
                  Cover more ground with your company research - <span className="text-amber-400">and let no risk slip past</span>
                </h2>
                <div className="popup--cnt">
                  <p className="text-gray-300">
                    Interested in working at Quanfia? <a href="#" className="text-indigo-400 hover:underline">Click Here</a>
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="cnct__popup-form">
                <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="fullName" className="block text-[#C3C6E4] mb-2">Full Name*</label>
                    <input 
                      type="text" 
                      id="fullName"
                      name="user_name" // Required for EmailJS - matches template parameter
                      value={formValues.fullName}
                      onChange={handleInputChange}
                      onKeyUp={() => validateField('fullName', formValues.fullName)}
                      placeholder="John Smith" 
                      className={`w-full p-3 rounded bg-[#171b38] text-white border ${formErrors.fullName ? 'border-none' : 'border-[#171b38]'} focus:border-indigo-500 focus:outline-none`}
                    />
                    {formErrors.fullName && (
                      <div className="text-[#C3C6E4] text-sm mt-1">{formErrors.fullName}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#C3C6E4] mb-2">Email*</label>
                    <input 
                      type="email" 
                      id="email"
                      name="user_email" // Required for EmailJS - matches template parameter
                      value={formValues.email}
                      onChange={handleInputChange}
                      onKeyUp={() => validateField('email', formValues.email)}
                      placeholder="John.Smith@gmail.com" 
                      className={`w-full p-3 rounded bg-[#171b38] text-white border ${formErrors.email ? 'border-none' : 'border-[#171b38]'} focus:border-indigo-500 focus:outline-none`}
                    />
                    {formErrors.email && (
                      <div className="text-[#C3C6E4] text-sm mt-1">{formErrors.email}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="source" className="block text-[#C3C6E4] mb-2">How did you hear about Quanfia?*</label>
                    <textarea 
                      id="source"
                      name="message" // Required for EmailJS - matches template parameter
                      value={formValues.source}
                      onChange={handleInputChange}
                      onKeyUp={() => validateField('source', formValues.source)}
                      rows="4" 
                      placeholder="Please describe your source of information..." 
                      className={`w-full p-3 rounded bg-[#171b38] text-white border ${formErrors.source ? 'border-none' : 'border-[#171b38]'} focus:border-indigo-500 focus:outline-none`}
                    ></textarea>
                    {formErrors.source && (
                      <div className="text-[#C3C6E4] text-sm mt-1">{formErrors.source}</div>
                    )}
                  </div>

                   {/* CAPTCHA */}
                    <div className="flex justify-center my-4">
                      <ReCAPTCHA
                        sitekey="6LeXp_wqAAAAAMLxg5cwP4ouQMsDL_ouL-3-zL8n" 
                        onChange={(value) => {
                          setCaptchaValue(value);
                          // Clear captcha error when valid
                          if (value) {
                            setFormErrors(prev => ({...prev, captcha: ''}));
                          }
                        }}
                        onExpired={() => {
                          setCaptchaValue(null);
                          setFormErrors(prev => ({
                            ...prev, 
                            captcha: 'CAPTCHA expired, please verify again'
                          }));
                        }}
                        theme="dark" // Use dark theme to match your UI
                      />
                    </div>
                    
                    {/* Show CAPTCHA error if exists */}
                    {formErrors.captcha && (
                      <div className="text-center text-[#C3C6E4] text-sm -mt-2">
                        {formErrors.captcha}
                      </div>
                    )}


                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full p-3 border border-[#FFCB38] text-amber-500 hover:bg-[#FFCB38] hover:text-white rounded text-center font-medium transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuanfiaPopupForm;