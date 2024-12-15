import React from "react";
import {
  install_python,
  install_git,
  install_github_cli,
  check_python_version,
  check_git_version,
  clone_repo,
  clone_from_terminal,
  install_dependencies,
  running,
} from "../constants/images";
import SyntaxHighlighter from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const GetStarted = () => (
  <section id="installing-the-application" className="mb-6 scroll-mt-32">
    <h2 className="h2 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      Installing the Application
    </h2>
    <h3 className="h3 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      Setting up your Environment
    </h3>
    <h3 className="body mb-[2rem] text-n-3">
      Downloading programming languages:
    </h3>
    <ul className="list-disc pl-6 mt-2 space-y-2">
      <li className="font-normal text-[16px] text-n-4 my-5">
        Install Python{" "}
        <a
          href="https://www.python.org/downloads/"
          className="text-n-3 block break-all mb-3"
        >
          (https://www.python.org/downloads/)
        </a>
        <div className="w-full xl:w-1/3 lg:w-full sm:w-full md:w-full mb-5 mt-5">
          <img
            src={install_python}
            alt=""
            className="w-full h-auto border-2 border-blue-400 rounded-lg"
          />
        </div>
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Install Git{" "}
        <a
          href="https://git-scm.com/downloads"
          className="text-n-3 block break-all mb-3"
        >
          (https://git-scm.com/downloads)
        </a>
        <img
          src={install_git}
          alt=""
          className={`w-full xl:w-1/3 lg:w-full sm:w-full md:w-full md:top-20 right-0 mb-5 mt-5 border-2 border-blue-400 rounded-lg`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Install Github CLI{" "}
        <a
          href="https://cli.github.com/"
          className="text-n-3 block break-all mb-3"
        >
          (https://cli.github.com/)
        </a>
        <img
          src={install_github_cli}
          alt=""
          className={`w-full xl:w-1/3 lg:w-full sm:w-full md:w-full md:top-20 right-0 mb-5 mt-5 border-2 border-blue-400 rounded-lg`}
        />
      </li>
    </ul>
    <h3 className="body mb-[2rem] text-n-3">
      Checking Python version install:
    </h3>
    <ul className="list-disc pl-6 mt-2 space-y-2">
      <li className="font-normal text-[16px] text-n-4 my-5">
        Open your terminal and type the command
        <SyntaxHighlighter
          language="python"
          style={okaidia}
          className={`w-full xl:w-1/6 lg:w-full sm:w-full md:w-full md:top-20 right-0 mb-5`}
        >
          python --version
        </SyntaxHighlighter>
        <img
          src={check_python_version}
          alt=""
          className={`w-full xl:w-1/3 lg:w-full sm:w-full md:w-full md:top-20 right-0 mb-5 mt-5 border-2 border-blue-400 rounded-lg`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        For Git, type the command
        <SyntaxHighlighter
          language="python"
          style={okaidia}
          className={`w-full xl:w-1/6 lg:w-full sm:w-full md:w-full  md:top-20 right-0 mb-5`}
        >
          git --version
        </SyntaxHighlighter>
        <img
          src={check_git_version}
          alt=""
          className={`w-full xl:w-1/3 lg:w-full sm:w-full md:w-full md:top-20 right-0 mb-5 mt-5 border-2 border-blue-400 rounded-lg`}
        />
      </li>
    </ul>
    <h3 className="body mb-[2rem] text-n-3">Cloning the repository</h3>
    <ul className="list-disc pl-6 mt-2 space-y-2">
      <li className="font-normal text-[16px] text-n-4 my-5">
        Go to this website:{" "}
        <a
          href="https://github.com/madame-president/mempool-api-terminal"
          className="text-n-3 block break-all mb-3"
        >
          (https://github.com/madame-president/mempool-api-terminal)
        </a>
        <p>{"Under Code > Github CLI > copy the command:"}</p>
        <SyntaxHighlighter
          language="python"
          style={okaidia}
          className={`w-60 xl:w-2/5 lg:w-full sm:w-full md:w-full md:top-20 right-0 mb-5`}
        >
          gh repo clone madame-president/mempool-api-terminal
        </SyntaxHighlighter>
        <img
          src={clone_repo}
          alt=""
          className={`w-full xl:w-1/3 lg:w-full sm:w-full md:w-full md:top-20 right-0 mb-5 mt-5 border-2 border-blue-400 rounded-lg`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Open your terminal and paste the command:
        <img
          src={clone_from_terminal}
          alt=""
          className={`w-full xl:w-1/3 lg:w-full sm:w-full md:w-full md:top-20 right-0 mb-5 mt-5 border-2 border-blue-400 rounded-lg`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Go to the repository directory. Type
        <SyntaxHighlighter
          language="python"
          style={okaidia}
          className={`w-full xl:w-1/4 lg:w-full sm:w-full md:w-full md:top-20 right-0 mb-5`}
        >
          cd mempool-api-terminal
        </SyntaxHighlighter>
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Inside the directory, install dependencies typing the command{" "}
        <SyntaxHighlighter
          language="python"
          style={okaidia}
          className={`w-full xl:w-1/3 lg:w-full sm:w-full md:w-full md:top-20 right-0 mb-5`}
        >
          pip install -r requirements.txt
        </SyntaxHighlighter>
        <img
          src={install_dependencies}
          alt=""
          className={`w-full xl:w-1/3 lg:w-full sm:w-full md:w-full md:top-20 right-0 mb-5 mt-5 border-2 border-blue-400 rounded-lg`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        To run the program, type
        <SyntaxHighlighter
          language="python"
          style={okaidia}
          className={`w-full xl:w-1/6 lg:w-full sm:w-full md:w-full md:top-20 right-0 mb-5`}
        >
          python run.py
        </SyntaxHighlighter>
        and enter your Bitcoin address when prompted. The application will store
        your .xlsx report in the same folder.
        <img
          src={running}
          alt=""
          className={`w-full xl:w-1/3 lg:w-full sm:w-full md:w-full md:top-20 right-0 mb-5 mt-5 border-2 border-blue-400 rounded-lg`}
        />
      </li>
    </ul>
  </section>
);

export default GetStarted;
