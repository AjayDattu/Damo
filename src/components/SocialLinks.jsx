import React from "react";
import {
  YoutubeOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import animationData1 from "../assets/Animation - 1731684875975.json";
import Lottie from "lottie-react";
const SocialLinks = () => {
  return (
    <div data-aos="zoom-in">
      <div className="flex flex-col h-[50vh] justify-center items-center">
        <Lottie
          animationData={animationData1}
          className="w-[30%] h-[50%]"
          loop={true}
        />

        <div className="text-blue-500">Want to know more..?</div>

        <div className="flex space-x-6 mt-6">
          {/* YouTube */}
          <Tooltip title="YouTube">
            <a
              href="https://www.youtube.com/@TechnoDevilX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeOutlined className="text-white text-3xl hover:text-blue-400 transform transition-transform duration-300 hover:scale-125" />
            </a>
          </Tooltip>

          {/* LinkedIn */}
          <Tooltip title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/gandhamkumarnslprakash/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined className="text-white text-3xl hover:text-blue-400 transform transition-transform duration-300 hover:scale-125" />
            </a>
          </Tooltip>

          {/* LeetCode */}
          <Tooltip title="LeetCode">
            <a
              href="https://leetcode.com/dattuajay005/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
                className="transform transition-transform duration-300 hover:scale-125"
              >
                <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z" />
              </svg>
            </a>
          </Tooltip>

          {/* GitHub */}
          <Tooltip title="GitHub">
            <a
              href="https://github.com/gandhamprakashtech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined className="text-white text-3xl hover:text-blue-400 transform transition-transform duration-300 hover:scale-125" />
            </a>
          </Tooltip>

          {/* Mobile Number */}
          <Tooltip title="Mobile Number">
            <a href="tel:+919392668228">
              <MobileOutlined className="text-white text-3xl hover:text-blue-400 transform transition-transform duration-300 hover:scale-125" />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
