let loadEmployees = async () => {
    let url = '/data/employees.json';
    let response = await fetch(url);
    let data = await response.json()
    console.log(data);
};
loadEmployees();

export {loadEmployees};