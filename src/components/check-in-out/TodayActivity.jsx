import {Loader, TodayItem} from "../index";
import { useTodayActivity } from "../../hooks";


function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  return (
    <section className="p-5 bg-[var(--color-primary)] rounded-md col-start-1 col-end-3">
      <div>
        <h2 className="text-xl pb-5">Today</h2>
      </div>

      {!isLoading ? (
        activities?.length > 0 ? (
          <div>
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </div>
        ) : (
          <div className="mt-20">No activity today...</div>
        )
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default TodayActivity;
