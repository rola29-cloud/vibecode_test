import React, { useState } from 'react';

const Login: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(true);
  const [companyName, setCompanyName] = useState('');
  const [unit, setUnit] = useState('');

  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4">
      {/* Mobile Screen Wrapper (iOS Form Factor) */}
      <div className="relative w-full max-w-[390px] h-[844px] bg-white dark:bg-gray-900 shadow-2xl rounded-xl overflow-hidden flex flex-col border border-primary/5">
        {/* Status Bar (iOS Style) */}
        <div className="w-full h-12 flex justify-between items-center px-8 pt-4 pb-2">
          <span className="text-sm font-semibold dark:text-white">9:41</span>
          <div className="flex space-x-1.5 items-center">
            <span className="material-icons-round text-sm dark:text-white">signal_cellular_alt</span>
            <span className="material-icons-round text-sm dark:text-white">wifi</span>
            <span className="material-icons-round text-sm dark:text-white">battery_full</span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 px-8 pt-12 flex flex-col">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <span className="material-icons-round text-primary text-5xl">eco</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">EcoStorix</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">Industrial ecosystem management portal</p>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            {/* Company Name Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 px-1">Company Name</label>
              <div className="relative">
                <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">factory</span>
                <input
                  className="w-full h-14 pl-12 pr-4 bg-gray-50 dark:bg-gray-800 border-none rounded-lg focus:ring-2 focus:ring-primary shadow-sm text-gray-900 dark:text-white placeholder:text-gray-400 transition-all outline-none"
                  placeholder="e.g. Global Logistics Inc."
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
            </div>

            {/* Unit Selection Dropdown */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 px-1">Unit Selection</label>
              <div className="relative">
                <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">layers</span>
                <select
                  className="w-full h-14 pl-12 pr-10 bg-gray-50 dark:bg-gray-800 border-none rounded-lg focus:ring-2 focus:ring-primary shadow-sm text-gray-900 dark:text-white appearance-none transition-all outline-none"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <option disabled value="">Select factory unit</option>
                  <option>Factory Unit A-204</option>
                  <option>Factory Unit B-105</option>
                  <option>Storage Wing C-12</option>
                  <option>Processing Plant D-8</option>
                </select>
                <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
              </div>
            </div>

            {/* Remember Toggle (iOS Style) */}
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-600 dark:text-gray-300">Remember my selection</span>
              <button
                className={`w-12 h-6 rounded-full relative flex items-center px-1 transition-colors ${rememberMe ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                onClick={() => setRememberMe(!rememberMe)}
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-200 transform ${rememberMe ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </button>
            </div>

            {/* Primary Action */}
            <button className="w-full h-14 bg-primary hover:bg-opacity-90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center space-x-2 mt-8">
              <span>Continue</span>
              <span className="material-icons-round text-xl">arrow_forward</span>
            </button>
          </div>

          {/* Secondary Links */}
          <div className="mt-auto pb-12 space-y-4">
            <button className="w-full py-2 text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-primary transition-colors">
              Forgot Unit ID?
            </button>
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>Secure Industrial Portal v2.4.0</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* iOS Bottom Indicator */}
        <div className="w-full h-8 flex justify-center items-end pb-2">
          <div className="w-32 h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>

        {/* Decorative Background Pattern (Subtle) */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Login;
