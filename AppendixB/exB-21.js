import { connect } from 'react-redux';
import { updateUsers } from './actions';

class UserList extends React.Component {
  componentDidMount(state, { updateUsers }) {
    updateUsers();
  },
  render({ users }) {
    return (
      ...
    );
  }
}

const mapStateToProps = ({ users }) => users;
const mapDispatchToProps = { updateUsers };

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
