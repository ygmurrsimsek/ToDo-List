import logo from '../assets/images/logo.png';

function Home() {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      {/* Grid yapısı */}
      <div className="grid items-center gap-8 lg:grid-cols-2">
        {/* Yazı alanı */}
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            ToDo List
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat quisquam iusto eos consequatur sunt! Sequi ea nemo, in obcaecati fugit tempora fugiat similique autem velit exercitationem quam culpa perferendis.
          </p>
        </div>

        {/* Görsel alanı */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-md rounded-lg "
            src={logo}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
