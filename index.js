var Formula = function(str) 
{
	this.raw = str;
	this.chuncks = [];
	this.evaluate();

	this.operators = ['+', '-', '*', '/', 'log', 'sin', 'cos', 'tg', '^', 'sqrt', '!'];
	
}

Formula.prototype =
{
	isOperator: function(val) {
		for(var att in this.operators)
		{
			if(val == att) return true;
		}
		return false;
	},

	evaluate: function()
	{
		var pieces = this.raw.split("");

		for(var i = 0, len = piceces.length; i < len; i++)
		{
			if(isNaN(pieces[i]))
			{
				if(				
			}
			else
			{
				for(var j = i; j < len; j++) {
				
				}
			}
		}
	}
}
module.exports = Formula;
