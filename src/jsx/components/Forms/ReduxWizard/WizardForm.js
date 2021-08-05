import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';

class WizardForm extends Component {
  constructor(props) {
    super(props);
  
  }



  render() {
    const { onSubmit } = this.props;
    return (
      <div className="">
        {<WizardFormFirstPage  />}
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;