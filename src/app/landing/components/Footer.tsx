import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue text-white p-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <h2 className="font-bold">Quick Links</h2>
          <Link className="text-blue-400 hover:text-blue-600" href="/about">
            About Us
          </Link>
          <Link className="text-blue-400 hover:text-blue-600" href="/services">
            Services
          </Link>
          <Link className="text-blue-400 hover:text-blue-600" href="/support">
            Support
          </Link>
          <Link className="text-blue-400 hover:text-blue-600" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-blue-400 hover:text-blue-600" href="/terms">
            Terms of Service
          </Link>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold">Contact Us</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:info@brightcare.com"
              className="text-blue-400 hover:text-blue-600"
            >
              info@brightcare.com
            </a>
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold">Follow Us</h2>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        © {new Date().getFullYear()} BrightCare . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
