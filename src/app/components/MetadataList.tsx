import { motion } from "framer-motion";

type Props = {
  uris: string[];
};

const MetadataList: React.FC<Props> = ({ uris }) => {
  return (
    <motion.div
      className="mt-6 space-y-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {uris.map((uri, index) => {
        const hash = uri.split("/").slice(-2, -1)[0];
        return (
          <motion.a
            key={index}
            href={uri}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-sm text-gray-300 bg-gray-800 rounded-md hover:bg-gray-600"
            whileHover={{ scale: 1.05 }}
          >
            {hash}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default MetadataList;
