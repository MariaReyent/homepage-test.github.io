import { data } from "../../data";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaBlackTie } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export function JobCard() {
  const cardData = Array.from({ length: 9 }, (_, i) => data[i % data.length]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 max-w-[1000px] w-full">
        {cardData.map((job, index) => (
          <div key={index}>
            <div className="bg-white shadow-md border-b-2 border-black rounded-br-lg max-w-[429px]hover:shadow-lg transition w-full mx-auto p-4  h-[169px] font-exo2 ">
              <p className="text-sm text-[#10B1E8] mb-5 ">{job.location}</p>
              <h2 className="text-lg font-bold text-gray-800 mb-1 flex items-center ">
                <FaCircleDot className="text-gray-400  text-[14px] mr-1" />
                {job.position || "Назва посади не вказана"}
              </h2>
              <p className="text-sm text-gray-600 mb-1 flex items-center ">
                <FaBlackTie className="text-gray-400 rounded-full mr-1" />
                {job.experience || "Не вказано"}
              </p>
              <p className="text-sm text-gray-600 flex items-center ">
                <FaLocationDot className="text-gray-400  mr-1" />
                {job.type}
              </p>
              <div className="flex flex-row justify-between">
                <p className="text-sm text-gray-400 mb-1 ml-4">
                  {job.compensation}
                </p>
                <button className="text-[#10B1E8] cursor-pointer flex items-center">
                  Детально
                  <MdOutlineKeyboardDoubleArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
        <button className="col-span-full mx-auto mt-4 bg-white text-gray-800 font-exo2 font-bold px-4 py-2 rounded cursor-pointer uppercase ">
          Всі Вакансії
        </button>
      </div>
    </div>
  );
}
