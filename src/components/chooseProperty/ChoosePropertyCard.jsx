import React from "react";


function ChoosePropertyCard({ImgUrl, title, description}) {

  const scroll = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="col px-6">
      <div onClick={scroll} href="#footer" className="card cursor-pointer w-full h-full rounded-xl overflow-hidden relative">
        <img
          src={ImgUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-overlay bg-[#0000007a] flex justify-center items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div>
            <h5 className="card-title uppercase text-3xl lg:text-4xl tracking-tight font-extrabold text-white">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoosePropertyCard;
