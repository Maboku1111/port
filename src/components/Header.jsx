/* Header.jsx */
import { AuroraText } from "@/components/magicui/aurora-text";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <p>Ezrah <AuroraText>CODES</AuroraText></p>
      </div>

      <nav>
        <a href="#">Projects</a>
        <a href="#">Blog</a>
      </nav>

      <div className="right-side-nav">
        <p>ezrahcodes</p>
      </div>
    </header>
  );
};

export default Header;
