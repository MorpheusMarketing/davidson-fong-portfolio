import {img} from "motion/react-client";
import {motion} from "motion/react";
import {IoMdCheckboxOutline} from "react-icons/io";

import React from "react";

const ProjectDetails = ({
                          title,
                          description,
                          subDescription,
                          image,
                          tags,
                          href,
                          closeModal,
                        }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm"
    >
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1,}}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 cursor-pointer"
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="close"/>
        </button>
        <img src={image} alt="" className="w-full rounded-t-2xl"/>
        <div className="p-5">
          <h5 className="mb-4 text-2xl font-bold text-white underline underline-offset-8">{title}</h5>
          <p className="mb-3 fount-normal text-neutral-300 text-lg">{description}</p>
          <ul>
            {subDescription.map((subdesc, index) => (
              <li key={index} className="flex text-md font-semibold text-gray-600 dark:text-gray-400">
                <p key={index}
                   className="flex items-start gap-2 mb-3 ml-2 font-normal text-neutral-400 ">
                  ✅ {subdesc}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <div key={tag.id} className="relative group">
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg size-10 hover-animation"
                  />
                  <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                     px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0
                     group-hover:opacity-100 group-hover:text-md transition-all duration-700 whitespace-nowrap"
                  >
                  {tag.name}
                </span>
                </div>
              ))}
            </div>
            {href?.length > 0 && (
              <a
                className="inline-flex items-center gap-1 font-medium hover-animation cursor-pointer"
                href={href}
              >
                View ProjectListItem <img src="/assets/arrow-up.svg" className="size-4" alt="View ProjectListItem"/>
              </a>

            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
