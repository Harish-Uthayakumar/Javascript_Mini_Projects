var bill = [124,48,268];
var tip = []; total = [];

function tip_calculator(bill_amount)
{

	var tip;

	if(bill_amount<50)
	{
		tip = 0.2 * bill_amount;

	}

	else if(bill_amount>=50 && bill_amount<200)
		{
			tip = 0.15 * bill_amount;
		}
	else if(bill_amount >= 200)
	{
		tip = 0.10 * bill_amount;
	}
	else
	{
		tip = null;
	}

	return tip;
}



for(var i =0; i < 3; i++)
{
	tip.unshift(tip_calculator(bill[i]));
	console.log(tip);
	var total_bill = bill[i] + tip[i];
	total.unshift(total_bill);


}

	console.log(tip);
	console.log(total);
	
