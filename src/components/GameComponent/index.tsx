"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

const GameComponent = ({
  _id,
  name,
  image,
  stock,
}: {
  _id: string;
  name: string;
  image: StaticImageData | string;
  stock?: boolean;
}) => {
  const router = useRouter();

  const handleTopUp = () => {
    // if (!stock) return;
    router.push(`/product/${_id}`);
  };
  return (
    <div onClick={handleTopUp} className="text-white hover:opacity-90 transition bg-gradient-to-b from-golden-600/40 via-golden-700/20 to-card-bg h-auto p-3 rounded-lg overflow-hidden border border-golden-600/20 hover:border-golden-500/40 hover:shadow-lg hover:shadow-golden-900/30">
      <div className="flex   flex-col">
        <div className="w-full h-[80%]">
          <Image
            src={image}
            alt={name}
            priority={true}
            height={150}
            width={150}
            className={`rounded-lg md:w-full h-auto aspect-square object-cover ${!stock ? "grayscale" : ""
              }`}
          />
        </div>
        <div className="h-[20%]">
          <div className="mt-2 font-bold md:text-sm text-xs ">{name}</div>
          <button
            disabled={!stock}
            className="mt-2 float-end w-full bg-gradient-to-r from-golden-500 to-golden-600 hover:from-golden-400 hover:to-golden-500 text-black font-bold md:text-lg text-xs md:py-2 py-1 rounded-lg transition-all duration-300 shadow-md shadow-golden-900/30">
            Top Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameComponent;
