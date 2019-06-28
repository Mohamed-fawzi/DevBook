import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardConent;

    if (profile === null || loading) {
      dashboardConent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardConent = (
          <div>
            <p className="lead text-muted">
              Welcome,{" "}
              <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>
            <ProfileActions />
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardConent = (
          <div>
            <p className="lead text-muted">Welcome, {user.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardConent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
