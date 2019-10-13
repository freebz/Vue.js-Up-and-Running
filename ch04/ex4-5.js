render(createElement) {
  return createElement(
    'div',
    [
      createElement(
	'button',
	{
	  on: {
	    click: () => this.counter++,
	  }
	},
	'Click to increase counter'
      ),
      createElement(
	'p',
	`You've clicked the button ${this.counter} times
      )
    ]
  );
}
