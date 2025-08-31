import FloatingInput from "../shared/FloatingInput";

export default function SignIn() {
  return (
    <div className='bg-[#10141E]  flex flex-col gap-[58.4px] items-center h-screen pt-[48px] px-[24px] pb-[170px]'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='26'
        viewBox='0 0 32 26'
        fill='none'
      >
        <path
          d='M25.6 0L28.8 6.4H24L20.8 0H17.6L20.8 6.4H16L12.8 0H9.6L12.8 6.4H8L4.8 0H3.2C1.432 0 0.016 1.432 0.016 3.2L0 22.4C0 24.168 1.432 25.6 3.2 25.6H28.8C30.568 25.6 32 24.168 32 22.4V0H25.6Z'
          fill='#FC4747'
        />
      </svg>
      <div className='bg-[#161D2F] flex flex-col   rounded-[10px]  pt-[24px] px-[24px] pb-[32px] '>
        <h2 className='text-[32px] mb-[40px]  text-white'>Login</h2>
        <div className=' flex flex-col gap-[30px]'>
          <FloatingInput label='Email Adress' />
          <FloatingInput label='Password' />
        </div>
        <button className=' cursor-pointer text-white py-[14px] mt-[40px] mb-[24px] px-[67px] bg-[#FC4747] rounded-[6px]'>
          Login to your account
        </button>
        <p className='text-white font-[15px] text-center'>
          Don’t have an account?{" "}
          <span className='text-[#FC4747] ml-[6px] cursor-pointer'>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
