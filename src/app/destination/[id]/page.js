"use client";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import travelData from "@/data/travelData";

const DestinationPage = (params) => {
  const [selectedTravel, setSelectedTravel] = useState(null);

  useEffect(() => {
    const foundItem = travelData.find((item) => item.id === params.params.id);

    if (foundItem) {
      setSelectedTravel(foundItem);
    }
  }, []);

  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const options = [
    {
      id: 1,
      place: "Goa",
      price: "INR 180",
      dnt: "21 SEP  07:00 AM",
    },
    {
      id: 2,
      place: "Pune",
      price: "INR 300",
      dnt: "15 NOV  08:00 AM",
    },
    {
      id: 3,
      place: "Jaipur",
      price: "INR 400",
      dnt: "19 OCT  09:00 AM",
    },
  ];
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [travellers, setTravellers] = useState([
    { name: "", age: "", contact: "", email: "" },
  ]);

  const MAX_TRAVELLERS = 20;

  const handleAddTraveller = () => {
    if (travellers.length < MAX_TRAVELLERS) {
      setTravellers([...travellers, { name: "", age: "" }]);
    }
  };

  const handleRemoveTraveller = () => {
    if (travellers.length > 1) {
      setTravellers(travellers.slice(0, -1));
    }
  };

  const handleChange = (index, event) => {
    const updatedTravellers = [...travellers];
    updatedTravellers[index][event.target.name] = event.target.value;
    setTravellers(updatedTravellers);
  };

  // Booking detial

  const tripPricePerPerson = 180;
  const [totalPersons, setTotalPersons] = useState(1);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const totalPrice = 180 * totalPersons - totalDiscount;

  useEffect(() => {
    setTotalPersons(travellers.length);
  }, [travellers]);

  console.log("this is", selectedTravel);
  return (
    <>
      <Header />
      <section className="mt-12 px-32">
        <div className="flex gap-4 sm:gap-7 justify-between">
          <div className="flex flex-[0.62] h-fit p-2 sm:p-4 rounded-lg shadow-[rgba(61,_61,_61,_0.14)_0px_9px_16px]">
            <div className="relative min-w-[227px] h-[214px] overflow-hidden rounded-xl mr-2">
              <Image
                className="w-full h-full object-cover bg-center scale-[1.9]"
                src="/dummy-img1.jpeg"
                height={800}
                width={900}
                alt="snwo"
              />
              <div
                className=" absolute top-[0.8rem] right-4 text-red-600 bg-white rounded-full p-[0.29rem]"
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

            <div className="px-4 py-8 border-r-[1px] border-[#0000001e] flex flex-col gap-2">
              <h3 className="text-md font-semibold text-[#000000ed]">
                Snow Forest
              </h3>

              <div className="flex justify-between text-[0.65rem] text-[#000000b9] font-medium">
                <span>Start Date:2024-09-15</span>
                <span className="font-semibold">By J. Dupont</span>
              </div>
              <p className="text-[0.8rem] text-balance font-medium w-fit">
                Experience Paris's charm with tours of the Eiffel Tower, Louvre,
                and Montmartre.
              </p>
              <h4 className="text-sm text-[#1a7fc7] pt-4">
                Best Price Gaurantee
              </h4>
            </div>

            <div className="max-w-72 min-w-44 grid place-content-center">
              <h2 className="text-[0.9rem] text-[#2c2c2ce3] font-medium">
                4 Days 3 Nights
              </h2>
            </div>
          </div>

          <div className="flex-[0.32]">
            <div className=" flex flex-col justify-center items-center px-3 py-10 ">
              <div className="relative">
                <svg
                  className="absolute z-10 left-[-8px] top-[10px] scale-[1.6]"
                  width="100"
                  height="80"
                  viewBox="0 0 173 164"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="40"
                    y="7.71973"
                    width="46"
                    height="46"
                    rx="23"
                    fill="#0077CC"
                  />
                  <g clip-path="url(#clip0_1_679)">
                    <path
                      d="M68.3165 25.0586C67.1013 26.0382 65.9367 27.6545 64.7722 29.8586C63.6582 32.0627 63 34.4626 62.8481 37.0586H67.4557C67.4051 33.0912 68.6203 29.4668 71 26.1361L68.3165 25.0586ZM60.519 25.0586C59.2532 26.0382 58.0886 27.6545 56.924 29.8586C55.8101 32.0627 55.1519 34.4626 55 37.0586H59.6076C59.557 33.0912 60.7722 29.4178 63.2025 26.1361L60.519 25.0586Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_679">
                      <rect
                        width="16"
                        height="13"
                        fill="white"
                        transform="translate(55 24.2197)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div className="rounded-full bg-[#5dbaca59] w-fit overflow-hidden">
                  <Image
                    className="w-[119px] object-cover bg-center scale-[1.05]"
                    src="/paras-pundir.png"
                    height={300}
                    width={400}
                    alt="show "
                  />
                </div>
              </div>
              <span className="text-[0.88rem] pt-3 m-0">Paras Pundir</span>
              <div className="flex gap-1 mt-[-7px]">
                <span className="text-[24px] text-blue-500 ">&#9733;</span>
                <span className="text-[24px] text-blue-500 ">&#9733;</span>
                <span className="text-[24px] text-blue-500 ">&#9733;</span>
                <span className="text-[24px] text-blue-500">&#9733;</span>
                <span className="text-[24px] opacity-70">&#9734;</span>
              </div>
              <span className="text-[0.93rem] text-[#000000c3]">
                5 Trips Completed
              </span>
              <h2 className="font-semibold text-[1.15rem] text-[#2a2a2a] py-5">
                Message from Paras
              </h2>

              <div className="h-[100px]">
                <p className="text-[0.9rem] px-2 text-[#161616e6] text-center">
                  Irure est duis et nostrud.... Cons id labore ut id
                  cupidatateee qui ea sit irure pariatur duis laborum do in...
                  Aliquip enim in quis mollit in quis mollit eiusmod tempor non
                  occaecat cupidatat sunt anim excepteur...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex -mt-36">
          <div className="flex flex-col gap-4 sm:gap-7 justify-between w-full">
            <div className="flex gap-10 px-5 w-fit rounded-lg items-center shadow-[rgba(61,_61,_61,_0.12)_0px_9px_16px]">
              <div className="relative inline-block">
                <button onClick={toggleDropdown} className="w-full text-sm">
                  {selectedOption ? (
                    <div className="flex flex-col text-left mt-2">
                      <h2 className="text-sm">
                        Start Point: {selectedOption.place} -
                        {selectedOption.price}
                      </h2>
                      <span className="text-[0.6rem]">
                        {selectedOption.dnt}
                      </span>
                    </div>
                  ) : (
                    "Choose Starting Point <-"
                  )}
                </button>

                {isOpen && (
                  <div className="absolute bg-white z-30 mt-8 min-w-[20rem] rounded-xl overflow-hidden border-[1px] border-gray-200 shadow-[rgba(61,_61,_61,_0.14)_0px_9px_16px]">
                    <div className="">
                      {options.map((option) => (
                        <div
                          key={option.id}
                          onClick={() => handleSelect(option)}
                          className="flex justify-between cursor-pointer px-4 py-2 text-[0.64rem] text-gray-700 hover:bg-gray-100 border-b-[1px] border-gray-200"
                        >
                          <span className="flex-1">{option.place}</span>
                          <span className="flex-1">{option.price}</span>
                          <span className="flex-1">{option.dnt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <h2 className="text-sm">End Point: Rishikesh</h2>
                <span className="text-[0.6rem]">23 DEC 10:00 AM</span>
              </div>
            </div>

            <div className="flex  justify-between w-full">
              <div className="px-5 py-9 w-full">
                <h2 className="text-[0.99rem] font-semibold text-[#151515]">
                  Group Size: 20 Travellers
                </h2>
                <form>
                  <div className="text-[0.78rem] text-[#000000f4] font-medium py-3">
                    Number of travellers
                    <input
                      type="button"
                      value="-"
                      onClick={handleRemoveTraveller}
                      className="text-[1rem] ml-3 border-2 border-[#262626d4] rounded-full px-2 scale-[0.8] cursor-pointer"
                    />
                    <span className="px-1.5">{travellers.length}</span>
                    <button
                      type="button"
                      onClick={handleAddTraveller}
                      className="text-[1rem] border-2 border-[#262626d4] rounded-full px-[0.42rem] scale-[0.8] cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {travellers.map((traveller, index) => (
                    <div key={index} className="my-2">
                      <h3 className="font-semibold text-[0.92rem] text-[#151515] py-2">
                        Traveller {index + 1}
                      </h3>
                      <div className="my-4 flex gap-5 ">
                        <div className="flex flex-col gap-1">
                          <label className="text-[0.8rem] text-[#191919cf] font-medium">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={traveller.name}
                            onChange={(event) => handleChange(index, event)}
                            className="border-b border-gray-600 outline-none"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[0.8rem] text-[#191919cf] font-medium">
                            Age
                          </label>
                          <input
                            type="text"
                            name="age"
                            value={traveller.age}
                            onChange={(event) => handleChange(index, event)}
                            className="border-b border-gray-600 outline-none"
                          />
                        </div>
                      </div>

                      {index === 0 && (
                        <div className="my-4 flex gap-5">
                          <div className="flex flex-col gap-1">
                            <label className="text-[0.8rem] text-[#191919cf] font-medium">
                              Contact No.
                            </label>
                            <input
                              type="text"
                              name="contact"
                              value={traveller.contact}
                              onChange={(event) => handleChange(index, event)}
                              className="border-b border-gray-600 outline-none"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="text-[0.8rem] text-[#191919cf] font-medium">
                              Email ID
                            </label>
                            <input
                              type="text"
                              name="email"
                              value={traveller.email}
                              onChange={(event) => handleChange(index, event)}
                              className="border-b border-gray-600 outline-none"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </form>
              </div>

              <div className="w-[25rem] flex flex-col gap-4 text-[0.99rem] rounded-xl  my-20 border-2 border-[#2e2e2e0d] shadow-[rgba(61,_61,_61,_0.12)_0px_9px_16px] p-5">
                <div>
                  <h2 className="text-[#151515] font-semibold">
                    Payment Details
                  </h2>
                  <table className="flex flex-col w-[70%]  font-normal text-[#232222e3] py-2">
                    <tr className="flex justify-between">
                      <td className="py-1 text-[0.83rem]">
                        Trip price per person:
                      </td>
                      <td className="py-1 font-bold text-[0.9rem]">
                        ₹ {tripPricePerPerson}
                      </td>
                    </tr>
                    <tr className="flex justify-between">
                      <td className="py-1 text-[0.83rem]">
                        Total person(s) in booking:
                      </td>
                      <td className="py-1 font-bold text-[0.9rem]">
                        {totalPersons}
                      </td>
                    </tr>
                    <tr className="flex justify-between">
                      <td className="py-1 text-[0.83rem]">Total discount: </td>
                      <td className="py-1  text-[0.9rem] font-bold">
                        ₹ {totalDiscount}
                      </td>
                    </tr>
                    <tr className="flex justify-between">
                      <td className="py-1 text-[0.83rem]">Total price:</td>
                      <td className="py-1 text-[0.9rem] font-bold">
                        ₹{totalPrice}
                      </td>
                    </tr>
                  </table>
                </div>

                <div>
                  <h2 className="text-[#151515] font-semibold">Payment Via</h2>
                  <div className="flex flex-col gap-2 px-1 text-sm text-[#232222e3] py-2">
                    <div className="flex gap-2 ">
                      <input type="radio" name="payment_gateway_option" />
                      <label>Razorpay</label>
                    </div>
                    <div className="flex gap-2">
                      <input type="radio" name="payment_gateway_option" />
                      <label>Phonepay</label>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t-[1px] border-[#3d3d3d7a]">
                  <h2 className="text-[#151515] font-semibold  py-2">
                    Grand Total:
                  </h2>
                  <h2 className="text-[#151515] font-bold  py-2">
                    ₹ {totalPrice}
                  </h2>
                </div>

                <div>
                  <button className="text-white text-[1rem] bg-[#1c90c6] px-12 py-3 rounded-full">
                    Book now
                  </button>
                </div>

                <p className="text-[0.877rem] p-1 text-[#232222e3]">
                  By clicking on the book now you confirm that all the details
                  provided by you are correct and accepting our TnC &
                  Cancellation Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(DestinationPage), { ssr: false });
