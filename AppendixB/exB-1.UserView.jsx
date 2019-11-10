// Components

class UserView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined
    };

    fetch(`/api/user/${this.props.userId}`)
      .then((res) => res.json())
      .then((user) => {
	this.setState({ user });
      });
  },
  render() {
    const user = this.state.user;

    return (
      <div>
        { user ? (
	  <p>User name: {user.name}</p>
	) : (
	  <p>Loading...</p>
	) }
      </div>
    );
  }
};

UserView.propTypes = {
  userId: PropTypes.number
};
