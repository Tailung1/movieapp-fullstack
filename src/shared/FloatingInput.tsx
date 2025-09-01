import { motion } from "framer-motion";
import { useState } from "react";

export default function FloatingInput({
  label,
  type,
}: {
  label: string;
  type: string;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const isActive = focused || value;
  return (
    <div className='relative '>
      <motion.label
        className={`absolute pointer-events-none ${
          isActive ? "text-indigo-500" : "text-gray-500"
        }`}
        animate={{
          y: isActive ? -25 : 0,
          x: isActive ? 5 : 16,
          scale: isActive ? 0.8 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {label}
      </motion.label>
      <input
        className='w-full border-b border-white/20 text-white pb-[14px] pl-[16px] border-gray-500 outline-none  bg-transparent'
        type={type}
        autoComplete='off'
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}
