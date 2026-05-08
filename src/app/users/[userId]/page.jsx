import { getUserById } from "@/lib/getUserData";

const userDetails = async({params}) => {
    const {userId} = await params;
    const user = await getUserById(userId);
    console.log(user)
    return (
        <div>
            <h2>User Details {user.name} </h2>
        </div>
    );
};

export default userDetails;