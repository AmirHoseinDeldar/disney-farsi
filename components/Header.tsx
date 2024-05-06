import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

const Header = () => {
  return (
    <header className="2xl:fixed w-full z-50 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src="https://i.postimg.cc/qBKHfbQB/58428d79a6515b1e0ad75ab2.png"
          width={120}
          height={100}
          alt="disney Logo"
          className={"cursor-pointer dark:invert invert-1"}
        />
      </Link>
      <div className="flex space-x-2 gap-2">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
