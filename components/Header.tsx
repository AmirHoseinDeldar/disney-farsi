import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src="https://i.postimg.cc/wMLz9Xd1/58428d79a6515b1e0ad75ab2-1.png"
          width={120}
          height={100}
          alt="disney Logo"
          className={"cursor-pointer "}
        />
      </Link>
      <div className="flex space-x-2">
        {/* GenreDropdown */}
        {/* SearchInput */}
        {/* ThemeToggler */}
      </div>
    </header>
  );
};

export default Header;
