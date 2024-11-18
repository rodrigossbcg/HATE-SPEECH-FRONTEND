import { FC, useEffect, useState } from "react";
import axios from "axios";

const Models: FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleDropdown = () => {
    setIsOpened(!isOpened);
  };

  const [inputText, setInputText] = useState("");
  const [responseArray, setResponseArray] = useState<number[]>([]);
  const [hatePercentage, setHatePercentage] = useState(0);

  useEffect(() => {
    console.log(responseArray);
    if (responseArray.length) {
      calculateHatePercentage();
    }
  }, [responseArray]);

  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Starting request...");
    try {
      const response = await axios.post(
        "http://13.61.121.212:8000/api/example/",
        {
          text: inputText,
        }
      );
      console.log("Response received:", response.data);
      if (response.data) {
        setResponseArray(response.data.response);
        calculateHatePercentage();
      }
    } catch (error) {
      console.error("There was an error making the request!", error);
    }
  };

  const clear = () => {
    setInputText("");
    setResponseArray([]);
    setHatePercentage(0);
  };

  const calculateHatePercentage = () => {
    const hateWords = responseArray.filter((position) => position === 1);
    const percentage = (hateWords.length / responseArray.length) * 100;
    const roundedPercentage = parseFloat(percentage.toFixed(1));
    setHatePercentage(roundedPercentage);
  };

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold md:mt-4 mb-2 md:mb-4 relative text-center">
        <span className="text-primary">Free</span>
        <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 px-2">
          AI Hate Content Detector
        </span>
      </h1>

      <p className="text-gray-500 my-5 md:my-10 text-sm md:text-xl text-center">
        Detect hatefull content using Machine Learning, Deep Learning and
        Generative Pre-trained Transformers
      </p>
      <div className="flex flex-col md:h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-3 md:mx-[10%] flex-grow gap-2">
          <div className="col-span-1 md:col-span-2 relative h-[36vh] md:h-full border border-gray-200 rounded-lg shadow">
            <div className="p-4 relative h-full">
              {!responseArray.length ? (
                <textarea
                  className="w-full h-full bg-transparent border-none outline-none resize-none text-base text-gray-500"
                  placeholder="Enter text..."
                  value={inputText}
                  onChange={handleInputChange}
                ></textarea>
              ) : (
                <div className="w-full h-full bg-transparent border-none outline-none resize-none text-base text-gray-500 mt-4">
                  {responseArray.map((hate, index) => (
                    <span key={index}>
                      <a
                        href={`https://hatebase.org/search_results/keywords%3D${
                          inputText.split(" ")[index]
                        }`}
                        target="_blank"
                        className={
                          hate
                            ? "bg-red-300 py-1 px-2 rounded-md hover:cursor-pointer"
                            : ""
                        }
                      >
                        {inputText.split(" ")[index]}
                      </a>{" "}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 relative h-[28vh] md:h-full border border-gray-200 rounded-lg shadow">
            <div className="px-4 py-2 md:px-4 md:py-4 h-full flex flex-col justify-between">
              <div>
                <div className="w-full h-2 bg-gray-300 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${hatePercentage}%` }}
                  ></div>
                </div>
                <div className="text-gray-600 text-7xl mt-5 mb-2 font-bold text-center">
                  {hatePercentage}%
                </div>
                <div className="text-sm text-center text-gray-500">
                  Likely to contain hatefull content
                </div>
              </div>
              <button
                className="bg-blue-500 text-white w-full px-2 py-2 rounded-md shadow-md mt-auto"
                onClick={!responseArray.length ? handleSubmit : () => clear()}
                disabled={!inputText}
              >
                {!responseArray.length ? "Analyze Text" : "Another Text"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
