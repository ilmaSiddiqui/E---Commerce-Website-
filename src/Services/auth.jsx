const USERS_LIST = "USERS_LIST";

export function signUp(userDetail) {
  const userList = JSON.parse(localStorage.getItem(USERS_LIST));
  let strUpdatedUserList = {};
  if (userList) {
    strUpdatedUserList = JSON.stringify({
      ...userList,
      [userDetail.email.toLowerCase()]: { ...userDetail },
    });
  } else {
    strUpdatedUserList = JSON.stringify({
      [userDetail.email.toLowerCase()]: { ...userDetail },
    });
  }
  localStorage.setItem(USERS_LIST, strUpdatedUserList);
  alert("Successfully registered");
}

export function signIn(userDetail) {
  const userList = JSON.parse(localStorage.getItem(USERS_LIST));
  const user = userList[userDetail.email];
  if (user && user.password === userDetail.password) {
    alert("succefully logged in");
  } else {
    alert("Invalid email/password");
  }
}

export function isEmailExist(email) {
  const usersList = JSON.parse(localStorage.getItem(USERS_LIST)) || {};
  if (usersList[email.toLowerCase()]) return true;
  return false;
}