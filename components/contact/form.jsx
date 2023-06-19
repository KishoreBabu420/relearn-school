import React from 'react';

const form = () => {
  return (
    <dialog
      className='container w-4/5 mx-auto shadow md:w-1/2 modal modal-middle'
      id='contactForm'
    >
      <div className='grid grid-cols-1'>
        <div className='mx-auto'>
          <form action=''>
            <div className='p-6 bg-white rounded-lg'>
              <div className='session-title'>
                <h3 className='my-3 text-2xl font-bold text-center text-accent'>
                  Contact Us
                </h3>
                <p className='my-3 text-primary'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque felis ex, lacinia in bibendum vitae, aliquet vel
                  diam.
                </p>
              </div>
              <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2'>
                <div>
                  <label
                    htmlFor='first-name'
                    className='font-bold text-primary'
                  >
                    First Name
                  </label>
                  <input
                    id='first-name'
                    type='text'
                    required
                    placeholder='Enter First Name'
                    className='w-full p-2 border border-gray-300 rounded'
                  />
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='font-bold text-primary'
                  >
                    Last Name
                  </label>
                  <input
                    id='last-name'
                    type='text'
                    placeholder='Enter Last Name'
                    className='w-full p-2 border border-gray-300 rounded'
                  />
                </div>
              </div>
              <div className='mt-4'>
                <label
                  htmlFor='company'
                  className='font-bold text-primary'
                >
                  Company
                </label>
                <input
                  id='company'
                  type='text'
                  placeholder='Enter Your Company Name'
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
              <div className='mt-4'>
                <label
                  htmlFor='email'
                  className='font-bold text-primary'
                >
                  Email
                </label>
                <input
                  id='email'
                  type='text'
                  placeholder='Enter Email Address'
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
              <div className='mt-4'>
                <label
                  htmlFor='phone'
                  className='font-bold text-primary'
                >
                  Phone number
                </label>
                <input
                  id='phone'
                  type='text'
                  placeholder='Enter Phone Name'
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
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
          <form
            method='dialog'
            className='modal-backdrop'
          >
            <button>close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default form;
