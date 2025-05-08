import Image from "next/image";
import { techstackdata } from "@/app/api/data";

function TechStackIcon({ name }) {
  const tech = techstackdata.find((item) => item.name === name);

  if (!tech || !tech.img || !tech.desc) {
    console.warn(
      `TechStackIcon: Data not found or missing img/desc for "${name}". Skipping this icon.`,
    );
    return null;
  }

  const { img, desc } = tech;

  return (
    <div className="relative w-[110px] h-[110px] m-[10px] group flex items-center justify-center">
      <Image
        src={img}
        alt={name}
        width={100}
        height={100}
        className="w-[100px] h-[100px] flex-shrink-0 object-contain"
      />

      <span
        className="
          absolute bg-black text-white w-[200px] top-[-80px]
          left-1/2 transform -translate-x-1/2 text-center p-2 rounded-md
          opacity-0 invisible transition-all duration-500 ease-in-out
          pointer-events-none z-10
          group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
        "
      >
        {desc}
      </span>
    </div>
  );
}

export default TechStackIcon;
