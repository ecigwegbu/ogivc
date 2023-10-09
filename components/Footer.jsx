import { useContext } from "react";
import { DarkModeContext } from "@app/layout";
import Link from "next/link";

const Footer = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);  
  return (
    <div className={`p-2 flex flex-col items-center justify-between w-full text-white bg-blue-900 text-xs border-2-blue-900 ${darkMode ? 'text-gray-500' : ''}`}>
      <small>&copy; 2023. MannedModule Inc. All Rights Reserved.</small>
      <small>
        <Link href="#" title="The Small Prints">
          Terms and Conditions
        </Link>
      </small>
      <small>
        #Do.Hard.Things&reg;&trade;&nbsp;@ALX-Cohort-9&nbsp;
        <Link
          href="mailto:admin@oilandgas-interactive.com"
          title="Need help? Talk to the experts..."
        >
          Contact Us
        </Link>
      </small>
    </div>
  );
};

export default Footer;
