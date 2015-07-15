var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var employeeBonus = function (employee) {
	var totalBonus, salaryPlusBonus, stiPercentage;
	var name = employee[0];
	var employeeId = employee[1];
	var salary = employee[2];

			switch(employee[3]) {
				case 5:
					stiPercentage = 10;
					break;
				case 4:
					stiPercentage = 6;
					break;
				case 3:
					stiPercentage = 4;
					break;
				default:    
				case 0:
					stiPercentage = 0;
					break;
			}
	if(employeeId.length === 4 && salary <= 65000) {
		stiPercentage += 5;
	}	else if (employeeId.length === 4 && salary > 65000) {
		stiPercentage -= 1;
	}

	if(stiPercentage > 13) {
		stiPercentage = 13; }

	totalBonus = Math.round(stiPercentage/100 * salary);
	salaryPlusBonus = parseInt(salary) + totalBonus;

	return [name, stiPercentage + "%", salaryPlusBonus, totalBonus];
}


var employeeBonuses = [employeeBonus(arrayAtticus), employeeBonus(arrayJem), employeeBonus(arrayScout), employeeBonus(arrayBoo)];
console.log(employeeBonuses);