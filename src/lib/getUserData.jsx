
const getUserData = async() => {
  const res = await fetch('http://localhost:5000/users');
  const result = await res.json();
  // console.log("result", result)
  return result;

};

export default getUserData;

export const getUserById = async(userId) => {
  const res = await fetch(`http://localhost:5000/users/${userId}`)
  const data = await res.json();

  return data;
}