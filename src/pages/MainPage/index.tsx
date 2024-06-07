import { useEffect, useRef, useState } from "react";
import Filter from "../../components/Filter";
import Hero from "../../components/Hero";
import SearchBar from "../../components/SearchBar";
import { fetchCars } from "../../utils/fetchCars";
import { CarType } from "../../types";
import Card from "../../components/Card";
import ShowMore from "../../components/ShowMore";
import { useSearchParams } from "react-router-dom";
import { fuels, years } from "../../constants";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const catalogRef = useRef<HTMLDivElement>(null);
  const [params] = useSearchParams();

  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries());
    fetchCars(paramsObj)
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, [params]);

  return (
    <div className="mb-40">
      <Hero element={catalogRef} />

      <div ref={catalogRef} className="mt-12 padding-x padding-y max-width ">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Katoloğu</h1>
        </div>

        <p>Beğenebileceğin arabaları keşfet</p>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <Filter paramName="fuel_type" data={fuels} />
            <Filter paramName="year" data={years} />
          </div>
        </div>
        {!cars ? (
          <div className="warn-container">
            <h2>Yükleniyor...</h2>
          </div>
        ) : isError ? (
          <div className="warn-container">
            <h2>Üzgünüz. Verileri alırken bir hata oluştur</h2>
          </div>
        ) : cars.length < 1 ? (
          <div className="warn-container">
            <h2>Aranılan kriterlere uygun araba bulunamadı</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>

            <ShowMore />
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
