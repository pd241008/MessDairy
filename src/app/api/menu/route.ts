

import type { NextRequest } from "next/server";


const messMenu = {
  Monday: {
    Breakfast:
      "Sweet, Bread, Butter, Jam, Idly, Sambar, Spcl Chutney, Poori, Aloo Dal Masala\nTea / Coffee / Milk\nBoiled Egg, Banana",
    Lunch:
      "Chappathi, Chapp Kasa, Jeera Pulao, Steamed Rice, Masala Sambar, Beans Par Dal, Mix Veg Usili, Lemon Rasam, Pickle",
    Snack: "Pav Bhaji\nTea / Coffee",
    Dinner:
      "Punjabi Paratha, Rajma Makkan Wala, Dosa, Idly Podi, Oil, Special Chutney, Steamed Rice, Vegetable Dal, Rasam\nPickle, Fryums, Veg-Salad\n*Mutton Gravy*",
  },
  Tuesday: {
    Breakfast:
      "Bread, Butter, Jam, Ghee Pongal, Vadai, Veg Koshtu, Coconut Chutney, Poha, Mint Chutney\nTea / Coffee / Milk\nMasala Omelet",
    Lunch:
      "Sweet, Poori, Muttar Masala, Lemon Rice, Steamed Rice, Rajma, Cabbage Dal, Bindhi Jaipur, Rasam, Gobhi-Sticks",
    Snack: "Boiled Peanut, Black Channa Sundal\nTea / Coffee",
    Dinner:
      "Chappathi, Mix Veg Khurma, Fried Rice, Noodles, Manchurian Dry, Crispy Vegetable, Steamed Rice, Rasam, Dal Fry\nPickle, Fryums, Veg-Salad, Milk\n*Chicken Gravy*",
  },
  Wednesday: {
    Breakfast:
      "Bread, Butter, Jam, Dosa, Idly Podi, Oil, Arachivitta Sambar, Chutney, Chappathi, Aloo Raja Masala\nTea / Coffee / Milk\nBoiled Egg, Banana",
    Lunch:
      "Butter Roti, Aloo Palak, Peas Pulao, Dal Makhni, Kadai Vegetable, Rice, Drumstick Brinjal Sambar, Garlic Rasam, Pickle",
    Snack: "Veg Puff, Sweet\nJuice, Tea / Coffee",
    Dinner:
      "Chappathi, Steamed Rice, Dal Tadka, Chicken Masala (Non-Veg), Paneer Butter Masala, Rasam, Pickle\nFryums, Veg-Salad, Milk\n*Chicken Gravy*",
  },
  Thursday: {
    Breakfast:
      "Bread, Butter, Jam, Chappathi, Aloo Meal Maker Kasa, Veg Semiya Khichadi, Coconut Chutney\nBoiled Egg\nTea / Coffee / Milk",
    Lunch:
      "Luchi, Kashmiri Dum Aloo, Onion Pulao, Steamed Rice, Mysore Puli, Mixed Veg Curry, Tomato Rasam, Pickle",
    Snack: "Pani Poori, Chunda Khas Aloo\nTea / Coffee",
    Dinner:
      "Ghee Pulao, Kaji Pulao (Basmati Rice), Chappathi, Muttar Paneer, Cabbage Dal Tadka, Rasam, Aloo Peanut Masala\nFryums, Pickle, Veg Salad, Milk\n*Chicken Gravy*",
  },
  Friday: {
    Breakfast:
      "Bread, Butter, Jam, Podi Dosa, Idly Podi, Oil, Chilli Sambar, Chutney, Muttar Masala\nTea / Coffee / Milk\nBoiled Egg, Banana",
    Lunch:
      "Dry Jamun, Bread Halwa, Veg Biryani, Mix Raitha, Bisebelabath, Curd Rice, Tomato Rice, Rasam, Aloo Gobi, Mutton, Egg Modak, Moongdal Tadka",
    Snack: "Bonda, Vada, Chutney\nTea / Coffee",
    Dinner:
      "Chole Bhatura, Steamed Rice, Tomato Dal, Sambar, Rava Upma, Coconut Chutney, Rasam, Cabbage Poriyal, Pickle, Fryums, Veg Salad, Milk\n*Veg Salads, Milk*",
  },
  Saturday: {
    Breakfast:
      "Bread, Butter, Jam, Chappathi, Veg Khurma, Idiyappam (Lemon, Masala), Coconut Chutney\nTea / Coffee / Milk\nBoiled Egg",
    Lunch:
      "Poori, Dal Aloo Tadka, Steamed Rice, Tomato Pappu, Kara Kuzhambu, Kootu, Aloo Fry, Pickle, Special",
    Snack: "Cake, Brownie\nTea / Coffee",
    Dinner:
      "Sweet, Malabar Paratha, Meal Maker Curry, Mix Vegetable Sabji, Idiyappam, Kheer, Steamed Rice, Dal Tadka, Rasam, Pickle, Fryums, Veg Salad, Milk,*Chicken Gravy*",
  },
  Sunday: {
    Breakfast: "Bread, Butter, Jam, Chole Poori, Veg Kurma, Coconut Chutney\nTea / Coffee / Milk",
    Lunch:
      "Chappathi, Chicken Gravy (or Kadai), Paneer Gravy (Veg), Dal Dhadak, Mint Pulao, Steamed Rice, Rasam, Fryums, Pickle",
    Snack: "Corn, Baji, Chutney\nTea / Coffee",
    Dinner:
      "Variety Stuffing Paratha, Dal, Steamed Rice, Hara Moong Dal Tadka, Kathamba Sambar, Poriyal, Rasam, Pickle, Fryums, Veg Salad, Milk, Ice Cream\n*Chicken Gravy*",
  },
};


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_req: NextRequest) {
  return new Response(JSON.stringify(messMenu), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600", 
    },
  });
}
