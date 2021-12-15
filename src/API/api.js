import { useEffect, useState } from "react";

function CallApi() {
  const [data, setdata] = useState(undefined);
  useEffect(() => {
    (async () => {
      const newData = await getData();
      setdata(newData);
    })();
    return () => {};
  }, []);

  const getData = async () => {
    const dataJson = await fetch("https://randomuser.me/api/");
    return await dataJson.json();
  };

  if (!data) {
    return <p>waiting</p>;
  }

  return (
    <div>
      <p>{data.results[0].name.first}</p>
    </div>
  );
}

export default CallApi;