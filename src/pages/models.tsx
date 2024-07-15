import { FC, useState } from "react";

const Models: FC = () => {
  const percentage = 0;
  const [isOpened, setIsOpened] = useState(false);

  const toggleDropdown = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold mt-4 mb-4 relative text-center">
        <span className="text-primary">Free</span>
        <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 px-2">
          AI Hate Content Detector
        </span>
      </h1>

      <p className="text-gray-500 my-10 text-xl text-center">
        Detect hatefull content using machine learning and deep learning models
      </p>
      <div className="flex h-[50vh]">
        <div className="grid grid-cols-3 rounded-lg border-2 mx-[10%] flex-grow">
          <div className="col-span-2 relative h-full">
            <div className="p-4 rounded-l-lg shadow h-full relative">
              <textarea
                className="w-full h-full bg-transparent border-none outline-none resize-none text-base text-gray-500"
                placeholder="Enter text..."
              ></textarea>
              <button className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">
                Analyze text
              </button>
            </div>
          </div>

          <div className="col-span-1 relative h-full">
            <div className="p-4 rounded-r-lg shadow h-full">
              <div className="w-full h-2 bg-gray-300 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="text-gray-600 text-7xl mt-5 mb-2 font-bold text-center">
                {percentage}%
              </div>
              <div className="text-sm text-center text-gray-500">
                Likely to contain hatefull content
              </div>

              <div className="mt-10 mx-auto flex justify-center">
                <button
                  id="dropdownHelperButton"
                  data-dropdown-toggle="dropdownHelper"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center rounded-full"
                  type="button"
                  onClick={toggleDropdown}
                >
                  Select Model
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isOpened && (
                  <div
                    id="dropdownHelper"
                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-60"
                  >
                    <ul
                      className="p-3 space-y-1 text-sm text-gray-700"
                      aria-labelledby="dropdownHelperButton"
                    >
                      <li>
                        <div className="flex p-2 rounded hover:bg-gray-100">
                          <div className="flex items-center h-5">
                            <input
                              id="helper-checkbox-1"
                              aria-describedby="helper-checkbox-text-1"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                          </div>
                          <div className="ms-2 text-sm">
                            <label className="font-medium text-gray-900">
                              <div>Model 1</div>
                              <p
                                id="helper-checkbox-text-1"
                                className="text-xs font-normal text-gray-500"
                              >
                                xx% accuracy
                              </p>
                            </label>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex p-2 rounded hover:bg-gray-100">
                          <div className="flex items-center h-5">
                            <input
                              id="helper-checkbox-1"
                              aria-describedby="helper-checkbox-text-1"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                          </div>
                          <div className="ms-2 text-sm">
                            <label className="font-medium text-gray-900">
                              <div>Model 1</div>
                              <p
                                id="helper-checkbox-text-1"
                                className="text-xs font-normal text-gray-500"
                              >
                                xx% accuracy
                              </p>
                            </label>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex p-2 rounded hover:bg-gray-100">
                          <div className="flex items-center h-5">
                            <input
                              id="helper-checkbox-1"
                              aria-describedby="helper-checkbox-text-1"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                          </div>
                          <div className="ms-2 text-sm">
                            <label className="font-medium text-gray-900">
                              <div>Model 1</div>
                              <p
                                id="helper-checkbox-text-1"
                                className="text-xs font-normal text-gray-500"
                              >
                                xx% accuracy
                              </p>
                            </label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
