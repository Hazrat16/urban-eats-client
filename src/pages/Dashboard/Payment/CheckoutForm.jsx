import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [ccv, setCcv] = useState("");
  const [cardName, setCardName] = useState("");
  const [cart] = useCart();
  const [paymentButtonDisable, setPaymentButtonDisable] = useState(false);

  const flipCard = (flip) => {
    setIsFlipped(
      flip === "flip" ? !isFlipped : flip === "flipToFront" ? false : true
    );
  };

  const handleCardNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, "");
    let formattedInput = "";
    for (let i = 0; i < input.length; i++) {
      if (i % 4 === 0 && i > 0) {
        formattedInput += " ";
      }
      formattedInput += input[i];
    }
    setCardNumber(formattedInput);
  };

  const handleExpDateChange = (event) => {
    const input = event.target.value.replace(/\D/g, "");
    let formattedInput = "";
    for (let i = 0; i < input.length; i++) {
      if (i % 2 === 0 && i > 0) {
        formattedInput += "/";
      }
      formattedInput += input[i];
    }
    setExpDate(formattedInput);
  };

  const handleCCVChange = (event) => {
    setCcv(event.target.value.replace(/\D/g, ""));
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Payment gateway is not implemented yet",
    });
  };

  useEffect(() => {
    const isCardNumberValid = cardNumber.trim().length == 0;
    const isExpDateValid = expDate.trim().length == 0;
    const isCcvValid = ccv.trim().length == 0;
    const isCardNameValid = cardName.trim().length == 0;

    if (
      !isCardNumberValid &&
      !isExpDateValid &&
      !isCcvValid &&
      !isCardNameValid
    ) {
      setPaymentButtonDisable(false);
    } else {
      setPaymentButtonDisable(true);
    }
  }, [cardNumber, expDate, ccv, cardName]);

  return (
    <main className="flex min-h-screen flex-col items-center  p-8 lg:p-24 bg-slate-100">
      <h1 className="text-xl font-bold">Total Price: {totalPrice}</h1>

      <form className="bg-white w-full max-w-3xl mx-auto my-8 px-6 py-8 shadow-md rounded-md flex">
        <div className="w-1/2 pr-8 border-r-2 border-slate-300">
          <label className="text-neutral-800 font-bold text-sm mb-2 block">
            Card number:
          </label>
          <input
            type="text"
            className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
            id="cardNumber"
            onChange={handleCardNumberChange}
            maxLength="19"
            placeholder="XXXX XXXX XXXX XXXX"
            value={cardNumber}
          />
          <div className="flex gap-x-2 mb-4">
            <div className="flex-1">
              <label className="text-neutral-800 font-bold text-sm mb-2 block">
                Exp. date:
              </label>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
                id="expDate"
                onChange={handleExpDateChange}
                value={expDate}
                maxlength="5"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label className="text-neutral-800 font-bold text-sm mb-2 block">
                CCV:
              </label>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
                id="ccvNumber"
                onChange={handleCCVChange}
                value={ccv}
                maxlength="3"
                placeholder="123"
                onFocus={() => flipCard("flip")}
                onBlur={() => flipCard("flipToFront")}
              />
            </div>
          </div>

          <label className="text-neutral-800 font-bold text-sm mb-2 block">
            Card holder:
          </label>
          <input
            type="text"
            className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="cardName"
            onChange={handleCardNameChange}
            value={cardName}
            placeholder="John Doe"
          />
        </div>
        <div className="w-1/2 pl-8">
          <div className="w-full h-56" style={{ perspective: "1000px" }}>
            <div
              id="creditCard"
              className={`creditCard relative cursor-pointer transition-transform duration-500 ${
                isFlipped ? "rearIsVisible" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => flipCard("flip")}
            >
              {/* Card Front */}
              <div
                className="w-full m-auto rounded-xl shadow-2xl absolute"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src="https://i.ibb.co/swnZ5b1/Front-Side-Card.jpg"
                  className="relative object-cover w-full h-full rounded-xl"
                  alt="Card Front"
                />
                <div className="w-full px-8 absolute top-8 text-white">
                  {/* Card Front Content */}
                  <div>
                    <p className="font-light">Card Number</p>
                    <p className="font-medium tracking-more-wider h-6">
                      {cardNumber}
                    </p>
                  </div>
                  <div className="pt-6 flex justify-between">
                    <div>
                      <p className="font-light">Name</p>
                      <p className="font-medium tracking-widest h-6">
                        {cardName}
                      </p>
                    </div>
                    <div>
                      <p className="font-light">Expiry</p>
                      <p className="font-medium tracking-wider h-6 w-14">
                        {expDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card Rear */}
              <div
                className="w-full m-auto rounded-xl shadow-2xl absolute"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <img
                  src="https://i.ibb.co/Fn11jBc/Rear-Side-Card.jpg"
                  className="relative object-cover w-full h-full rounded-xl"
                  alt="Card Rear"
                />
                <div className="w-full absolute top-8">
                  {/* Card Rear Content */}
                  <div className="px-8 mt-12">
                    <p className="text-black flex items-center pl-4 pr-2 w-14 ml-auto">
                      {ccv}
                    </p>
                    <p className="text-white font-light flex justify-end text-sm mt-2">
                      security code
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <button
        className="btn btn-md btn-primary my-4 w-3/4"
        type="submit"
        onClick={handleSubmit}
        disabled={paymentButtonDisable}
      >
        Pay
      </button>
    </main>
  );
};

export default CheckoutForm;

