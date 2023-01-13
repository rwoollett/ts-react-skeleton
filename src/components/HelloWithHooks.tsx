import React from "react";
import { useState, useEffect } from "react";

interface Homepage {
    title: string;
    description: string;
    navCards: [
      { title: string; catchPhrase: string; }
    ],
    popularCards: [
      { title: string; catchPhrase: string; }
    ]
}

const HelloWithHooks = (): JSX.Element => {
  const [clicks, setClicks] = useState(1);
  const [data, setData] = useState<Homepage|null>(null);

  useEffect(() => {
    fetch("/api/v1/homepage")
      .then((res) => res.json())
      .then((data: Homepage) => setData(data));
  }, []);

  return (
    <div>
      <h3>{data && data.title}</h3>
      <p>{data && data.description}</p>
      <p>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
    </div>
  );
};

export default HelloWithHooks;
