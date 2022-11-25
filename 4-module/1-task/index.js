function makeFriendsList(friends) {
  let list = document.createElement('UL')
  // document.body.insertAdjacentElement('afterbegin', 'UL')
  friends.map((item) =>{
    let listItem = document.createElement('LI')
    listItem.innerHTML = `${item.firstName} ${item.lastName}`;
    list.append(listItem)
  })
  document.body.append(list)
  return list;
}
