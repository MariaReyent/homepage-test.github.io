import Logo from "../assets/brainlogo.png";
import Itbox from "../assets/itbox.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaViber } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FooterImg from "../assets/footer.svg";

export function Footer() {
  return (
    <>
      <footer className="hidden md:block bg-[#344150] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <img src={Logo} alt="Brain logo" />
            <a href="https://brain.com.ua" className="font-bold">
              brain.com.ua
            </a>
            <div className="flex space-x-4 ">
              <a href="">
                <FaTelegramPlane className="bg-gray-600 w-11 h-11 p-[5px] text-white rounded-full " />
              </a>
              <a href="">
                <FaViber className="bg-gray-600 w-11 h-11 p-[5px] text-white rounded-full " />
              </a>
              <a href="https://www.facebook.com/">
                <FaFacebookF className="bg-gray-600 w-11 h-11 p-[5px] text-white rounded-full " />
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube className="bg-gray-600 w-11 h-11 p-[5px] text-white rounded-full  " />
              </a>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center">
            <h3 className=" text-lg mb-2 font-exo2">ПРАЦЮЙ З НАМИ</h3>
            <ul className="text-sm text-gray-300 space-y-1 text-center">
              <li>
                <a href="#" className="hover:text-white">
                  Про нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Вакансії
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Часті запитання
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Контакти
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-end items-end ">
            <img src={Itbox} alt="Itbox logo" />
            <a
              href="https://itbox.ua"
              className="text-sm font-bold text-gray-300 mr-5"
            >
              itbox.ua
            </a>
            <div className="flex space-x-4">
              <a href="">
                <FaTelegramPlane className="bg-gray-600 w-11 h-11 p-[5px] text-white rounded-full " />
              </a>
              <a href="">
                <FaViber className="bg-gray-600 w-11 h-11 p-[5px] text-white rounded-full " />
              </a>
              <a href="https://www.facebook.com/">
                <FaFacebookF className="bg-gray-600 w-11 h-11 p-[5px] text-white rounded-full " />
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube className="bg-gray-600 w-11 h-11 p-[5px] text-white rounded-full  " />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-6">
          <div className="w-280 border-t border-gray-500"></div>
        </div>
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; 1996-2024 TOB &laquo;Приватінвест&raquo;
        </div>
      </footer>

      <footer>
        <div
          className="md:hidden  flex flex-col text-white font-exo2
        bg-[#344150] p-5"
        >
          <div className="flex flex-row">
            <div>
              <h3 className=" text-lg mb-2 font-exo2">ПРАЦЮЙ З НАМИ</h3>
              <ul className="text-sm text-gray-300 space-y-1 text-start">
                <li>
                  <a href="#" className="hover:text-white">
                    Про нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Вакансії
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Часті запитання
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакти
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-w-[270px]">
              <img src={FooterImg} alt="Footer figures img" />
            </div>
          </div>
          <div className="flex pt-2">
            <div>
              <img src={Logo} alt="Brain logo " className="max-w-[100px]" />
              <a href="https://brain.com.ua" className="font-bold text-sm">
                brain.com.ua
              </a>
            </div>
            <div className="flex space-x-4 ml-7">
              <a href="">
                <FaTelegramPlane className="bg-gray-600 w-9 h-9 p-[5px] text-white rounded-full " />
              </a>
              <a href="">
                <FaViber className="bg-gray-600 w-9 h-9 p-[5px] text-white rounded-full " />
              </a>
              <a href="https://www.facebook.com/">
                <FaFacebookF className="bg-gray-600 w-9 h-9 p-[5px] text-white rounded-full " />
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube className="bg-gray-600 w-9 h-9 p-[5px] text-white rounded-full  " />
              </a>
            </div>
          </div>
          <div className="flex pt-2">
            <div>
              <img src={Itbox} alt="Itbox logo " className="max-w-[100px]" />
              <a href="https://itbox.ua" className="font-bold text-sm">
                itbox.ua
              </a>
            </div>
            <div className="flex space-x-4 ml-7">
              <a href="">
                <FaTelegramPlane className="bg-gray-600 w-9 h-9 p-[5px] text-white rounded-full " />
              </a>
              <a href="">
                <FaViber className="bg-gray-600 w-9 h-9 p-[5px] text-white rounded-full " />
              </a>
              <a href="https://www.facebook.com/">
                <FaFacebookF className="bg-gray-600 w-9 h-9 p-[5px] text-white rounded-full " />
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube className="bg-gray-600 w-9 h-9 p-[5px] text-white rounded-full  " />
              </a>
            </div>
          </div>
          <div className="flex justify-center my-6">
            <div className="w-200 border-t border-gray-500"></div>
          </div>
          <div className="mt-3 text-center text-gray-500 text-sm">
            &copy; 1996-2024 TOB &laquo;Приватінвест&raquo;
          </div>
        </div>
      </footer>
    </>
  );
}
