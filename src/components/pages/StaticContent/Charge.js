/**
 * Imports
 */
import React from 'react';

/**
 * Component
 */
class Charge extends React.Component {

    //*** Page Title and Snippets ***//

    //*** Component Lifecycle ***//

    componentDidMount() {
    }

    handleCharge() {
      var stripe = require("stripe")("pk_test_gMGWU90MQVbHwdTBX8C7zeOY");
      var token = req.body.stripeToken;

      charge = stripe.charges.create({
        amount: 999,
        currency: 'gbp',
        description: 'Example charge',
        card: token
      });
    }

    //*** Template ***//

    render() {
        return (
          <div>hi</div>
        );
    }
}

/**
 * Exports
 */
export default Charge;
