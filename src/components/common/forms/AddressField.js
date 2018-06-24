/**
 * Imports
 */
import React from 'react';
import {FormattedMessage} from 'react-intl';

// Flux
import IntlStore from '../../../stores/Application/IntlStore';

// Required components
import Button from '../buttons/Button';

import InlineItems from './InlineItems';
import InputField from './InputField';
import Select from './Select';

// Translation data for this component
import intlData from './AddressField.intl';

/**
 * Component
 */
class AddressField extends React.Component {

    static contextTypes = {
        getStore: React.PropTypes.func.isRequired
    };

    //*** Initial State ***//

    state = {
        address: this.props.address || {},
        fieldErrors: {}
    };

    //*** Component Lifecycle ***//

    componentDidMount() {

        // Component styles
        require('./AddressField.scss');
    }

    //*** View Controllers ***//

    handleSavedAddressChange = (idx) => {
        this.props.onSubmit(this.props.savedAddresses[idx]);
    };

    handleFieldChange = (field, value) => {
        let address = this.state.address;
        address[field] = value;
        this.setState({address: address});
    };

    handleSubmitClick = () => {

        let intlStore = this.context.getStore(IntlStore);

        // Client-side validations
        let fieldErrors = {};

        if (!this.state.address.name) {
            fieldErrors.name = intlStore.getMessage(intlData, 'fieldRequired');
        }

        if (!this.state.address.addressLine1) {
            fieldErrors.addressLine1 = intlStore.getMessage(intlData, 'fieldRequired');
        }

        if (!this.state.address.postalCode) {
            fieldErrors.postalCode = intlStore.getMessage(intlData, 'fieldRequired');
        }

        if (!this.state.address.city) {
            fieldErrors.city = intlStore.getMessage(intlData, 'fieldRequired');
        }

        if (!this.state.address.country) {
            fieldErrors.country = intlStore.getMessage(intlData, 'fieldRequired');
        }

        this.setState({fieldErrors: fieldErrors});

        // Validation passed, trigger request
        if (Object.keys(fieldErrors).length === 0) {
            this.props.onSubmit(this.state.address);
        }
    };

    //*** Template ***//

