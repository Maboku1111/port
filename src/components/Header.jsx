/* Header.jsx */
import { AuroraText } from "@/components/magicui/aurora-text";

const Header = () => {
  return (
    <header>
      <div className="logo">
        Ezrah <AuroraText>CODES</AuroraText>
      </div>

      <nav>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Services</a>
      </nav>

      <div className="right-side-nav">
          <p><AuroraText>Ezrah</AuroraText> CODES</p>
      </div>
    </header>
  );
};

export default Header;
