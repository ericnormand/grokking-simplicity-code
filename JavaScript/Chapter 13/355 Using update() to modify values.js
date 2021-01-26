var employee = {
  name: "Kim",
  salary: 120000
};

function raise10Percent(salary) {
  return salary * 1.1;
}

update(employee, 'salary', raise10Percent)