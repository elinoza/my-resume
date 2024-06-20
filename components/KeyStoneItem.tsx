import clsx from "clsx";
type KeyStonesItemProps = {
  keyStones: any;
  stone: string;
};
const KeyStoneItem = ({ keyStones, stone }: KeyStonesItemProps) => {
  return (
    <div className="relative mb-3 break-inside-avoid">
      <div
        className={clsx(
          stone !== "BigBang" && "grayscale",
          "h-80 overflow-hidden sm:h-auto",
        )}
      >
        <img
          src={keyStones[stone]?.imgSrc}
          alt={stone}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="card-content absolute bottom-0 left-0 right-0 top-[50%] flex flex-col justify-end p-2">
        <span className="text-sm font-medium text-stone-300 drop-shadow-lg">
          {keyStones[stone]?.date}
        </span>
        <h1 className="font-medium">{keyStones[stone]?.heading}</h1>
        <p className="text-stone-200 drop-shadow-lg">
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
            className="text-stone-400 drop-shadow-lg hover:text-white"
          >
            {keyStones[stone]?.detail}
          </a>
        )}
      </div>
    </div>
  );
};
export default KeyStoneItem;
