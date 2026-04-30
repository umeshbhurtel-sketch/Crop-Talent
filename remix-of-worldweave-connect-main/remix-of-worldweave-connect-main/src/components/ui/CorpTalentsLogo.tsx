import cropLogo from "@/assets/icons/Crop_logo_2.png";

interface CorpTalentsLogoProps {
  size?: number;
}

export const CorpTalentsLogo = ({ size = 38 }: CorpTalentsLogoProps) => (
  <img
    src={cropLogo}
    alt="Crop Talent"
    style={{ height: size, width: "auto" }}
  />
);
