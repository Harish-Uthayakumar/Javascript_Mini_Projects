var mark = {



	full_name: 'mark manson',
	mass: 40,
	height: 6,

	calc_bmi: function()
	{

		this.bmi_mark =  this.mass/this.height*this.height;
		return this.bmi_mark;

	}
}


var john = {

	full_name: 'john samson',
	mass: 90,
	height: 3,

	calc_bmi: function()
	{
		this.bmi = this.mass/this.height*this.height;
		return this.bmi;
	}
}
console.log(mark.calc_bmi());
console.log('hello world');
console.log(john.calc_bmi());
john.bmi > mark.bmi_mark ? console.log(john.full_name + ' has a higher BMI than ' + mark.full_name) : console.log(mark.full_name + ' has a higher bmi ' + john.full_name);
