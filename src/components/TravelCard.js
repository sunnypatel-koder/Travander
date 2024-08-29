"use client";
import Image from "next/image";
import Link from "next/link";

export default function TravelCard({
  destinationId,
  destination,
  title,
  startDate,
  guide,
  duration,
  price,
}) {
  // const formattedDestination = destination.toLowerCase().replace(/\s+/g, "-");
  // const formattedDate = startDate.replace(/-/g, "");

  // const finalUrl = `/destination/${destinationId}-${formattedDestination}-${formattedDate}`;
  const finalUrl = `/destination/${destinationId}`;

  return (
    <Link href={finalUrl}>
      <div
        className="p-2 rounded-xl max-w-[245px] h-full flex flex-col gap-2"
        style={{
          boxShadow:
            "0px 1px 1px -0.5px rgba(0,0,0,0.06), 0px 3px 3px -1.5px rgba(0,0,0,0.06), 0px 6px 6px -3px rgba(0,0,0,0.06), 0px 12px 12px 2px rgba(0,0,0,0.01), 0px 24px 24px 3px rgba(0,0,0,0.06)",
        }}
      >
        <div className="relative">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/dummy-img1.jpeg"
              className=" object-cover h-[10.6rem] bg-center scale-[2.3]"
              alt="snow"
              height="800"
              width="850"
            />
          </div>
          <div
            className=" absolute bottom-[-0.7rem] right-4 text-red-600 bg-white rounded-full p-[0.29rem]"
            style={{
              boxShadow:
                "0px 1px 1px -0.5px rgba(0,0,0,0.03), 0px 3px 3px -1.5px rgba(0,0,0,0.03), 0px 6px 6px -3px rgba(0,0,0,0.03), 0px 12px 12px 2px rgba(0,0,0,0.01), 0px 24px 24px 3px rgba(0,0,0,0.03)",
            }}
          >
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="#000000"
                  stroke-width="1.584"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col p-1 justify-between h-full gap-[0.27rem]">
          <span className="text-[0.6rem]">{destination}</span>
          <p className="text-[0.83rem] font-medium">{title}</p>
          <div className="flex justify-between text-[0.62rem]">
            <span>Start Date:{startDate}</span>
            <span className="font-medium">By {guide}</span>
          </div>
          <hr className="mt-1 mb-1" />
          <div className="flex justify-between text-[0.62rem]">
            <span>{duration}</span>
            <span className="text-[0.67rem] font-medium">{price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
