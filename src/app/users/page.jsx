import getUserData from "@/lib/getUserData";
import UserTable from "../components/userTable";
import deleteUser, { createUser } from "@/lib/actions";
import AddUsersModal from "../components/AddUsersModal";

const UsersPage =  async () => { 
        const users = await getUserData()
        console.log("get Data",users);
       
            return <div className="">
                <div className="flex justify-between items-center">
            <h2>User Management {users.length} </h2>
            <AddUsersModal createUserAction = {createUser} >

            </AddUsersModal>
            </div>
                <div className="">
            <UserTable users={users} deleteUserAction = {deleteUser} ></UserTable>
        </div>
        </div>

};

export default UsersPage;