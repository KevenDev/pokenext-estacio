import Image from "next/image";
import Link from "next/link";
import pokeball from "~/asserts/imgs/pokeball-hd.png";

const Header = () => {
  return (
    <header
      className="
                flex 
                flex-row 
                items-center 
                p-2 text-center 
                shadow-2xl
                gap-2
            "
    >
      <Link href="/">
        <Image
          src={pokeball}
          width={50}
          height={50}
          alt="Logo Pokeball"
          className="ml-8"
        />
        <h2 className="text-base font-bold text-center text-white font-mono">
          PokeNext Estácio!
        </h2>
      </Link>
      <div className="flex">
          <ul>
            <li>Login</li>
          </ul>
      </div>
    </header>
  );
};

export default Header;
