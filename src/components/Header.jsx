import { SpinningText } from "@/components/magicui/spinning-text";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-900 shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">
        <SpinningText reverse className="text-4xl" duration={4} radius={6}>
          learn more • earn more • grow more •
        </SpinningText>
      </div>

      {/* Navbar */}
      <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-white">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Projects</a>
        <a href="#" className="hover:text-blue-600">Blog</a>
        <a href="#" className="hover:text-blue-600">Contact Me</a>
      </nav>

      {/* Placeholder for Mobile Menu (we’ll add later) */}
    </header>
  );
};

export default Header;
