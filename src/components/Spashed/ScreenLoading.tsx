import React from 'react';
import { motion } from 'framer-motion';

const ScreenLoading = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-12 h-12 rounded-full border-4 border-gray-700 border-t-indigo-500" style={{ rotate: 0 }} />
        <div className="text-white">
          <div className="text-xl font-semibold tracking-tight">در حال بارگذاری...</div>
          <div className="text-sm text-gray-400">لطفاً چند لحظه صبر کنید</div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScreenLoading;