import getUserData from "@/lib/getUserData";
import UserTable from "../components/userTable";

const UsersPage =  async () => { 
        const users = await getUserData()
        console.log(users);
       
            return <div>
            <h2>User Management </h2>
            <UserTable key={users._id} users={users}></UserTable>
        </div>

};

export default UsersPage;