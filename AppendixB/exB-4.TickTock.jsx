// Reactivity

class TickTock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  },
  componentDidMount() {
    this.setInterval(() => {
      this.setState({
	number: this.state.number + 1
      });
    }, 1000);
  },
  componentWillUnmount() {
    clearInterval(this.counterInterval);
  },
  render() {
    return (
      <p>{this.state.number} seconds have passed</p>
    );
  }
};
