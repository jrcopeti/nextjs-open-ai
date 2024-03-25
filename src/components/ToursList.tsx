import ToursCard from "./ToursCard";
import { ToursListProps } from "./TourInfo";

function ToursList({ tours }: { tours: ToursListProps[] }) {
  if (tours.length === 0) return <h4 className="text-lg">No tours found...</h4>;

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {tours.map((tour) => {
        return <ToursCard key={tour.id} tour={tour} />;
      })}
    </div>
  );
}

export default ToursList;
