import React from "react";

export default function JobsContainer({ data }) {
  const [open, setOpen] = React.useState("hidden");

  const openItem = () => {
    open === "hidden" ? setOpen("block") : setOpen("hidden");
  };

  const convertDate = (date) => {
    const converted = new Date(date);
    const strin = converted.toString();
    const spl = strin.split(" ");
    const newArr = [spl[2], spl[1], spl[3]];
    const newDate = newArr.join("/");
    return newDate;
  };

  return (
    <div className="w-full p-2">
      <div className=" text-center text-gray-500 rounded-lg shadow-md">
        <p onClick={() => openItem()} className="cursor-pointer p-2">
          {data.title}
        </p>
      </div>
      <div
        className={`${open} bg-white my-2 py-2 overflow-auto rounded-lg shadow-lg`}
      >
        <div className="m-2">
          <div className="w-full flex flex-col m-1 justify-center items-center">
            <p>
              <h5>Conteúdo:</h5>
              {data.content}
            </p>
          </div>
          <div className="flex justify-evenly items-center">
            <p>Data: {convertDate(data.createdAt)} </p>
            <p>Status: {data.status.toString()}</p>
            <p>Techs: {data.techs.toString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
