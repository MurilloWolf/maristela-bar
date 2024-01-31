interface Props {
  children: React.ReactNode;
}

export function Layout(props: Props) {
  const links = [
    { title: "Dashboard", href: "/" },

    { title: "Vender", href: "/seller" },
    { title: "Clientes", href: "/clients" },
    { title: "Estoque", href: "/products" },
    {
      title: "Cadastros",
      href: "/products",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <header className="flex w-screen h-20 bg-[#212121]">
          <nav className="flex items-center justify-center w-full">
            <ul className="flex items-center justify-center w-full">
              {links.map((link) => (
                <li
                  className="p-4 m-4 hover:text-bolder hover:text-xl ease-in-out transition-all delay-100 text-gray-100"
                  key={link.title}
                >
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div>{props.children}</div>
        <footer className="text-gray-100 flex justify-center items-center text-center bg-[#212121] w-screen h-24 sticky botton-0">
          <p>Made by Wolf 🐺</p>
        </footer>
      </div>
    </>
  );
}
