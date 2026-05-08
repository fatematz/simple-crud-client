
import { revalidatePath } from "next/cache";

export const createUser = async(fromData) => {
    'use server';

    const newUser = Object.fromEntries(fromData.entries());

    console.log('new user data', newUser)

    const res = await fetch("http://localhost:5000/users", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    const data = await res.json();
    console.log("Data After Post",data)

//TODO: Revalidate cache

    if(data.insertedId){
        revalidatePath('/users')
    }

    return data;
}

const deleteUser = async(userId) => {
'use server'

const res = await fetch(`http://localhost:5000/users/${userId}`, {method: 'DELETE'});
const data = await res.json();

console.log('after delete', data)
if(data.deletedCount > 0){
    revalidatePath('/users')
}

//TODO: Revalidate cache
return data;

};

export default deleteUser;