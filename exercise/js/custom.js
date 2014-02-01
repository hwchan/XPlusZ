// Adapted from:
// http://www.csgnetwork.com/directcountrystatecitydrop.html
var cities = new Array();
cities['Canada'] = new Array('Vancouver', 'Burnaby', 'Richmond', 'Calgary', 'Toronto', 'Quebec');
cities['United States'] = new Array('Seattle', 'Washington', 'New York', 'Minneapolis', 'Las Vegas');

function setCities() {
	countrySelect = document.getElementById('country');
	cityList = cities[countrySelect.value];
	changeSelect('city', cityList, cityList);
}

function changeSelect(fieldID, newOptions, newValues) {
	selectField = document.getElementById(fieldID);
	selectField.options.length = 0;
	for (i=0; i<newOptions.length; i++) {
		selectField.options[selectField.length] = new Option(newOptions[i], newValues[i]);
	}
}
