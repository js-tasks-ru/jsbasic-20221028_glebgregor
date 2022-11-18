function showSalary(users, age) {
  let result = ''
  for(let i = 0; i < users.length; i++){
    let str = '';
    if(users[i].age <= age){
      str += users[i].name + ', ' + users[i].balance;
      result += str + `${i == users.length - 1 ? '' : '\n'}`;
    }



  }
  return result;
}
