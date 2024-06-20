import LogoImg from "../../assets/svg/LogoImg.svg";

const Logo = () => (
  <div className="flex hover:opacity-80" to="/">
    <img src={LogoImg} alt="Logo" width={36} height={40} />
    <h4 className="text-3xl">NFTALIEN</h4>
  </div>
);

export default Logo;
