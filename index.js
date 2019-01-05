
  const nums = ['zero', 'one', 'two', 'three', 'four', 'five',
 'six', 'seven', 'eight', 'nine', 'ten'];

  const ops = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    times: (a, b) => a * b,
    dividedBy: (a, b) => a / b,
  };  
  
  function Magic() {

    init = () => {
      return this;
    }

    this.init();
  }

  const FluentCalculator = new Magic();