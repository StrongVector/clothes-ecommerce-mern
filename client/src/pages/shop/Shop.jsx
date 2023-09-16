import { useEffect, useState } from "react";
import { useProductContext } from "../../contexts/productContext";
import NavBar from "../../components/NavBar";
import { ProductCard } from "./productCard";
import { Loading } from "../../components/Loading";
import { ShopNavigation } from "./ShopNavigation";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import { SortButton } from "./SortButton";

const ShopPage = () => {
  const { category, setCategory, allCategories } = useProductContext();

  // getting current url path
  const location = useLocation();

  // function to change products displayed when there is a change in url path.
  const changeProducts = () => {
    let {
      shirts,
      bottoms,
      knits,
      sweaters,
      outwear,
      denim,
      footwear,
      accessories,
    } = allCategories;
    location.pathname.includes("shirt") && setCategory(shirts);
    location.pathname.includes("bottom") && setCategory(bottoms);
    location.pathname.includes("knit") && setCategory(knits);
    location.pathname.includes("sweater") && setCategory(sweaters);
    location.pathname.includes("outwear") && setCategory(outwear);
    location.pathname.includes("denim") && setCategory(denim);
    location.pathname.includes("footwear") && setCategory(footwear);
    location.pathname.includes("accessories") && setCategory(accessories);
  };

  useEffect(() => {
    if (allCategories) {
      changeProducts();
    }
  }, [allCategories, location.pathname]);

  return (
    <div className="bg-[#EDF0F8] min-h-screen overflow-x-hidden ">
      <NavBar />
      <section className="products-section flex flex-row p-5 mb-8 ">
        <ShopNavigation />
        <div className="products-container md:w-4/5 flex flex-col gap-2 md:items-end">
          <SortButton />
          {category ? (
            <ul className="products-list md:h-[80vh] md:overflow-y-auto md:pl-5 ml-0  justify-end  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3 lg:grid-cols-3 ">
              {category.map((item) => (
                <ProductCard item={item} key={item._id} />
              ))}
            </ul>
          ) : (
            <div className="loading-screen w-screen flex justify-center">
              <Loading />
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ShopPage;
