import CalendarIcon from "../../assets/icons/calendar.svg";
import SearchIcon from "../../assets/icons/search.svg";
import NotificationIcon from "../../assets/icons/notification.svg";
import QuestionIcon from "../../assets/icons/question.svg";

const Navbar = () => {
  return (
    <div className="h-20 flex items-center justify-center text-gray-500">
      <div className="w-full p-4 flex items-center justify-between">
        <div className="hidden md:flex items-center rounded-md bg-gray-100 px-4 py-2 ml-8">
          <img src={SearchIcon} alt="" />
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-[471px] h-[11px] hidden md:block outline-none bg-gray-100 p-3 ml-3"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center mr-6">
            <img src={CalendarIcon} alt="" />
          </div>
          <div className="flex items-center justify-center mr-6">
            <img src={QuestionIcon} alt="" />
          </div>
          <div className="flex items-center justify-center mr-8">
            <img src={NotificationIcon} alt="" />
          </div>

          <div className="flex items-center gap-3 mr-8">
            <div className="hidden my-0 mx-[10px] lg:flex flex-col gap-[3px] items-end">
              <span className="text-base font-normal text-black">
                Chandan S
              </span>
              <span className="text-sm font-normal text-grey">22BCE3122</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
