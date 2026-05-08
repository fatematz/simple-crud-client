
const getUserData = async() => {
  const res = await fetch('http://localhost:5000/users');
  const result = await res.json();

  return (result);
};

export default getUserData;

export const getUserById = async(userId) => {
  
}