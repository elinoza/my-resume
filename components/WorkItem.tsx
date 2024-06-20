import clsx from "clsx";

type WorkItemProps = {
  work: any;
};

const WorkItem = ({ work }: WorkItemProps) => {
  return (
    <a
      className="group rounded-xl py-3"
      href={work?.WebUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        {" "}
        <h1 className="mb-2 text-xl font-[400]">{work?.projectName}</h1>
        <p className="text-stone-500 group-hover:text-black">
          {work?.Description}{" "}
        </p>
      </div>

      <div className="mt-4 flex items-center space-x-3">
        {work?.Tools.map((tool: string, index: number) => (
          <span className="flex items-center text-xs" key={index}>
            <div
              className={clsx(
                {
                  "bg-blue-500": tool === "Typescript",
                  "bg-orange-500": tool === "NextJS",
                  "bg-yellow-500": tool === "ReactJS",
                  "bg-green-500": tool === "MongoDB",
                  "bg-rose-500": tool === "ExpressJS",
                },
                "mr-1 inline-block h-2 w-2 rounded-sm",
              )}
            ></div>
            {tool}
          </span>
        ))}
      </div>
    </a>
  );
};
export default WorkItem;
