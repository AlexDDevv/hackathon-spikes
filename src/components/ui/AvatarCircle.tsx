import { cn } from "../../lib/utils";
 
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: string[];
}
 
const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {

  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className="h-8 w-8 rounded-full border-white dark:border-gray-800"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      <a
        className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-white bg-[#E7EAFF] text-center text-[8px] font-bold text-[#314EE7] hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
        href=""
      >
        {numPeople}+
      </a>
    </div>
  );
};
 
export default AvatarCircles;