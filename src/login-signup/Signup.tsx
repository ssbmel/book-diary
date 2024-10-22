import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
      <div className="w-full h-full mx-auto mt-[120px]">
        <div className="p-10 grid gap-5">
            <h1 className="text-center mb-[24px] text-[18px]">회원가입</h1>
        <input
          type="text"
          placeholder="이메일"
          className="p-1 px-3 border-b-2 rounded-sm shadow-sm"
        />
        <input
          type="text"
          placeholder="닉네임"
          className="p-1 px-3 border-b-2 rounded-sm shadow-sm"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="p-1 px-3 border-b-2 rounded-sm shadow-sm"
        />
        <input
          type="password"
          placeholder="비밀번호재확인"
          className="p-1 px-3 border-b-2 rounded-sm shadow-sm"
        />
        <span className="text-gray-500 mx-auto"><input type="checkbox" className="mr-2 mt-5"/>개인정보의 수집 및 이용에 대한 동의 (필수)</span>
        </div>

        <div className="grid px-10 gap-2">
        <button className="bg-red-950 text-white p-[6px] rounded-sm mt-[15px]">
          가입하기
        </button>
        <Link to={'/loginhome'} className="bg-black text-white p-[6px] rounded-sm text-center">
          뒤로가기
        </Link>
        </div>
        
      </div>
  );
}
