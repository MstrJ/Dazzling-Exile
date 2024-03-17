import React from "react";

const AboutUsPage = () => {
  return (
    <div className="size-screen fr relative  snap-center snap-always">
      <div className="h-full basis-1/2 fc pl-8 pr-32 py-28 space-y-12">
        <div className="text-7xl font-[500] space-y-3">
          <p>Are you ready to</p>
          <div className="text-gradient w-fit">Dazzle</div>
          <p>your mind?</p>
        </div>
        <div className="space-y-6 text-2xl pt-6">
          <p className="text-balance">
            We can guarantee you an amazing experience by using Dazzling Exile.
            <br /> No one has ever used it but let us gain your trust.
          </p>{" "}
          <p className="italic text-gradient w-fit">
            Remember, we are your blessing.
          </p>
        </div>
      </div>
      {/* <div className="h-full basis-1/2 bg-gray-900 "></div> */}
    </div>
  );
};

export default AboutUsPage;
