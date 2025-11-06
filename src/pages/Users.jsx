import {CreateUser} from "./index";


function Users() {
  return <section className="p-5"> 
    <h1 className="text-2xl font-semibold mb-10 text-[var(--color-text)]">Create a new user</h1>
    <CreateUser />
  </section>;
}

export default Users;
