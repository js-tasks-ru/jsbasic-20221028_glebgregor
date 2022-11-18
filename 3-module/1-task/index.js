function namify(users) {
  let names = [];
  let arrMap = users.map( user => {
    names.push(user.name);
  })
  return names;

}
