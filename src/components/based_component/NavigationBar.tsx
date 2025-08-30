'use client'
import NavigationBar from "../ui/NavigationBar/NavigationBar";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";

const items = [
  { icon: <VscHome size={18} />, label: "Home", onClick: () => alert("Home!") },
  { icon: <VscArchive size={18} />, label: "Archive", onClick: () => alert("Archive!") },
  { icon: <VscAccount size={18} />, label: "Profile", onClick: () => alert("Profile!") },
  { icon: <VscSettingsGear size={18} />, label: "Settings", onClick: () => alert("Settings!") },
];

const MyNavigationBar = () => {
  return (
    <NavigationBar
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
    />
  );
};

export default MyNavigationBar;