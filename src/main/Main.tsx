import Header from "../header/Header";

function Main() {
  return (
    <div>
        <Header/>
      <div className="relative w-full h-[calc(100vh-46px)] bg-library-hall bg-cover bg-center">
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          나만의 도서관
        </h1>
      </div>
    </div>
  );
}

export default Main;