    render() {

        let intlStore = this.context.getStore(IntlStore);

        let countryOptions = [
          {name: 'United Kingdom', value: 'GB'},
          {name: 'Ireland', value: 'IE'},
          {name: 'United States', value: 'US'},
          {name: 'Japan', value: 'JP'},
          {name: 'Afghanistan', value: 'AF'},
          {name: 'Åland Islands', value: 'AX'},
          {name: 'Albania', value: 'AL'},
          {name: 'Algeria', value: 'DZ'},
          {name: 'American Samoa', value: 'AS'},
          {name: 'AndorrA', value: 'AD'},
          {name: 'Angola', value: 'AO'},
          {name: 'Anguilla', value: 'AI'},
          {name: 'Antarctica', value: 'AQ'},
          {name: 'Antigua and Barbuda', value: 'AG'},
          {name: 'Argentina', value: 'AR'},
          {name: 'Armenia', value: 'AM'},
          {name: 'Aruba', value: 'AW'},
          {name: 'Australia', value: 'AU'},
          {name: 'Austria', value: 'AT'},
          {name: 'Azerbaijan', value: 'AZ'},
          {name: 'Bahamas', value: 'BS'},
          {name: 'Bahrain', value: 'BH'},
          {name: 'Bangladesh', value: 'BD'},
          {name: 'Barbados', value: 'BB'},
          {name: 'Belarus', value: 'BY'},
          {name: 'Belgium', value: 'BE'},
          {name: 'Belize', value: 'BZ'},
          {name: 'Benin', value: 'BJ'},
          {name: 'Bermuda', value: 'BM'},
          {name: 'Bhutan', value: 'BT'},
          {name: 'Bolivia', value: 'BO'},
          {name: 'Bosnia and Herzegovina', value: 'BA'},
          {name: 'Botswana', value: 'BW'},
          {name: 'Bouvet Island', value: 'BV'},
          {name: 'Brazil', value: 'BR'},
          {name: 'British Indian Ocean Territory', value: 'IO'},
          {name: 'Brunei Darussalam', value: 'BN'},
          {name: 'Bulgaria', value: 'BG'},
          {name: 'Burkina Faso', value: 'BF'},
          {name: 'Burundi', value: 'BI'},
          {name: 'Cambodia', value: 'KH'},
          {name: 'Cameroon', value: 'CM'},
          {name: 'Canada', value: 'CA'},
          {name: 'Cape Verde', value: 'CV'},
          {name: 'Cayman Islands', value: 'KY'},
          {name: 'Central African Republic', value: 'CF'},
          {name: 'Chad', value: 'TD'},
          {name: 'Chile', value: 'CL'},
          {name: 'China', value: 'CN'},
          {name: 'Christmas Island', value: 'CX'},
          {name: 'Cocos (Keeling) Islands', value: 'CC'},
          {name: 'Colombia', value: 'CO'},
          {name: 'Comoros', value: 'KM'},
          {name: 'Congo', value: 'CG'},
          {name: 'Congo, The Democratic Republic of the', value: 'CD'},
          {name: 'Cook Islands', value: 'CK'},
          {name: 'Costa Rica', value: 'CR'},
          {name: 'Cote D\'Ivoire', value: 'CI'},
          {name: 'Croatia', value: 'HR'},
          {name: 'Cuba', value: 'CU'},
          {name: 'Cyprus', value: 'CY'},
          {name: 'Czech Republic', value: 'CZ'},
          {name: 'Denmark', value: 'DK'},
          {name: 'Djibouti', value: 'DJ'},
          {name: 'Dominica', value: 'DM'},
          {name: 'Dominican Republic', value: 'DO'},
          {name: 'Ecuador', value: 'EC'},
          {name: 'Egypt', value: 'EG'},
          {name: 'El Salvador', value: 'SV'},
          {name: 'Equatorial Guinea', value: 'GQ'},
          {name: 'Eritrea', value: 'ER'},
          {name: 'Estonia', value: 'EE'},
          {name: 'Ethiopia', value: 'ET'},
          {name: 'Falkland Islands (Malvinas)', value: 'FK'},
          {name: 'Faroe Islands', value: 'FO'},
          {name: 'Fiji', value: 'FJ'},
          {name: 'Finland', value: 'FI'},
          {name: 'France', value: 'FR'},
          {name: 'French Guiana', value: 'GF'},
          {name: 'French Polynesia', value: 'PF'},
          {name: 'French Southern Territories', value: 'TF'},
          {name: 'Gabon', value: 'GA'},
          {name: 'Gambia', value: 'GM'},
          {name: 'Georgia', value: 'GE'},
          {name: 'Germany', value: 'DE'},
          {name: 'Ghana', value: 'GH'},
          {name: 'Gibraltar', value: 'GI'},
          {name: 'Greece', value: 'GR'},
          {name: 'Greenland', value: 'GL'},
          {name: 'Grenada', value: 'GD'},
          {name: 'Guadeloupe', value: 'GP'},
          {name: 'Guam', value: 'GU'},
          {name: 'Guatemala', value: 'GT'},
          {name: 'Guernsey', value: 'GG'},
          {name: 'Guinea', value: 'GN'},
          {name: 'Guinea-Bissau', value: 'GW'},
          {name: 'Guyana', value: 'GY'},
          {name: 'Haiti', value: 'HT'},
          {name: 'Heard Island and Mcdonald Islands', value: 'HM'},
          {name: 'Holy See (Vatican City State)', value: 'VA'},
          {name: 'Honduras', value: 'HN'},
          {name: 'Hong Kong', value: 'HK'},
          {name: 'Hungary', value: 'HU'},
          {name: 'Iceland', value: 'IS'},
          {name: 'India', value: 'IN'},
          {name: 'Indonesia', value: 'ID'},
          {name: 'Iran, Islamic Republic Of', value: 'IR'},
          {name: 'Iraq', value: 'IQ'},
          {name: 'Isle of Man', value: 'IM'},
          {name: 'Israel', value: 'IL'},
          {name: 'Italy', value: 'IT'},
          {name: 'Jamaica', value: 'JM'},
          {name: 'Jersey', value: 'JE'},
          {name: 'Jordan', value: 'JO'},
          {name: 'Kazakhstan', value: 'KZ'},
          {name: 'Kenya', value: 'KE'},
          {name: 'Kiribati', value: 'KI'},
          {name: 'Korea, Democratic People\'S Republic of', value: 'KP'},
          {name: 'Korea, Republic of', value: 'KR'},
          {name: 'Kuwait', value: 'KW'},
          {name: 'Kyrgyzstan', value: 'KG'},
          {name: 'Lao People\'S Democratic Republic', value: 'LA'},
          {name: 'Latvia', value: 'LV'},
          {name: 'Lebanon', value: 'LB'},
          {name: 'Lesotho', value: 'LS'},
          {name: 'Liberia', value: 'LR'},
          {name: 'Libyan Arab Jamahiriya', value: 'LY'},
          {name: 'Liechtenstein', value: 'LI'},
          {name: 'Lithuania', value: 'LT'},
          {name: 'Luxembourg', value: 'LU'},
          {name: 'Macao', value: 'MO'},
          {name: 'Macedonia, The Former Yugoslav Republic of', value: 'MK'},
          {name: 'Madagascar', value: 'MG'},
          {name: 'Malawi', value: 'MW'},
          {name: 'Malaysia', value: 'MY'},
          {name: 'Maldives', value: 'MV'},
          {name: 'Mali', value: 'ML'},
          {name: 'Malta', value: 'MT'},
          {name: 'Marshall Islands', value: 'MH'},
          {name: 'Martinique', value: 'MQ'},
          {name: 'Mauritania', value: 'MR'},
          {name: 'Mauritius', value: 'MU'},
          {name: 'Mayotte', value: 'YT'},
          {name: 'Mexico', value: 'MX'},
          {name: 'Micronesia, Federated States of', value: 'FM'},
          {name: 'Moldova, Republic of', value: 'MD'},
          {name: 'Monaco', value: 'MC'},
          {name: 'Mongolia', value: 'MN'},
          {name: 'Montserrat', value: 'MS'},
          {name: 'Morocco', value: 'MA'},
          {name: 'Mozambique', value: 'MZ'},
          {name: 'Myanmar', value: 'MM'},
          {name: 'Namibia', value: 'NA'},
          {name: 'Nauru', value: 'NR'},
          {name: 'Nepal', value: 'NP'},
          {name: 'Netherlands', value: 'NL'},
          {name: 'Netherlands Antilles', value: 'AN'},
          {name: 'New Caledonia', value: 'NC'},
          {name: 'New Zealand', value: 'NZ'},
          {name: 'Nicaragua', value: 'NI'},
          {name: 'Niger', value: 'NE'},
          {name: 'Nigeria', value: 'NG'},
          {name: 'Niue', value: 'NU'},
          {name: 'Norfolk Island', value: 'NF'},
          {name: 'Northern Mariana Islands', value: 'MP'},
          {name: 'Norway', value: 'NO'},
          {name: 'Oman', value: 'OM'},
          {name: 'Pakistan', value: 'PK'},
          {name: 'Palau', value: 'PW'},
          {name: 'Palestinian Territory, Occupied', value: 'PS'},
          {name: 'Panama', value: 'PA'},
          {name: 'Papua New Guinea', value: 'PG'},
          {name: 'Paraguay', value: 'PY'},
          {name: 'Peru', value: 'PE'},
          {name: 'Philippines', value: 'PH'},
          {name: 'Pitcairn', value: 'PN'},
          {name: 'Poland', value: 'PL'},
          {name: 'Portugal', value: 'PT'},
          {name: 'Puerto Rico', value: 'PR'},
          {name: 'Qatar', value: 'QA'},
          {name: 'Reunion', value: 'RE'},
          {name: 'Romania', value: 'RO'},
          {name: 'Russian Federation', value: 'RU'},
          {name: 'RWANDA', value: 'RW'},
          {name: 'Saint Helena', value: 'SH'},
          {name: 'Saint Kitts and Nevis', value: 'KN'},
          {name: 'Saint Lucia', value: 'LC'},
          {name: 'Saint Pierre and Miquelon', value: 'PM'},
          {name: 'Saint Vincent and the Grenadines', value: 'VC'},
          {name: 'Samoa', value: 'WS'},
          {name: 'San Marino', value: 'SM'},
          {name: 'Sao Tome and Principe', value: 'ST'},
          {name: 'Saudi Arabia', value: 'SA'},
          {name: 'Senegal', value: 'SN'},
          {name: 'Serbia and Montenegro', value: 'CS'},
          {name: 'Seychelles', value: 'SC'},
          {name: 'Sierra Leone', value: 'SL'},
          {name: 'Singapore', value: 'SG'},
          {name: 'Slovakia', value: 'SK'},
          {name: 'Slovenia', value: 'SI'},
          {name: 'Solomon Islands', value: 'SB'},
          {name: 'Somalia', value: 'SO'},
          {name: 'South Africa', value: 'ZA'},
          {name: 'South Georgia and the South Sandwich Islands', value: 'GS'},
          {name: 'Spain', value: 'ES'},
          {name: 'Sri Lanka', value: 'LK'},
          {name: 'Sudan', value: 'SD'},
          {name: 'Suriname', value: 'SR'},
          {name: 'Svalbard and Jan Mayen', value: 'SJ'},
          {name: 'Swaziland', value: 'SZ'},
          {name: 'Sweden', value: 'SE'},
          {name: 'Switzerland', value: 'CH'},
          {name: 'Syrian Arab Republic', value: 'SY'},
          {name: 'Taiwan, Province of China', value: 'TW'},
          {name: 'Tajikistan', value: 'TJ'},
          {name: 'Tanzania, United Republic of', value: 'TZ'},
          {name: 'Thailand', value: 'TH'},
          {name: 'Timor-Leste', value: 'TL'},
          {name: 'Togo', value: 'TG'},
          {name: 'Tokelau', value: 'TK'},
          {name: 'Tonga', value: 'TO'},
          {name: 'Trinidad and Tobago', value: 'TT'},
          {name: 'Tunisia', value: 'TN'},
          {name: 'Turkey', value: 'TR'},
          {name: 'Turkmenistan', value: 'TM'},
          {name: 'Turks and Caicos Islands', value: 'TC'},
          {name: 'Tuvalu', value: 'TV'},
          {name: 'Uganda', value: 'UG'},
          {name: 'Ukraine', value: 'UA'},
          {name: 'United Arab Emirates', value: 'AE'},
          {name: 'United States Minor Outlying Islands', value: 'UM'},
          {name: 'Uruguay', value: 'UY'},
          {name: 'Uzbekistan', value: 'UZ'},
          {name: 'Vanuatu', value: 'VU'},
          {name: 'Venezuela', value: 'VE'},
          {name: 'Viet Nam', value: 'VN'},
          {name: 'Virgin Islands, British', value: 'VG'},
          {name: 'Virgin Islands, U.S.', value: 'VI'},
          {name: 'Wallis and Futuna', value: 'WF'},
          {name: 'Western Sahara', value: 'EH'},
          {name: 'Yemen', value: 'YE'},
          {name: 'Zambia', value: 'ZM'},
          {name: 'Zimbabwe', value: 'ZW'}
        ];

        let addressOptions;
        if (this.props.savedAddresses && this.props.savedAddresses.length > 0) {
            addressOptions = this.props.savedAddresses.map(function (address, idx) {
                return {
                    value: idx,
                    name: `${address.name}, ${address.addressLine1} ${address.addressLine2}, ${address.postalCode} ${address.city}`
                };
            });
        }

        return (
            <div className="address-field">
                {addressOptions ?
                    <div className="address-field__item address-field__saved-addresses">
                        <Select label={intlStore.getMessage(intlData, 'savedAddresses')}
                                labelWeight="normal"
                                labelSize="small"
                                placeholder
                                options={addressOptions}
                                onChange={this.handleSavedAddressChange} />
                    </div>
                    :
                    null
                }
                <div className="address-field__item">
                    <InlineItems>
                        <InputField label={intlStore.getMessage(intlData, 'name')}
                                    labelWeight={this.props.labelWeight}
                                    value={this.state.address.name}
                                    onChange={this.handleFieldChange.bind(null, 'name')}
                                    error={this.state.fieldErrors['name']} />
                        <InputField label={intlStore.getMessage(intlData, 'phoneNumber')}
                                    labelWeight={this.props.labelWeight}
                                    value={this.state.address.phone}
                                    onChange={this.handleFieldChange.bind(null, 'phone')}
                                    error={this.state.fieldErrors['phone']} />
                    </InlineItems>
                </div>
                <div className="address-field__item">
                    <InputField label={intlStore.getMessage(intlData, 'vatin')}
                                labelWeight={this.props.labelWeight}
                                value={this.state.address.vatin}
                                onChange={this.handleFieldChange.bind(null, 'vatin')}
                                error={this.state.fieldErrors['vatin']} />
                </div>
                <div className="address-field__item">
                    <InputField label={intlStore.getMessage(intlData, 'address')}
                                labelWeight={this.props.labelWeight}
                                value={this.state.address.addressLine1}
                                onChange={this.handleFieldChange.bind(null, 'addressLine1')}
                                error={this.state.fieldErrors['addressLine1']} />
                </div>
                <div className="address-field__address-line2">
                    <InputField labelWeight={this.props.labelWeight}
                                value={this.state.address.addressLine2}
                                onChange={this.handleFieldChange.bind(null, 'addressLine2')}
                                error={this.state.fieldErrors['addressLine2']} />
                </div>
                <div className="address-field__item">
                    <InlineItems>
                        <InputField label={intlStore.getMessage(intlData, 'postalCode')}
                                    labelWeight={this.props.labelWeight}
                                    value={this.state.address.postalCode}
                                    onChange={this.handleFieldChange.bind(null, 'postalCode')}
                                    error={this.state.fieldErrors['postalCode']} />
                        <InputField label={intlStore.getMessage(intlData, 'city')}
                                    labelWeight={this.props.labelWeight}
                                    value={this.state.address.city}
                                    onChange={this.handleFieldChange.bind(null, 'city')}
                                    error={this.state.fieldErrors['city']} />
                    </InlineItems>
                </div>
                <div className="address-field__item">
                    <InlineItems>
                        <InputField label={intlStore.getMessage(intlData, 'state')}
                                    labelWeight={this.props.labelWeight}
                                    value={this.state.address.state}
                                    onChange={this.handleFieldChange.bind(null, 'state')}
                                    error={this.state.fieldErrors['state']} />
                        <Select label={intlStore.getMessage(intlData, 'country')}
                                placeholder
                                options={countryOptions}
                                labelWeight={this.props.labelWeight}
                                value={this.state.address.country}
                                onChange={this.handleFieldChange.bind(null, 'country')}
                                error={this.state.fieldErrors['country']} />
                    </InlineItems>
                </div>
                {this.props.onCancel || this.props.onSubmit ?
                    <div className="address-field__item">
                        <InlineItems>
                            <div>
                                {this.props.onCancel ?
                                    <Button type="default"
                                            onClick={this.props.onCancel}
                                            disabled={this.props.disabled}
                                            loading={this.props.loading}>
                                        {this.props.cancelLabel || intlStore.getMessage(intlData, 'cancel')}
                                    </Button>
                                    :
                                    null
                                }
                            </div>
                            <div>
                                {this.props.onSubmit ?
                                    <Button type="primary"
                                            onClick={this.handleSubmitClick}
                                            disabled={this.props.disabled}
                                            loading={this.props.loading}>
                                        {this.props.submitLabel || intlStore.getMessage(intlData, 'submit')}
                                    </Button>
                                    :
                                    null
                                }
                            </div>
                        </InlineItems>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}

/**
 * Exports
 */
export default AddressField;
