import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 safe-area-top">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-icons-round text-white text-xl">eco</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">EcoStorix</h1>
          </div>
          <button className="relative p-2 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-primary/10">
            <span className="material-icons-round text-slate-600 dark:text-slate-300">notifications</span>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
          </button>
        </div>
      </header>

      <main className="px-6 py-6 space-y-6 pb-24">
        {/* Welcome Section */}
        <div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Unit 402 - Factory A</p>
          <h2 className="text-2xl font-bold mt-1">Good Morning, Alex</h2>
        </div>

        {/* Maintenance Fees Card */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl shadow-primary/5 border border-primary/5">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-slate-500 dark:text-slate-400 font-medium">Maintenance Fees</h3>
            <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold rounded-full uppercase tracking-widest">
              Due in 5 Days
            </span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-3xl font-bold text-slate-900 dark:text-white">$1,200.00</span>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Billing period: Oct 2023</p>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-primary/20 transition-all active:scale-95">
              Pay Now
            </button>
          </div>
        </section>

        {/* EMS Overview Grid */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold px-1">EMS Overview</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Electricity Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-primary/5">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <span className="material-icons-round text-yellow-600 dark:text-yellow-400 text-sm">bolt</span>
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Electricity</span>
              </div>
              <div className="space-y-1">
                <p className="text-xl font-bold">4,280 <span className="text-xs font-normal text-slate-400">kWh</span></p>
                <div className="flex items-center gap-1 text-primary text-xs font-semibold">
                  <span className="material-icons-round text-xs">trending_down</span>
                  4.2% vs yesterday
                </div>
              </div>
            </div>

            {/* Water Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-primary/5">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="material-icons-round text-blue-600 dark:text-blue-400 text-sm">water_drop</span>
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Water</span>
              </div>
              <div className="space-y-1">
                <p className="text-xl font-bold">124.5 <span className="text-xs font-normal text-slate-400">m³</span></p>
                <div className="flex items-center gap-1 text-red-500 text-xs font-semibold">
                  <span className="material-icons-round text-xs">trending_up</span>
                  1.5% vs yesterday
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Trend Bar Chart */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-primary/5">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold">Energy Trend</h3>
              <p className="text-xs text-slate-400">Daily usage hourly breakdown</p>
            </div>
            <div className="p-2 bg-background-light dark:bg-slate-700 rounded-lg">
              <span className="material-icons-round text-slate-400 text-sm">filter_list</span>
            </div>
          </div>
          {/* Custom CSS Bar Chart */}
          <div className="flex items-end justify-between h-40 gap-2 mb-2">
            <div className="flex-1 h-full flex flex-col justify-end items-center gap-2">
              <div className="w-full bg-primary/10 rounded-t-full h-1/4"></div>
              <span className="text-[10px] text-slate-400 font-medium uppercase">08:00</span>
            </div>
            <div className="flex-1 h-full flex flex-col justify-end items-center gap-2">
              <div className="w-full bg-primary/20 rounded-t-full h-2/4"></div>
              <span className="text-[10px] text-slate-400 font-medium uppercase">10:00</span>
            </div>
            <div className="flex-1 h-full flex flex-col justify-end items-center gap-2">
              <div className="w-full bg-primary/40 rounded-t-full h-3/4"></div>
              <span className="text-[10px] text-slate-400 font-medium uppercase">12:00</span>
            </div>
            <div className="flex-1 h-full flex flex-col justify-end items-center gap-2">
              <div className="w-full bg-primary rounded-t-full h-[95%]"></div>
              <span className="text-[10px] text-slate-400 font-medium uppercase">14:00</span>
            </div>
            <div className="flex-1 h-full flex flex-col justify-end items-center gap-2">
              <div className="w-full bg-primary/60 rounded-t-full h-4/5"></div>
              <span className="text-[10px] text-slate-400 font-medium uppercase">16:00</span>
            </div>
            <div className="flex-1 h-full flex flex-col justify-end items-center gap-2">
              <div className="w-full bg-primary/30 rounded-t-full h-2/5"></div>
              <span className="text-[10px] text-slate-400 font-medium uppercase">18:00</span>
            </div>
          </div>
        </section>

        {/* Recent Activity Simple List */}
        <section className="pb-8">
          <h3 className="text-lg font-bold mb-4 px-1">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-primary/5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-icons-round text-primary text-xl">description</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">New Invoice Issued</p>
                <p className="text-xs text-slate-400">Oct 2023 Monthly Fees</p>
              </div>
              <p className="text-xs text-slate-400">2h ago</p>
            </div>
            <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-primary/5">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span className="material-icons-round text-blue-600 dark:text-blue-400 text-xl">build</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">Maintenance Scheduled</p>
                <p className="text-xs text-slate-400">HVAC Inspection - Unit 402</p>
              </div>
              <p className="text-xs text-slate-400">Yesterday</p>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-primary/10 safe-area-bottom z-40">
        <div className="flex items-center justify-around h-20 px-4">
          <a className="flex flex-col items-center gap-1 text-primary" href="#">
            <span className="material-icons-round">dashboard</span>
            <span className="text-[10px] font-bold uppercase tracking-tight">Dashboard</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" href="#">
            <span className="material-icons-round">receipt_long</span>
            <span className="text-[10px] font-bold uppercase tracking-tight">Invoices</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" href="#">
            <span className="material-icons-round">support_agent</span>
            <span className="text-[10px] font-bold uppercase tracking-tight">Support</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" href="#">
            <span className="material-icons-round">settings</span>
            <span className="text-[10px] font-bold uppercase tracking-tight">Settings</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
