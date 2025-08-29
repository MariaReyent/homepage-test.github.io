import Pic from "../assets/header-pic.jpg";
import Triangle from "../assets/green-triangle.png";
import Circle from "../assets/red-figure.png";
import YellowCircle from "../assets/yellow-circle.png";
import BlueSquare from "../assets/blue-sqr.png";
import Itbox from "../assets/itbox.png";
import Logo from "../assets/brainlogo.png";
import Boxes from "../assets/boxes.svg";
import SmallFigures from "../assets/figures-sm.svg";
import SmallScreenFigures from "../assets/smscreen-figures.svg";

export function Hero() {
  return (
    <>
      <div className=" hidden  bg-[#344150] md:flex items-center justify-between">
        <div className=" hidden xl:block xl:relative  ml-28 mr-2">
          <img
            src={Triangle}
            alt="Triangle figure"
            className="w-[95px] h-[102px] "
          />

          <img
            src={Circle}
            alt="Small red circle"
            className="w-[23.5px] h-[20.31px] absolute top-9 -left-9  "
          />

          <img
            src={YellowCircle}
            alt="Small yellow circle"
            className="w-[36.4px] h-[36.4px] absolute top-[70%] right-[135px] rotate-[0.74deg]"
          />
          <img
            src={BlueSquare}
            alt=" Blue Square"
            className="w-[46px] h-[40px] absolute  top-5 right-39"
          />
        </div>

        <div className="flex items-center flex-1 ">
          <div className="  max-w-[428px] flex-shrink-0 mr-5 relative">
            <img
              src={Pic}
              alt="Header Picture"
              className="w-full h-[278px] object-cover"
            />
            <img
              src={SmallFigures}
              alt="Small figures"
              className="w-40 h-50 absolute top-4 left-4 block xl:hidden z-10"
            />
          </div>
          <div className="sm:hidden md:flex flex-col  text-white  w-full  px-4 md:px-6 lg:px-0 ">
            <header
              className="font-bold  lg:text-[45px]  md:text-[34px] mb-3
          uppercase font-exo2  pt-9 break-words lg:max-w-[833px] md:max-w-[406px] leading-[40px] whitespace-normal "
            >
              ПРИЄДНУЙСЯ ДО НАШОЇ КОМАНДИ
            </header>
            <div className="flex flex-row  mb-7">
              <div className="font-exo2  text-[13px] font-normal md:text-[12px] max-w-full lg:max-w-[609px]  sm:max-w-[350px] md:max-w-[400px] flex-shrink ">
                <p>
                  Brain: понад чверть століття продаємо компʼютери, сучасні
                  гаджети та інші товари клієнтам, компаніям і державним
                  організаціям.
                </p>
                <p>
                  З 1995 року розвиваємо філіали гуртових і корпоративних
                  продажів в обласних центрах; мережу пунктів видачі онлайн
                  замовлень, яка нараховує понад 60 магазинів у 22 містах
                  України.
                </p>
                <p className="pt-4">
                  До нашої команди магазину, ми шукаємо продавця, яка (ий)
                  прагне більшого для своєї кар'єри.{" "}
                </p>
                <p>
                  70% нашого офісу та керівників починали з того, що читали цю
                  вакансію.
                </p>
                <p>
                  Ми навчимо всього і допоможемо, щоб твоя кар'єра була саме у
                  Brain.
                </p>
              </div>
              <div className=" ml-7 flex flex-col  md:flex-col-reverse lg:flex-col-reverse xl:flex-row xl:gap-3  flex-shrink-0 md:mb-3 lg:mb-3 relative">
                <div className="flex flex-col xl:gap-6 xl:max-w-[150px] md:max-w-[90px] lg:m-w-[90px] md:gap-1 lg:gap-1 absolute md:bottom-10 lg:bottom-10  xl:top-10">
                  <img src={Logo} alt="Brain logo" />
                  <img src={Itbox} alt="Itbox logo" />
                </div>
                <div className="flex  lg:max-w-[90px] md:max-w-[90px] xl:max-w-[130px] lg:p-2 md:mb-42 lg:mb-42 xl:mb-0  xl:ml-50">
                  <img src={Boxes} alt="Boxes image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col items-center justify-center bg-[#344150] ">
        <header
          className="font-bold  text-[38px] text-white 
          uppercase font-exo2 max-w-[385px] pb-2 text-center"
        >
          ПРИЄДНУЙСЯ ДО НАШОЇ КОМАНДИ
        </header>
        <div>
          <img
            src={SmallScreenFigures}
            alt="Small figures"
            className="max-w-[237px] h-[86.45px] mt-2  mx-auto"
          />
        </div>
        <img
          src={Pic}
          alt="Header Picture"
          className="mt-5 max-w-[360px] h-[234px] mx-auto"
        />
        <div className=" text-white font-exo2 text-[13px] max-w-[325px] mt-3  ">
          <p>
            Brain: понад чверть століття продаємо компʼютери, сучасні гаджети та
            інші товари клієнтам, компаніям і державним організаціям.
          </p>
          <p>
            З 1995 року розвиваємо філіали гуртових і корпоративних продажів в
            обласних центрах; мережу пунктів видачі онлайн замовлень, яка
            нараховує понад 60 магазинів у 22 містах України.
          </p>
          <p className="">
            До нашої команди магазину, ми шукаємо продавця, яка (ий) прагне
            більшого для своєї кар'єри. 70% нашого офісу та керівників починали
            з того, що читали цю вакансію. Ми навчимо всього і допоможемо, щоб
            твоя кар'єра була саме у Brain.
          </p>
        </div>
        <div
          className="flex flex-row  items-center justify-center
        pt-9 pb-10"
        >
          <div className="flex flex-col gap-3 max-w-[132.3px]">
            <img src={Logo} alt="Brain logo" />
            <img src={Itbox} alt="Itbox logo" />
          </div>
          <div className="max-w-[146px] h-[109px]">
            <img src={Boxes} alt="Boxes image" className="mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
