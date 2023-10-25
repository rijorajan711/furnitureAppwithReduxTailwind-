import { backURL } from "./backendurl";
import { commonAPI } from "./commonapi";

export const getAllData = async (routeis) => {
    return await commonAPI("GET", `${backURL}/${routeis}`, "");
};

export const jsonAddToCart = async (productDetails) => {
    return await commonAPI("POST", `${backURL}/cart`, productDetails);
};

export const jsonAddToWishlist = async (productDetails) => {
    return await commonAPI("POST", `${backURL}/wishlist`, productDetails);
};

export const jsonGetAllDataFromCart = async () => {
    return await commonAPI("GET", `${backURL}/cart`, "");
};

export const jsonGetAllDataFromWishlist = async () => {
    return await commonAPI("GET", `${backURL}/wishlist`, "");
};


export const jsonRemoveWishlistDataFromServer = async (id) => {
    return await commonAPI("DELETE",`${backURL}/wishlist/${id}`, {});
};

export const jsonRemoveCartDataFromServer = async (id) => {
    return await commonAPI("DELETE",`${backURL}/cart/${id}`, {});
};

export const jsonRemoveCartAllDataFromServer = async () => {
   
    return await commonAPI("DELETE",`${backURL}/cart`,{});
};
