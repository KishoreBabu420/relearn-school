const PricingCard = ({
  type,
  perClassPrice,
  duration,
  includes,
  paymentLink,
  yearly,
}) => {
  const totalPrice = perClassPrice * 8;
  const discountedPrice = totalPrice * 0.8;
  return (
    <div className='h-full'>
      <div className='relative flex flex-col h-full p-6 border shadow rounded-2xl bg-primary border-primary shadow-slate-950'>
        {type === 'Achiever' && (
          <div className='absolute top-0 right-0 mr-6 -mt-4'>
            <div className='inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-success text-white rounded-full shadow-sm shadow-slate-950/5'>
              Most Popular
            </div>
          </div>
        )}
        <div className='mb-5'>
          <div className='mb-4 text-2xl font-semibold text-secondary'>
            {type}
          </div>
          <div className='inline-flex items-center justify-center mb-2'>
            <del className={`text-xl ${yearly ? 'inline' : 'hidden'}`}>
              ₹{totalPrice}
            </del>
            <span className='ml-3 text-3xl font-bold text-secondary'>
              <sup>₹</sup>
            </span>
            <span className='text-4xl font-bold text-secondary'>
              {yearly ? discountedPrice : totalPrice}
            </span>
            <sub className='font-medium text-secondary opacity-70'>/mo</sub>
          </div>
          <hr className='my-4 border-secondary opacity-20' />
          <div className='mb-3 font-semibold text-secondary'>
            Curriculum Includes:
          </div>
          <ul className='my-4 space-y-3 text-sm text-secondary grow'>
            {includes.map((item, index) => {
              return (
                <li
                  className='flex items-center'
                  key={index}
                >
                  <svg
                    className='w-3 h-3 mr-3 fill-success shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>

          <a
            className='inline-flex justify-center w-full my-4 rounded-lg whitespace-nowrap btn-custom btn-custom-secondary hover:-translate-y-2'
            href={paymentLink}
          >
            Purchase Plan
          </a>

          <p className='text-center text-secondary'>
            {yearly
              ? `Pay ₹${discountedPrice * duration} Upfront`
              : `Pay ₹${totalPrice} Monthly`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
