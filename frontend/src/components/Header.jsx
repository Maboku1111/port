/* Header.jsx */
import { AuroraText } from "@/components/magicui/aurora-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 flex justify-between items-center content-center justify-items-center w-full h-16 shadow-2xs shadow-indigo-500/50 navbar">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <nav className="flex gap-16">
        <a
          href="#"
          className="hover:text-indigo-400"
        >
          About
        </a>
        <a
          href="#"
          className="hover:text-blue-600"
        >
          Blog
        </a>
        <a
          href="#"
          className="hover:text-pink-400"
        >
          Services
        </a>
      </nav>

      <div>
        <p>
          Ezrah <AuroraText>CODES</AuroraText>
        </p>
      </div>
    </header>
  );
};

export default Header;
