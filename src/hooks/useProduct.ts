import { decryptData } from "@/utils/encryption";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProduct = (productId: string) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const response = await axios.get(
        `/api/product?id=${productId}&grouped=true`,
      );

      if (!response.data) {
        throw new Error(`Failed to fetch product: ${response.statusText}`);
      }
      const data = response.data;
      const product = decryptData(data.product);
      return product;
    },
    enabled: !!productId,
  });
};
