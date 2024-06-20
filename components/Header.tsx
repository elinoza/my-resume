const Header = () => {
  return (
    <header className="text-stone-400 fixed top-0 left-0 right-0 py-3 px-24 my-5 flex items-center text-xl justify-end z-10">
      <a
        href="mailto:hillcakmak@gmail.com"
        rel="noopener noreferrer"
        className="hidden sm:block"
      >
        <button className=" rounded-3xl bg-stone-800 p-2 px-3 text-stone-200 ">
          Contact me
        </button>
      </a>
    </header>
  );
};
export default Header;
