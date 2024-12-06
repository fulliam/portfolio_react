import { motion } from "framer-motion";
import {
  IconCloud,
  IconDjango,
  IconDocker,
  IconFastAPI,
  IconFigma,
  IconFirebase,
  IconGit,
  IconGulp,
  IconJava,
  IconJquery,
  IconJs,
  IconMySql,
  IconNginx,
  IconNN,
  IconPostgres,
  IconPython,
  IconRedis,
  IconRest,
  IconSOAP,
  IconTest,
  IconTypescript,
  IconVite,
  IconVue,
  IconWebpack,
} from "@assets/icons/technologies";
import "./TechnologyCard.scss";

const icons = [
  IconCloud,
  IconDjango,
  IconDocker,
  IconFastAPI,
  IconFigma,
  IconFirebase,
  IconGit,
  IconGulp,
  IconJava,
  IconJquery,
  IconJs,
  IconMySql,
  IconNginx,
  IconNN,
  IconPostgres,
  IconPython,
  IconRedis,
  IconRest,
  IconSOAP,
  IconTest,
  IconTypescript,
  IconVite,
  IconVue,
  IconWebpack,
];

import HitText from "@components/HitText/HitText";

const TechnologyCard = () => {
  const columns = 8;
  const rows = Math.ceil(icons.length / columns);

  const iconChunks = Array.from({ length: rows }, (_, rowIndex) =>
    icons.slice(rowIndex * columns, (rowIndex + 1) * columns)
  );

  return (
    <div className="technology-card">
      <div className="background-pattern">
        <HitText />
      </div>
      <div className="rotated-columns">
        {iconChunks.map((chunk, colIndex) => (
          <motion.div
            key={colIndex}
            className="icon-column"
            initial={{ y: icons.length * 18.375 * 2 }}
            animate={{ y: -icons.length * 15 * 2 }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {chunk.map((Icon, index) => (
              <div key={index} className="icon-wrapper">
                <Icon className="icon" />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      <motion.div className="action-button" whileHover={{ scale: 1.2 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="action-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default TechnologyCard;
