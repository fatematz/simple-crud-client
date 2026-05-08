import { getUserById } from "@/lib/getUserData";

const userDetails = async(params) => {
    const {userId} = await params;
    const user = await getUserById(userId);
    return (
        <div>
            <h2>User Details</h2>
        </div>
    );
};

export default userDetails;