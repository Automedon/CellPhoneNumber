import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendCellPhoneNumber } from "../../actions/cellPhone";
import { validate } from "../../helpers/validateCellPhone";

class CellPhoneForm extends Component {
  state = {
    data: {
      number: ""
    },
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.sendCellPhoneNumber(this.state.data);
    }
  };

  render() {
    const { data, errors } = this.state;
    const { success, number } = this.props;
    return (
      <>
        {!success ? (
          <div className="container col-md-6 col-sm-12">
            <form onSubmit={this.onSubmit}>
              {errors.global && (
                <div className="alert alert-danger">{errors.global}</div>
              )}

              <div className="form-group">
                <label htmlFor="number">Cell Phone Number</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={data.number}
                  onChange={this.onChange}
                  placeholder={`\u005C455\u005C 987-01-02`}
                  className={
                    errors.number ? "form-control is-invalid" : "form-control"
                  }
                />
                <div className="invalid-feedback">{errors.number}</div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Send Number
              </button>
            </form>
          </div>
        ) : (
          <div className="alert alert-success" role="alert">
            You successfully sent number {number}
          </div>
        )}
      </>
    );
  }
}

const mapSateToProps = state => {
  return {
    success: state.cellPhone.success,
    number: state.cellPhone.number
  };
};

CellPhoneForm.propTypes = {
  success: PropTypes.bool.isRequired,
  number: PropTypes.string.isRequired
};

export default connect(
  mapSateToProps,
  { sendCellPhoneNumber }
)(CellPhoneForm);
