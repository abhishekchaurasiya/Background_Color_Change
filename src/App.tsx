import { useState } from "react";

const App = () => {
  const [color, setColor] = useState<string>("#232779");

  const handleChangeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
    setColor(randomColor);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <button
          style={{
            borderColor: "darkblue",
            borderRadius: "5px",
            padding: "8px",
            fontSize: "20px",
            color: `${color}`,
            fontWeight:"bold"
          }}
          onClick={handleChangeColor}
        >
          Change Background Color
        </button>
        <p
          style={{
            
            background: "white",
            fontWeight: "bold",
            border: "2px solid black",
            padding: "5px 10px",
            borderRadius: "8px",
          }}
        >
          Color Code: {color}
        </p>
      </div>
    </>
  );
};

export default App;
