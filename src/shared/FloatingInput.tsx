import { motion } from "framer-motion";
import { useState } from "react";

export default function FloatingInput({ label }: { label: string }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const isActive = focused || value;
  return (
    <div className='relative'>
      <motion.label
        className='absolute pointer-events-none'
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
        className='w-full border-b-[0.5px] pb-[14px] pl-[16px] border-gray-500 outline-none  bg-transparent'
        type='text'
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}
