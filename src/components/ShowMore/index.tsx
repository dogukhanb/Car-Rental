import { useSearchParams } from "react-router-dom";
import Button from "../Button";

const ShowMore = () => {
  const [params, setParams] = useSearchParams();
  // urlden limit parametresini al
  const limit = Number(params.get("limit")) || 5;

  const increaseLimit = () => {
    // yeni limit belirle
    const newLimit = limit + 5;

    // parametreleri güncelle
    params.set("limit", String(newLimit));

    // url'i güncelle
    setParams(params);
  };

  return (
    <div className="w-full flex-center gap-5 my-10">
      {limit < 30 && <Button title="Daha Fazla" handleClick={increaseLimit} />}
    </div>
  );
};

export default ShowMore;
