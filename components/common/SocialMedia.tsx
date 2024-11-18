import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <ul className="flex gap-4">
      <li>
        <Link href="#" className="text-primary hover:opacity-80 rounded-full">
          <FaFacebook size={28} />
        </Link>
      </li>
      <li>
        <Link href="#" className="text-primary hover:opacity-80 rounded-full">
          <FaTwitter size={28} />
        </Link>
      </li>
      <li>
        <Link href="#" className="text-primary hover:opacity-80 rounded-full">
          <FaLinkedin size={28} />
        </Link>
      </li>
      <li>
        <Link href="#" className="text-primary hover:opacity-80 rounded-full">
          <FaYoutube size={28} />
        </Link>
      </li>
    </ul>
  );
}
