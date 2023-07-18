import { useModalGlobalContext } from '@context/modal.context';

const Form = () => {
  const { isModalOpen, setIsModalOpen } = useModalGlobalContext();
  return (
    <dialog
      className={`w-100 mx-auto modal ${isModalOpen ? 'grid' : 'hidden'}`}
      id='contactForm'
      open={isModalOpen}
    >
      <div
        className='absolute top-0 left-0 z-10 w-screen h-screen opacity-40 overlay bg-info'
        onClick={() => setIsModalOpen(false)}
      ></div>
      <div className='relative grid grid-cols-1 shadow-lg z-[100]'>
        <button
          className='absolute btn btn-sm btn-circle btn-primary text-secondary right-2 top-2'
          onClick={() => setIsModalOpen(false)}
        >
          ✕
        </button>
        <div className='mx-auto'>
          <form
            action='https://formsubmit.co/raam.rohith@skillsafari.in'
            method='POST'
          >
            <div className='p-6 bg-white rounded-lg'>
              <div className='session-title'>
                <h3 className='mb-5 text-2xl font-bold text-center md:text-3xl text-primary'>
                  Contact Us
                </h3>
              </div>
              <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2'>
                <div>
                  <label
                    htmlFor='first-name'
                    className='my-3 font-bold text-primary'
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
                    className='my-3 font-bold text-primary'
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
                  htmlFor='email'
                  className='my-3 font-bold text-primary'
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
                  className='my-3 font-bold text-primary'
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
    </dialog>
  );
};

export default Form;
