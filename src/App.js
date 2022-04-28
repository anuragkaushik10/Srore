import "./App.css";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ShowData from "./ShowData";
export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const url = "https://fakestoreapi.com/products/";

  function fetchApi() {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(data);
        setData(json);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  useEffect(function () {
    setIsLoading(true);
    console.log(isLoading);
    fetchApi();
    setIsLoading(false);
    console.log(isLoading);
  }, []);

  return (
    <div className="App">
      <input
        placeholder="Search your item"
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
      <div>{isLoading && <Spinner />}</div>
      <ShowData data={data} searchValue={searchValue} />
    </div>
  );
}

{
  // <div>{isLoading ? <Spinner /> : <div>adad</div>}</div>;
}
