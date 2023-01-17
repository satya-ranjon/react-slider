import ImagSlider from "./ImagSlider";

const slider = [
  {
    url: "http://localhost:5173/1.jpg",
    title: "We Providing landscaping Services Since 1947",
    dis: " Landscape design is much more than simply planting a few trees and shrubs around your property",
  },
  {
    url: "http://localhost:5173/2.jpg",
    title: "We Are Allround Certified & Insured landscapers",
    dis: " Simply planting a few trees and shrubs around your property",
  },
  {
    url: "http://localhost:5173/3.jpg",
    title: "Extend Your Home With a Beautiful Garden",
    dis: "By creating an outdoor environment, you are essentially building rooms that are ",
  },
];

const style = {
  width: "700px",
  height: "500px",
  margin: "0 auto",
};
const App = () => {
  return (
    <div style={style}>
      <ImagSlider slider={slider} />
    </div>
  );
};

export default App;
