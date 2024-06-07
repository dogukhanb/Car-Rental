import { CarType } from "./../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "45265695a1mshe1b7ae3dc7b3f5ap19e428jsnea5e60b503cb",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel_type?: string;
  year?: string;
};

export async function fetchCars(paramsObj: FilterType): Promise<CarType[]> {
  const {
    limit = "5",
    make = "bmw",
    model = "m5",
    fuel_type = "",
    year = "",
  } = paramsObj;

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=m5&limit=${limit}&make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}`;

  const response = await fetch(url, options);
  return await response.json();
}
