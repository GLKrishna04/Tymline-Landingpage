import tymlineLogo from "@/assets/tymline-logo.png";

interface TymlineLogoProps {
  className?: string;
}

const TymlineLogo = ({ className = "h-10" }: TymlineLogoProps) => {
  return (
    <img
      src={tymlineLogo}
      alt="Tymline"
      className={className}
    />
  );
};

export default TymlineLogo;
