import React from "react";
import collectionThumb from "../../assets/images/collection-1.jpg";
import collectionThumb2 from "../../assets/images/collection-2.jpg";

const BeautyOfferBanner = () => {
  return (
    <section className="pt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <div className="relative bg-gray-100 p-6 rounded-lg overflow-hidden">
              {/* Use the Image component for optimized image loading */}
              <img
                src={collectionThumb}
                alt="Foundation and Powder Brush"
                layout="fill"
                objectFit="cover"
              />
              {/* <div
                className="absolute inset-0 bg-black bg-opacity
-25"
              ></div> */}
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-sm text-gray-200 block">
                  Cosmetics Collection
                </span>
                <h3 className="text-2xl font-bold text-white">
                  <a href="/shop">Foundation and powder brush</a>
                </h3>
                <a
                  href="/shop"
                  className="mt-4 inline-block bg-white text-black py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                >
                  Discover Now
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <div className="relative bg-gray-100 p-6 rounded-lg overflow-hidden">
              {/* Use the Image component for optimized image loading  */}
              <img
                src={collectionThumb2}
                alt="Tops Blouse Shirts"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">
                  <a href="/shop">Tops Blouse Shirts</a>
                </h3>
                <a
                  href="/shop"
                  className="mt-4 inline-block bg-white text-black py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyOfferBanner;
