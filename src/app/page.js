// import Image from "next/image";

import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import TravelCard from "@/components/TravelCard";
import travelData from "@/data/travelData";

export default function Home() {
  return (
    <main className="">
      {/* <main className="min-h-screen"> */}
      <Header />
      <SearchBox />
      <div className="max-w-custom-lg m-auto flex flex-wrap gap-7">
        {travelData.map(
          ({
            id,
            destinationName,
            title,
            startDate,
            guideName,
            duration,
            pricePerPerson,
          }) => (
            <TravelCard
              key={id}
              destinationId={id}
              destination={destinationName}
              title={title}
              startDate={startDate}
              guide={guideName}
              duration={duration}
              price={pricePerPerson}
            />
          )
        )}
      </div>
    </main>
  );
}
