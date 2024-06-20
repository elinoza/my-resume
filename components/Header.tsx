const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 my-5 flex items-center justify-end px-24 py-3 text-xl text-stone-400">
      <a
        href="mailto:hillcakmak@gmail.com"
        rel="noopener noreferrer"
        className="hidden sm:block"
      >
        <button className="rounded-3xl bg-stone-800 p-2 px-3 text-stone-200">
          Contact me
        </button>
      </a>
    </header>
  );
};
export default Header;
