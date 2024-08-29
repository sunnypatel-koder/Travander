export default function SearchBox() {
  return (
    <div className="flex justify-center mt-12 mb-20">
      <div className="flex items-center gap-5 w-fit py-10 px-7 mx-5 rounded-full shadow-[0_6px_15px_rgb(0,0,0,0.06)]">
        <div className="text-[0.65rem] font-bold text-[#000000cb]">
          Select any one
        </div>
        <div className="flex gap-[2.1rem]">
          <div className="flex leading-[1.29rem] gap-1">
            <svg
              width="22.6px"
              height="18.8px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(45)"
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
                  d="M12.0005 18.9998V11.9998M12.292 19.0845L19.2704 21.4207C19.8173 21.6038 20.0908 21.6953 20.2594 21.6296C20.4059 21.5726 20.517 21.45 20.5594 21.2987C20.6082 21.1244 20.4903 20.8613 20.2545 20.3349L12.766 3.6222C12.5354 3.1075 12.4201 2.85015 12.2594 2.77041C12.1199 2.70113 11.956 2.70087 11.8162 2.7697C11.6553 2.84892 11.5392 3.1059 11.3069 3.61986L3.75244 20.3359C3.51474 20.8619 3.39589 21.1248 3.44422 21.2993C3.48619 21.4508 3.59697 21.5737 3.74329 21.6312C3.91178 21.6974 4.18567 21.6064 4.73346 21.4246L11.786 19.0838C11.8799 19.0527 11.9268 19.0371 11.9749 19.0309C12.0175 19.0255 12.0606 19.0255 12.1032 19.0311C12.1512 19.0374 12.1981 19.0531 12.292 19.0845Z"
                  stroke="#1c1c1c"
                  stroke-width="1.584"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
            <div>
              <h3 className="font-semibold text-[15px] text-[#131313f7]">
                Select Location
              </h3>
              <select className="text-[14.9px] font-medium text-[#1313138d] w-full">
                <option>Location</option>
              </select>
            </div>
          </div>
          <div className="flex leading-[1.29rem] gap-1">
            <svg
              className="mt-[1.3px]"
              width="22px"
              height="19.7px"
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
                <g id="style=linear">
                  {" "}
                  <g id="profile">
                    {" "}
                    <path
                      id="vector"
                      d="M12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11Z"
                      stroke="#1c1c1c"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                    <path
                      id="rec"
                      d="M5 18.5714C5 16.0467 7.0467 14 9.57143 14H14.4286C16.9533 14 19 16.0467 19 18.5714C19 20.465 17.465 22 15.5714 22H8.42857C6.53502 22 5 20.465 5 18.5714Z"
                      stroke="#1c1c1c"
                      stroke-width="1.5"
                    />{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>

            <div>
              <h3 className="font-semibold text-[15px] text-[#131313f7]">
                Select Traveler
              </h3>
              <select className="text-[14.9px] text-[#3392d6] font-medium w-full">
                <option>Neelabh</option>
              </select>
            </div>
          </div>
          <div className="flex leading-[1.29rem] gap-1">
            <svg
              className="mt-[1.4px]"
              width="23px"
              height="21px"
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
                <g id="Calendar / Calendar_Days">
                  {" "}
                  <path
                    id="Vector"
                    d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z"
                    stroke="#1c1c1c"
                    stroke-width="1.584"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>{" "}
              </g>
            </svg>
            <div>
              <h3 className="font-semibold text-[15px] text-[#131313f7]">
                Select Date
              </h3>
              <select className="text-[14.9px] font-medium text-[#1313138d] w-full">
                <option>Date</option>
              </select>
            </div>
          </div>
        </div>
        <div className="pl-4 pr-8">
          <svg
            className="cursor-pointer"
            width="32px"
            height="27px"
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
                d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#3392d6"
                stroke-width="1.584"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
