import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Tooltip
} from 'chart.js';
import BalanceHistoryChart from "../../components/balancehistory/BalanceHistoryChart";
import PageMeta from "../../components/common/PageMeta";
import CreditCard from "../../components/creditcard/CreditCard";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import ExpenseChart from "../../components/expense/ExpenseChart";
import WeeklyActivityChart from "../../components/weeklyactivity/WeeklyActivityChart";

import ChartDataLabels from 'chartjs-plugin-datalabels';
import QuickTransfer from '../../components/quicktransfer/QuickTransfer';
import RecentTransactions from '../../components/recenttransactions/RecentTransactions';



ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler, ArcElement, Legend, ChartDataLabels, CategoryScale, LinearScale, BarElement);
export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Dashboard | Soar Frontend Assessment"
        description="A React and Tailwind CSS Admin Dashboard Template for Soar Frontend Assessment"
      />

      <div className="grid grid-cols-12 gap-6">
        {/* Top Section: My Cards and Recent Transactions */}        
        <div className="flex flex-col col-span-12 lg:col-span-8 space-y-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold mb-2">My Cards</h2>
            <button className="text-base text-state-blue font-semibold">See All</button>
          </div>

          <div className="flex-grow overflow-hidden">
            <div className="flex gap-6">
              <CreditCard
                balance={5756}
                cardHolder="Eddy Cusuma"
                validThru="12/22"
                cardNumber="3778 **** **** 1234"
                mode="dark"
              />
              <CreditCard
                balance={5756}
                cardHolder="Eddy Cusuma"
                validThru="12/22"
                cardNumber="3778 **** **** 1234"
                mode="light"
              />
            </div>
          </div>          
        </div>

        <div className="flex flex-col col-span-12 lg:col-span-4">
          <h2 className="text-lg font-semibold mb-2">Recent Transaction</h2>
          <RecentTransactions />
        </div>

        {/* Middle Section: Weekly Activity + Expense Chart */}
        <div className="flex flex-col col-span-12 lg:col-span-8">
          <h2 className="text-lg font-semibold mb-2">Weekly Activity</h2>
          <WeeklyActivityChart
            labels={['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
            deposits={[250, 180, 320, 370, 150, 270, 330]}
            withdrawals={[480, 350, 330, 470, 0, 390, 400]}
          />
        </div>

        <div className="flex flex-col col-span-12 lg:col-span-4">
          <h2 className="text-lg font-semibold mb-2">Expense Statistics</h2>
          <ExpenseChart
            labels={['Entertainment', 'Bill Expense', 'Others', 'Investment']}
            data={[30, 15, 35, 20]}
          />
        </div>

        {/* Bottom Section: Quick Transfer + Balance History */}
        <div className="flex flex-col col-span-12 lg:col-span-5">
          <h2 className="text-lg font-semibold mb-2">Quick Transfer</h2>
          <QuickTransfer />
        </div>

        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-lg font-semibold mb-2">Balance History</h2>
          <BalanceHistoryChart
            labels={['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']}
            data={[150, 300, 450, 800, 400, 600, 650]}
          />
        </div>
      </div>
    </>
  );
}
