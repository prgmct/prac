import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
    <div>
        <h1>Formik</h1>
        <Formik
            initialValues = {{ name: '', email: '', phone: '', address:'', messages:'' }}
            validate = { values => {
                const errors = {};
                if(!values.name) {
                    errors.name ='Required';
                }

                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }

                if(!values.phone) {
                    errors.phone = 'Required';
                } else if (!/^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/.test(values.phone)) {
                    errors.phone = 'Only Japanese mobile number please';
                }

                if(!values.address) {
                    errors.address = 'Required';
                }

                return errors;
            }}

            onSubmit={ (values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {
                ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,

                }) => (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" className="form-test">
                            <div className="form-label">Name: </div>
                            <div className="form-control-container">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    // If not touched, show default. If touched, and there is error, 'input-errors'. If touched, and no error, 'input-success'.
                                    className={`input-control  ${ touched.name ? (errors.name ? 'input-errors' : 'input-success') : ''}`}
                                />
                                <div className="errors">
                                    {touched.name && errors.name}
                                </div>
                            </div>
                        </label>
                        

                        <label htmlFor="email" className="form-test">
                            <div className="form-label">Email: </div>
                            <div className="form-control-container">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={`input-control  ${ touched.email ? (errors.email ? 'input-errors' : 'input-success') : ''}`}
                                />
                                <div className="errors">
                                    { touched.email && errors.email}
                                </div>
                                
                            </div>
                        </label>
                        
                        <label htmlFor="phone" className="form-test">
                            <div className="form-label">Phone: </div>
                            <div className="form-control-container">
                            <input
                                type="text"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                                className={`input-control  ${ touched.phone ? (errors.phone ? 'input-errors' : 'input-success') : ''}`}
                            />
                            <div className="errors">
                            {errors.phone && touched.phone && errors.phone} 
                            </div>
                            </div>  
                        </label>
                        
                        <label htmlFor="address" className="form-test">
                            <div className="form-label">Address: </div>
                            <div className="form-control-container">
                                <input
                                    type="text"
                                    name="address"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.address}
                                    className={`input-control  ${ touched.address ? (errors.address ? 'input-errors' : 'input-success') : ''}`}
                                />
                                <div className="errors">
                                {errors.address && touched.address && errors.address}
                                </div>
                            </div>
                        </label>
                        
                        <label htmlFor="messages" className="form-test">
                            <div className="form-label">Messages: </div>
                                <div className="form-control-container">
                                <input
                                    type="text"
                                    name="messages"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.messages}
                                    className='input-control'
                                />
                                <div className="errors">
                                {touched.messages && errors.messages}
                                </div>
                            </div>
                        </label>
                       
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>

                )
            }

        </Formik>
    </div>
);

export default Basic;