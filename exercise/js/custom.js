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

function validateForm() {
	// Name
	var name = document.getElementById('inputName').value;
	if(name == "" || name == null){
		alert("Please enter your name.");
		return false;
	}
	
	// Phone
	var phone = document.getElementById('inputPhone').value;
	if(/[^0-9]/.test(phone)){
		alert("Please use only numeric characters for your phone number.");
		return false;
	}
	if(phone == "" || phone == null){
		alert("Please enter your phone number.");
		return false;
	}
	
	// City
	var city = document.getElementById('city').value;
	if(city == "" || city == null || city == "City"){
		alert("Please enter a city.");
		return false;
	}
	
	// Country
	var country = document.getElementById('country').value;
	if(country == "" || country == null || country == "Country"){
		alert("Please enter a country.");
		return false;
	}
	
	// Display Name
	var displayName = document.getElementById('inputDisplay').value;
	if(/[^a-zA-Z0-9]/.test(displayName)){
		alert("Please use only alphanumeric characters for your display name.");
		return false;
	}
	if(displayName == "" || displayName == null){
		alert("Please enter a display name.");
		return false;
	}
	
	return true;
}
