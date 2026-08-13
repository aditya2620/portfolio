import "./Footer.css";
export const Footer = () => {
  return (
    <footer>
      <span className="footer">{new Date().getFullYear()} @Portfolio.me</span>
    </footer>
  );
};
