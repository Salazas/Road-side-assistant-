import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useRecord } from "../features/bookings/useRecord";
import useEditRecord from "../features/bookings/useEditRecord";

import Loader from "../ui/Loader";
import VehicleCard from "../components/VehicleCard";
import GeoLocation from "../components/GeoLocation";
import { SlLocationPin } from "react-icons/sl";

const BookedService = () => {
  const { record, isLoading } = useRecord();
  const navigate = useNavigate();

  const [isProceed, setIsProceed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const { editRecord } = useEditRecord();

  if (isLoading) {
    return <Loader />;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleProceed = () => {
    setIsProceed(true);
  };

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const handleConfirm = () => {
    editRecord({
      ...record,
      isPaid: true,
      paymentMethod,
    });
  };

  return (
    <div className="relative flex h-full flex-col gap-8 p-4 text-gray-800">
      <div className="relative flex w-full items-center justify-between gap-4 rounded-full bg-gray-900 py-2 text-yellow-300">
        <LiaLongArrowAltLeftSolid
          onClick={handleBack}
          className="absolute left-2 cursor-pointer text-4xl"
        />
        <h2 className="mx-auto text-lg font-normal">{record.title}</h2>
      </div>

      <div className="flex w-full flex-col gap-10 pb-6">
        <VehicleCard vehicle={record.vehicle} isGarage={false} />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="location" className="font-semibold">
              Location
            </label>
            <div className="h-18 min-h-18 flex items-center justify-between gap-2 rounded-md bg-gray-50 p-2 text-gray-900">
              <SlLocationPin className="text-3xl" />
              <GeoLocation
                handleGeoLocation={() => {}}
                coords={[record.latitude, record.longitude]}
              />
            </div>
          </div>

          {/* isPaid */}
          <div className="flex flex-col gap-2">
            {record.isPaid ? (
              <div className="rounded-lg bg-gray-100 p-2 text-gray-500">
                <p className="text-md font-semibold">Price</p>
                <p className="text-xl font-semibold">{record.price},000 UZS</p>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <p className="text-md font-semibold">Service Price</p>
                <p className="rounded-lg bg-slate-50 p-4 text-xl font-semibold">
                  {record.price},000 UZS
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isProceed && (
        <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col gap-10 bg-[#F7F7F7] p-4">
          <div className="relative flex w-full items-center justify-between gap-4 rounded-full bg-gray-900 py-2 text-yellow-300">
            <LiaLongArrowAltLeftSolid
              onClick={() => setIsProceed(false)}
              className="absolute left-2 cursor-pointer text-4xl"
            />
            <h2 className="mx-auto text-lg font-normal">
              Back to {record.title}
            </h2>
          </div>

          <div className="flex h-fit flex-col  gap-2 text-gray-800">
            <h2 className="font-semobild text-lg">Methods</h2>

            <div className="flex justify-between sm:justify-start sm:gap-4">
              <img
                src="/payment/payme.png"
                alt="Payme"
                className={`rounded-lg border bg-white ${
                  paymentMethod === "payme" ? "border-gray-800" : ""
                }`}
                onClick={() => handlePaymentMethod("payme")}
              />
              <img
                src="/payment/click.png"
                alt="Click"
                className={`rounded-lg border bg-white ${
                  paymentMethod === "click" ? "border-gray-800" : ""
                }`}
                onClick={() => handlePaymentMethod("click")}
              />
              <img
                src="/payment/humo.png"
                alt="humo"
                className={`rounded-lg border bg-white ${
                  paymentMethod === "humo" ? "border-gray-800" : ""
                }`}
                onClick={() => handlePaymentMethod("humo")}
              />
              {/* cash */}
              <span className="flex items-center gap-2">
                <span
                  className={`flex h-16 items-center justify-center rounded-lg border bg-white p-2 ${
                    paymentMethod === "cash" ? "border-gray-800" : ""
                  }`}
                  onClick={() => handlePaymentMethod("cash")}
                >
                  Cash on delivery
                </span>
              </span>
            </div>
          </div>

          <div className="h-fit w-full rounded-lg bg-white">
            <div className="flex h-full w-full flex-col gap-4 p-4">
              <h2 className="text-lg font-semibold">Payment</h2>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Card number"
                  className="rounded-md border p-2"
                  defaultValue="8600 1234 5678 9012"
                  disabled
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 rounded-md border p-2"
                    defaultValue="12/23"
                    disabled
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-1/2 rounded-md border p-2"
                    defaultValue="123"
                    disabled
                  />
                </div>
              </div>
              <span className="h-[1px] w-full bg-gray-100"></span>
              <div className="flex flex-col gap-2">
                <p className="text-md font-light">Service Price</p>
                <p className="text-xl font-semibold">{record.price},000 UZS</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!record.isPaid && (
        <div className="fixed bottom-0 left-0 z-10 flex h-16 w-full items-center justify-between bg-gray-900 p-4 sm:absolute">
          <button
            className="w-full border py-2 text-white"
            type="button"
            onClick={isProceed ? handleConfirm : handleProceed}
          >
            {isProceed ? "Confirm" : "Pay for service"}
          </button>
        </div>
      )}
    </div>
  );
};

export default BookedService;
