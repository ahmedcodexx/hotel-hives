import { Loader, SettingForm } from "../components";
import { useUpdateSetting } from "../hooks";


function Settings() {
  const {isPending} = useUpdateSetting();

  if(isPending) return <Loader />
  
  return ( 
  <section className="p-5">
    <h1 className="text-2xl font-bold text-[var(--color-text)]">Update hotel settings</h1>
    <SettingForm/>
  </section>
  );
}

export default Settings;
