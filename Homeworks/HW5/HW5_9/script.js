const ObjectArray = usersArray => {
    for (const user of usersArray) {
        document.write(`
            <div>
                <p>ID: ${user.id}</p>
                <p>Ім'я: ${user.name}</p>
                <p>Вік: ${user.age}</p>
            </div>
        `);
    }
};
const users = [
    { id: 1, name: 'Андрій', age: 19 },
    { id: 2, name: 'Марія', age: 23 },
    { id: 3, name: 'Дмитро', age: 36 }
];
ObjectArray(users);