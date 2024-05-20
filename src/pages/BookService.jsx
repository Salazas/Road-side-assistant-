import { useNavigate, useParams } from "react-router-dom";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import BookServiceForm from "../forms/BookServiceForm";

const services = [
  {
    id: "1",
    name: "Towing Service",
    icon: "/services/service-1.png",
  },
  {
    id: "2",
    name: "Fuel Delivery",
    icon: "/services/service-2.png",
  },
  {
    id: "3",
    name: "Battery Jumpstart",
    icon: "/services/service-3.png",
  },
  {
    id: "4",
    name: "Diagnostic Services",
    icon: "/services/service-4.png",
  },
  {
    id: "5",
    name: "Battery Replacement",
    icon: "/services/service-5.png",
  },
  {
    id: "6",
    name: "Car Lockout",
    icon: "/services/service-6.png",
  },
];

const BookService = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate(-1);
  };

  if (!id) {
    navigate("/services");
  }

  const service = services.find((service) => service.id === id);

  return (
    <div className="flex h-full flex-col gap-8 p-4 text-gray-800">
      <div className="relative flex w-full items-center justify-between gap-4 rounded-full bg-gray-900 py-2 text-yellow-300">
        <LiaLongArrowAltLeftSolid
          onClick={handleBack}
          className="absolute left-2 cursor-pointer text-4xl"
        />
        <h2 className="mx-auto text-lg font-normal">{service.name}</h2>
      </div>

      <BookServiceForm serviceTitle={service.name} />
    </div>
  );
};

export default BookService;
