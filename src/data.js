const users = [
    {name: 'John', over18: false},
    {name: 'Jane', over18: true},
    {name: 'Kyle', over18: false},
    {name: 'Harry', over18: true},
    {name: 'Luke', over18: true}
];

  const getOver18 = (users) =>{
    return users.filter(user => user.over18)
}

export {getOver18, users as default};