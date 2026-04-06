import React from "react";
import {
  YoutubeOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";

const SOCIAL = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Dsa_withjay",
    icon: <YoutubeOutlined />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ajaydattu005/",
    icon: <LinkedinOutlined />,
  },
  {
    label: "GitHub",
    href: "https://github.com/AjayDattu",
    icon: <GithubOutlined />,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/dattuajay005/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="18px"
        viewBox="0 -960 960 960"
        width="18px"
        fill="currentColor"
      >
        <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z" />
      </svg>
    ),
  },
  {
    label: "Call",
    href: "tel:+918106869354",
    icon: <MobileOutlined />,
  },
];

const SocialLinks = () => {
  return (
    <div className="px-6 md:px-14 lg:px-24 py-20 bg-white dark:bg-black transition-colors duration-400">
      {/* Top divider row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 border-t border-black/5 dark:border-white/5 pt-12">
        <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 dark:text-white/40 font-bold">
          Let's connect
        </p>

        {/* Icon links */}
        <div className="flex items-center gap-10">
          {SOCIAL.map(({ label, href, icon }) => (
            <Tooltip key={label} title={label}>
              <a
                href={href}
                target={href.startsWith("tel") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-all duration-300 text-2xl hover:scale-110 transform inline-flex"
              >
                {icon}
              </a>
            </Tooltip>
          ))}
        </div>

        <p className="text-[10px] text-black/30 dark:text-white/30 font-medium uppercase tracking-widest">
          © {new Date().getFullYear()} Ajay Dattu · Professional Portfolio
        </p>
      </div>
    </div>


  );
};

export default SocialLinks;
