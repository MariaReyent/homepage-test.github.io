import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import BrainLogo from "../assets/brainlogo2.png";

export function Navbar() {
  const navItems = [
    { name: "Про Нас", href: "/about" },
    { name: "Вакансії", href: "/jobs" },
    { name: "Часті запитання", href: "/questions" },
    { name: "Контакти", href: "/contacts" },
    { name: "Анкета", href: "/form" },
  ];
  return (
    <nav className="bg-white   flex  mx-auto items-center justify-center p-4 lg:h-[100px] sm:h-[70px] ">
      <div className="flex items-center justify-center gap-2">
        <div class="flex md:hidden flex-col justify-between w-8 h-6 cursor-pointer mr-6">
          <span class="h-1 bg-gray-700 rounded"></span>
          <span class="h-1 bg-gray-700 rounded"></span>
          <span class="h-1 bg-gray-700 rounded"></span>
        </div>
        <div className="relative lg:mr-30 sm:mr-40  py-2 items-center">
          <img
            src={BrainLogo}
            alt="Brain Logo"
            className="w-16 sm:w-20 md:w-28 lg:w-35"
          />
          <p className="absolute -top-2 -right-7 lg:-top-0.5 lg:-right-2 lg:left-40 md:-top-2 md:-right-5   lg:text-2xl  sm:-top-3  sm:-right-7  sm:text-lg text-[#10B1E8] font-bold ">
            work
          </p>
        </div>
      </div>

      <div className="hidden md:flex  items-center gap-10 z-50 text-gray-800  font-montserrat  whitespace-nowrap md:gap-2 md:mr-7">
        {navItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className={`flex items-center gap-2 lg:px-7 md:px-1 py-2 transition 
              hover:text-gray-400 
              ${
                i === navItems.length - 1
                  ? "flex items-center justify-center  bg-gray-600 text-white   hover:bg-gray-700 "
                  : ""
              }`}
          >
            {item.name}
            {i !== navItems.length - 1 && (
              <MdOutlineKeyboardDoubleArrowRight className="w-4 h-4 mt-1" />
            )}
          </a>
        ))}
      </div>

      <div className="flex md:hidden items-center">
        <a
          href={navItems[navItems.length - 1].href}
          className="flex items-center justify-center bg-gray-600 text-white hover:bg-gray-700 px-4 ml-20 py-2"
        >
          {navItems[navItems.length - 1].name}
        </a>
      </div>
    </nav>
  );
}
