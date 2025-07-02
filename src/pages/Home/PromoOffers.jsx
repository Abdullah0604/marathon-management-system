import React from "react";

const offers = [
  {
    id: 1,
    title: "Summer Marathon Special",
    description:
      "Register for the summer marathon now and get 20% off on early bird tickets.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Group Discount Offer",
    description:
      "Register as a team of 5 or more and get 15% discount on total fees.",
    img: "https://images.unsplash.com/photo-1642008493187-9ea2bc75dd24?q=80&w=1178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Free T-Shirt on Registration",
    description:
      "Sign up now and get an exclusive RunNexus marathon T-shirt for free!",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80",
  },
];

const PromoOffers = () => {
  return (
    <section
      id="offers"
      className=" bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">
          Current Promotions & Offers
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map(({ id, title, description, img }) => (
            <div
              key={id}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img src={img} alt={title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoOffers;
