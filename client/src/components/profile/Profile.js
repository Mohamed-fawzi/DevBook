import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";
import { getProfileByHandle } from "../../actions/profileActions";

class Profile extends Component {
  componentDidMount() {
    // Get the handle from the URL
    const handle = this.props.match.params.handle;
    if (handle) {
      this.props.getProfileByHandle(handle);
    }
  }

  render() {
    return <div />;
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  profile: state.profile;
};

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
