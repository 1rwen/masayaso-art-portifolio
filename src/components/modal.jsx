import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Modal({ isOpen, onClose, imageSrc }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="max-w-5xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Enlarged"
                className="w-full max-h-[85vh] object-contain"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
