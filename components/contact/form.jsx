'use client';
import { useModalGlobalContext } from '@context/modal.context';
import { useState } from 'react';

const Form = () => {
  const { isModalOpen, setIsModalOpen } = useModalGlobalContext();
  const [contactData, setContactData] = useState({
    parentName: '',
    childrenName: '',
    email: '',
    mobile: '',
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const { parentName, childrenName, email, mobile } = contactData;
  const changeHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setContactData({ ...contactData, [key]: [value] });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (parentName && childrenName && email && mobile) {
      const JSONdata = JSON.stringify(contactData);

      // API endpoint where we send form data.
      const webhook = `https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZjMDYzNDA0MzI1MjY4NTUzMTUxM2Ei_pc`;

      // Form the request for sending data to the server.
      const options = {
        method: 'POST',
        body: JSONdata,
      };
      // Send the form data to our endpoint url
      const response = await fetch(webhook, options);

      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json();
      setIsSubmit(true);
    }

    setContactData({
      parentName: '',
      childrenName: '',
      email: '',
      mobile: '',
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmit(false);
  };

  return (
    <dialog
      className={`w-100 mx-auto modal ${isModalOpen ? 'grid' : 'hidden'}`}
      id='contactForm'
      open={isModalOpen}
    >
      <div
        className='absolute top-0 left-0 z-10 w-screen h-screen opacity-40 overlay bg-info'
        onClick={closeModal}
      ></div>
      <div
        className={`relative grid-cols-1 shadow-lg z-[100] ${
          isSubmit ? 'hidden' : 'grid'
        }`}
      >
        <button
          className='absolute btn btn-sm btn-circle btn-primary text-secondary right-2 top-2'
          onClick={() => setIsModalOpen(false)}
        >
          ✕
        </button>
        <div className='mx-auto '>
          <form onSubmit={submitHandler}>
            <div className='p-6 bg-white rounded-lg'>
              <div className='session-title'>
                <h3 className='mb-5 text-2xl font-bold text-center md:text-3xl text-primary'>
                  Contact Us
                </h3>
              </div>
              <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2'>
                <div>
                  <label
                    htmlFor='parentName'
                    className='my-3 font-bold text-primary'
                  >
                    Parent Name
                  </label>
                  <input
                    id='parentName'
                    type='text'
                    required
                    name='parentName'
                    placeholder='Enter Parent Name'
                    onInvalid={(e) =>
                      e.target.setCustomValidity('Parent Name is Required')
                    }
                    onInput={(e) => e.target.setCustomValidity('')}
                    className='w-full p-2 border border-gray-300 rounded'
                    value={parentName}
                    onChange={changeHandler}
                  />
                </div>
                <div>
                  <label
                    htmlFor='Children Name'
                    className='my-3 font-bold text-primary'
                  >
                    Children Name
                  </label>
                  <input
                    id='Children Name'
                    type='text'
                    name='childrenName'
                    required
                    onInvalid={(e) =>
                      e.target.setCustomValidity('Children Name is Required')
                    }
                    onInput={(e) => e.target.setCustomValidity('')}
                    placeholder='Enter Children Name'
                    className='w-full p-2 border border-gray-300 rounded'
                    value={childrenName}
                    onChange={changeHandler}
                  />
                </div>
              </div>

              <div className='mt-4'>
                <label
                  htmlFor='email'
                  className='my-3 font-bold text-primary'
                >
                  Email Address
                </label>
                <input
                  id='email'
                  type='email'
                  name='email'
                  required
                  placeholder='Enter Email Address'
                  className='w-full p-2 border border-gray-300 rounded'
                  value={email}
                  onChange={changeHandler}
                />
              </div>
              <div className='mt-4'>
                <label
                  htmlFor='mobile'
                  className='my-3 font-bold text-primary'
                >
                  Mobile number
                </label>
                <input
                  id='mobile'
                  type='tel'
                  name='mobile'
                  required
                  pattern='^[6-9]\d{9}$'
                  placeholder='Enter Mobile Name'
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      'Please enter a valid mobile number',
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity('')}
                  className='w-full p-2 border border-gray-300 rounded'
                  value={mobile}
                  onChange={changeHandler}
                />
              </div>
              <label
                className='modal-backdrop'
                htmlFor='contactForm'
              >
                Close
              </label>
              <div className='mt-4 text-center'>
                <div className='modal-action'>
                  {/* if there is a button in form, it will close the modal */}
                  <button className='text-base font-bold text-white border border-solid rounded-lg btn btn-block bg-primary border-primary'>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div
        className={`relative grid-cols-1 shadow-lg z-[100] w-[360px] md:w-[425px] ${
          isSubmit ? 'grid' : 'hidden'
        }`}
      >
        <button
          className='absolute btn btn-sm btn-circle btn-primary text-secondary right-2 top-2'
          onClick={() => setIsModalOpen(false)}
        >
          ✕
        </button>
        <div className='mx-auto'>
          <div className='p-6 bg-white rounded-lg'>
            <div className='session-title'>
              <h3 className='my-5 text-2xl font-bold text-center md:text-3xl text-primary'>
                It means the world to us
              </h3>

              <p className='py-2 mx-auto my-2 text-center'>
                We&apos;ve received your request and counsellors call you back
                within 24 hours
              </p>

              <p className='py-2 mx-auto my-2 text-center'>
                In the meantime, make sure to follow us on social!
              </p>

              <div className='mt-4 text-center'>
                <div className='modal-action'>
                  {/* if there is a button in form, it will close the modal */}
                  <a
                    className='text-base font-bold text-white border border-solid rounded-lg btn btn-block bg-primary border-primary'
                    href='https://www.instagram.com/relearn.school/'
                    target='_blank'
                    rel='noopener'
                    onClick={closeModal}
                  >
                    Check our Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Form;
