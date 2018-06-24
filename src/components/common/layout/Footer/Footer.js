/**
 * Imports
 */
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router';

// Flux
import IntlStore from '../../../../stores/Application/IntlStore';

// Required Components
import Heading from '../../typography/Heading';
import NewsletterSubscription from '../../forms/NewsletterSubscription';
import Text from '../../typography/Text';

// Translation data for this component
import intlData from './Footer.intl';

/**
 * Component
 */
class Footer extends React.Component {

    static contextTypes = {
        getStore: React.PropTypes.func.isRequired
    };

    //*** Component Lifecycle ***//

    componentDidMount() {

        // Component styles
        require('./Footer.scss');
    }

    //*** Template ***//

    render() {

        //
        // Helper methods & variables
        //

        let intlStore = this.context.getStore(IntlStore);
        let routeParams = {locale: intlStore.getCurrentLocale()};

        // Stores
        /*let storeLinks = [
            {name: 'ebay', link: {to: 'ebay', params: routeParams}}
        ];

        // Info links
        let infoLinks = [
            {name: 'Apoio ao Cliente', link: {to: 'info', params: routeParams}},
            {name: 'Portes de Envio', link: {to: 'info', params: routeParams}},
            {name: 'Termos e Condições', link: {to: 'info', params: routeParams}}
        ];*/

        // Return a content block's items
        let blockItems = (items) => {
            return items.map(function (item, idx) {
                return (
                    <li key={idx} className="footer__list-item">
                        <Link className="footer__link" to={item.link.to} params={item.link.params}>
                            <Text size="small">{item.name}</Text>
                        </Link>
                    </li>
                );
            });
        };

        //
        // Return
        //

        return (
            <div className="footer">
              <div className="footer__copyright">
                  <Text size="small">© {new Date().getFullYear()} Glitzy</Text>
              </div>
            </div>
        );
    }
}

/**
 * Exports
 */
export default Footer;
