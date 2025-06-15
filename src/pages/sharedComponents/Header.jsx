function Header({ title, desc, width }) {
  return (
    <header className=" px-4 ">
      <div className=" text-center">
        <h1 className={`max-w-2xl mx-auto text-2xl md:text-4xl font-bold mb-3`}>
          {title}
        </h1>
        <p
          className={`${
            width && width
          } mx-auto dark:text-slate-400  font-light text-black/60`}
        >
          {desc}
        </p>
      </div>
    </header>
  );
}

export default Header;
