import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef(); // Reference for the form

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      values, // Send values instead of form.current
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      toast.success('Message sent successfully!');
      console.log('SUCCESS!', response.status, response.text);
      resetForm();
    })
    .catch((error) => {
      toast.error('Failed to send message.');
      console.error('FAILED...', error);
    })
    .finally(() => {
      setSubmitting(false);
    });
  };

  return (
    <>
    <div className="contact-form">

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          
          <Form ref={formRef}>
            <div className='name-feild'>
              <label htmlFor="name">Name</label>
              <Field style={{ width: '50vw', height: '30px' }} type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div className='email-feild'>
              <label htmlFor="email">Email</label>
              <Field style={{ width: '50vw', height: '30px' }} type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className='message-feild'>
              <label htmlFor="message">Message</label>
              <Field style={{ width: '50vw', height: '60px' }} as="textarea" id="message" name="message" />
              <ErrorMessage name="message" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </Form>
        )}
      </Formik>

      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
    </>
  );
};

export default Contact;