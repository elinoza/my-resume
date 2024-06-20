import clsx from "clsx";
type KeyStonesItemProps = {
  keyStones: any;
  stone: string;
};
const KeyStoneItem = ({ keyStones, stone }: KeyStonesItemProps) => {
  return (
    <div className="mb-3 break-inside-avoid relative  ">
      <div
        className={clsx(
          stone !== "BigBang" && "grayscale",
          "overflow-hidden h-80 sm:h-auto"
        )}
      >
        <img
          src={keyStones[stone]?.imgSrc}
          alt={stone}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="card-content absolute flex flex-col top-[50%] justify-end p-2 bottom-0 left-0 right-0   ">
        <span className=" text-stone-300 drop-shadow-lg text-sm font-medium">
          {keyStones[stone]?.date}
        </span>
        <h1 className="font-medium">{keyStones[stone]?.heading}</h1>
        <p className="text-stone-200 drop-shadow-lg ">
          {keyStones[stone]?.description}
        </p>
        {!keyStones[stone]?.website ? (
          <p className="text-stone-200 drop-shadow-lg">
            {keyStones[stone]?.detail}
          </p>
        ) : (
          <a
            href={keyStones[stone]?.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-white drop-shadow-lg "
          >
            {keyStones[stone]?.detail}
          </a>
        )}
      </div>
    </div>
  );
};
export default KeyStoneItem;
