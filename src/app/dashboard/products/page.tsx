"use client";
import { useEffect, useState } from "react";
import Products from "@/components/Dashboard/Products";
import Loader from "@/components/Loader";
import axios from "axios";

const Page = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productsList, setProductsList] = useState([]);
  const [ghorProductsList, setGhorProductsList] = useState([]);

  // Fetch products data on the client side using useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`/api/product`);

        if (!res.data) {
          throw new Error("Failed to fetch products");
        }

        const data = res.data;
        setAllProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    // app/actions/mlbb-topup.ts

    const getGhorProductList = async () => {
      try {
        const topupResponse = await axios.get(`/api/unipin/fetch-products`);
        const topupData = topupResponse.data;
        console.log(topupData);
        setGhorProductsList(topupData);
      } catch (error) {
        console.error("Error fetching topup data:", error);
        setGhorProductsList([]);
      }
    };

    const fetchProductsList = async () => {
      try {
        const res = await axios.get(`/api/productslist`);
        if (!res.data) {
          throw new Error("Failed to fetch products list");
        }
        setProductsList(res.data);
      } catch (error) {
        console.error(error);
        setProductsList([]);
      }
    };

    fetchProductsList();
    fetchProducts();
    getGhorProductList();
  }, []); // Empty dependency array to ensure it runs only once when the component mounts

  if (loading) {
    return <Loader />;
  }
  return (
    <Products
      ghorProductlist={ghorProductsList ?? []}
      allProducts={allProducts ?? []}
      productsList={productsList ?? []}
    />
  );
};

export default Page;
