import React from 'react'

function Login() {
  return (
    <div className='w-[200px] mx-auto grid gap-5 mt-[50px]'>
        <input type="text" placeholder='아이디' className='border px-2'/>
        <input type="password" placeholder='비밀번호' className='border px-2'/>
        <button className='bg-red-950 text-white p-1 rounded-sm'>로그인</button>

        <div className='text-center grid'>
            <button className='text-[14px]'>회원가입 하러 가기</button><br />
            <p className='text-gray-400 text-[12px]'>비밀번호를 잊으셨나요?</p>
            <button className='text-[14px]'>비밀번호 찾기</button>

        </div>
    </div>

  )
}

export default Login