import { DashboardLayout, Filter, Loader } from "../components";
import { useRecentBookings } from "../hooks";
import { recentBookings } from "../utils/dataOptions";

const Dashboard = () => {
  const { isPending } = useRecentBookings();

  return (
    <section className="p-5 h-full">
      <div className="flex-between">
        <h1 className="text-2xl font-semibold text-[var(--color-text)]">
          Dashboard
        </h1>
        <Filter filterField="last" options={recentBookings} />
      </div>
      {isPending && <Loader />}
      {!isPending && <DashboardLayout />}
    </section>
  );
};

export default Dashboard;
