import SidebarDot from "../sidebarItem/SidebarDot";

const SidebarContent = () => {
  return (
    <ul className="hidden sm:flex flex-col gap-[10px]">
      <SidebarDot color="bg-green-500" text="Website Design" />
      <SidebarDot color="bg-orange-500" text="Mobile App Design" />
      <SidebarDot color="bg-purple-200" text="Graphic Editing" />
      <SidebarDot color="bg-blue-400" text="Deployment" />
    </ul>
  );
};

export default SidebarContent;
