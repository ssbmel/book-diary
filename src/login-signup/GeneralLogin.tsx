import { useNavigate } from 'react-router-dom';

function GeneralLogin() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/signup');
  } 

  return (
    <div className='w-[250px] mx-auto grid gap-5 mt-[40px]'>
        <input type="text" placeholder='아이디' className='p-1 px-3 border-b-2 rounded-sm shadow-sm'/>
        <input type="password" placeholder='비밀번호' className='p-1 px-3 border-b-2 rounded-sm shadow-sm'/>
        <button className='bg-red-950 text-white p-[6px] rounded-sm mt-[15px]'>로그인</button>

        <div className='text-center grid gap-3 mt-[20px]'>
            <button onClick={goToSignup} className='text-[14px]'>회원가입 하러 가기</button>
            <div className='flex items-center mx-auto'>
                <p className='text-gray-400 text-[12px] mr-1'>비밀번호를 잊으셨나요?</p>
                <button className='text-[14px]'>비밀번호 찾기</button>
            </div>
        </div>
    </div>
  )
}

export default GeneralLogin;