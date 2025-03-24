/* Header.jsx */
import { AuroraText } from "@/components/magicui/aurora-text";

const Header = () => {
  return (
    <header>
      <div className="logo">
        Ezrah <AuroraText>Codes</AuroraText>
      </div>

      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Blog</a>
        <a href="#">Contact Me</a>
      </nav>
    </header>
  );
};

export default Header;
