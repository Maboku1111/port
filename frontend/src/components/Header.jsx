/* Header.jsx */
import { AuroraText } from "@/components/magicui/aurora-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 flex justify-between items-center content-center justify-items-center w-full h-16 navbar">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <nav className="flex gap-16" >
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Services</a>
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
