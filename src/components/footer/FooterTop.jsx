import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FooterTop = () => {
  const userInfo = useSelector((state) => state.amazon.userInfo);

  return (
    <div className='w-full bg-white py-6'>
      <div className='w-full border-t-[1px] border-b-[-1px] py-8'>
        <div className='w-64 mx-auto text-center flex flex-col gap-1'>
          {userInfo ? (
            <>
              <p className='text-sm'>Hello, {userInfo.userName}</p>
              <p className='text-sm'>See Personalised recommendations</p>
            </>
          ) : (
            <>
              <p className='text-sm'>See Personalised recommendations</p>
              <Link to="/signin">
                <button className='w-full bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700'>
                  Sign In
                </button>
              </Link>
              <p className='text-xs mt-1'>
                New Customers? <Link to="/signup" className='text-blue-600 ml-1 cursor-pointer'>Start here.</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
