import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-[30px] w-full flex">
      <div className="bg-black h-full w-full flex px-3 justify-between items-center">
        <div className="flex gap-3">
          <Link href="facebook.com">
            <Instagram size={20} className="text-white" />
          </Link>
          <Link href="facebook.com">
            <Facebook size={20} className="text-white" />
          </Link>
          <Link href="facebook.com">
            <Twitter size={20} className="text-white" />
          </Link>
          <Link href="facebook.com">
            <Youtube size={20} className="text-white" />
          </Link>
          <Link href="facebook.com">
            <Linkedin size={20} className="text-white" />
          </Link>
        </div>
        <div className="flex gap-1 text-white h-full justify-center items-center text-sm">
          <Phone size={20} />
          7761981651
        </div>
      </div>
      <div className="bg-[#30BD19] text-[white] min-w-[120px] h-full p-2 font-bold flex justify-center items-center">
        <Link href="/support-us" className="text-sm">
          SUPPORT US
        </Link>
      </div>
    </div>
  );
};

export default Header;
