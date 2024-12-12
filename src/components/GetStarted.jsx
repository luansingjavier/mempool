import React from "react";
import { python, git } from "../constants/images";

const GetStarted = () => (
  <section id="get-started" className="mb-6">
    <h2 className="h2 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      Ready to Get Started?
    </h2>
    <ul className="list-disc pl-6 mt-2 space-y-2">
      <li className="font-normal text-[16px] text-n-4 my-5">
        Install Python (make sure that when you take the screenshot you click on
        the box that says "ADD to file path")
        <img
          src={python}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Install Git
        <img
          src={git}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Clone repo{" "}
        <a
          href="https://github.com/madame-president/mempool-api-terminal"
          className="text-gradient"
        >
          (https://github.com/madame-president/mempool-api-terminal)
        </a>
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Install dependencies pip install -r requirements.txt
      </li>
    </ul>
  </section>
);

export default GetStarted;
