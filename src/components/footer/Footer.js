import React from 'react'
import "../../styles/Footer.css";

const Footer = () => {

    const items = Array(8).fill('HelpDesk');

    const sections = [
        {
            title: 'FEATURES',
            items: [
                'Email Ticketing',
                'Knowledge Base',
                'Help Desk Reporting',
                'Help Desk Automation',
                'Multilingual Help Desk',
                'Self Service Portal',
                'SLA Management',
                'Satisfaction Survey',
                'Email Notification',
                'Help Desk Customization',
                'Help Desk Ticket Features',
                'Multilingual Knowledge Base',
                'Internal Knowledge Base',
                'HappyFox SMS',
                'Asset Management',
                'Task Management',
                'Agent Scripting'
            ]
        },
        {
            title: 'For Businesses',
            items: [
                'Enterprise',
                'Small-Business'
                // Add more business-related items here
            ]
        },
        {
            title: 'For Industries',
            items: [
                'Education',
                'Retail',
                'Travel',
                'IT Services',
                'Telecom',
                'Government',
                'Non-Profit Organizations',
                'Healthcare',
                'Real Estate',
                'Airlines',
                'Manufacturing',
                'Shipping'
                // Add more industry-related items here
            ]
        },
        {
            title: 'For Teams',
            items: [
                'Customer Support',
                'IT',
                'HR',
                'Accounting',
                'Facilities',
                'Marketing',
                'Sales'
                // Add more team-related items here
            ]
        },
        {
            title: 'Switch to HappyFox',
            items: [
                'Switch from Zendesk',
                'Switch from Kayako'
                // Add more switch-related items here
            ]
        },
        {
            title: 'Compare',
            items: [
                'Zendesk vs HappyFox',
                'Freshdesk vs HappyFox',
                'Kayako vs HappyFox',
                'Zohodesk vs HappyFox',
                'Gmail Alternative for Support'
                // Add more comparison-related items here
            ]
        },
        {
            title: 'Use Cases',
            items: [
                'Help Desk Software',
                'Ticketing System',
                'Shared Inbox Software',
                'Trouble Ticket Management',
                'Issue Tracking Software',
                'Customer Service',
                'Email Support Software',
                'Customer Complaint Management',
                'Internal Help Desk Software',
                'Ticket Tracking Software',
                'Contact Center Software',
                'IT Help Desk Software',
                'Case Management Software',
                'Cloud Help Desk',
                'Mobile Help Desk',
                'Remote Customer Support',
                'Multi-Brand Helpdesk',
                'Software Request Management System',
                'Field Service Software',
                'Work Order Management'
                // Add more use cases-related items here
            ]
        },
        {
            title: 'Resources',
            items: [
                'E-Books & Guides',
                'Webinars',
                'Customer Stories',
                'Videos',
                'Blog',
                'Help Desk API Docs'
                // Add more resource-related items here
            ]
        },
        {
            title: 'Company',
            items: [
                'About Us',
                'Our Customers',
                'Jobs',
                'Press & Media',
                'Partner program'
                // Add more company-related items here
            ]
        },
        {
            title: 'Contact Us',
            items: [
                'Contact Sales',
                'Get Support',
                '1-949-535-2220',
                'support@happyfox.com'
                // Add more contact-related items here
            ]
        }
    ];

    const renderSection = (section) => (
        // <div className='footer-column'>
        <>
            <h2>{section.title}</h2>
            {section.items.map((item, index) => (
                <p key={index}><a>{item}</a></p>
            ))}
        
        </>
    );

  return (

    <>
        <footer>
            <div>
            <div className='footer-container'>
                <div className='footer-logo-wrapper'>
                    <img id="hfFooterlogo" src="https://assets.www.happyfox.com/v2/images/zendesk-alternative/hf-mini.png" width="45" alt="happyfox logo" class="hf-footer__logo" />
                </div>

                <div className='footer-rows'>
                    {/* <div className='test1'>
                        <div className='footer-column'>
                            <h2>
                                FEATURES
                            </h2>

                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                        </div>

                        <div className='footer-column'>

                            <h2>
                                FEATURES
                            </h2>

                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>



                            <h2>
                                FEATURES
                            </h2>

                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>



                            <h2>
                                FEATURES
                            </h2>

                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                        </div>

                        <div className='footer-column'>
                        <h2>
                                FEATURES
                            </h2>

                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                        </div>

                        <div className='footer-column'>
                        <h2>
                                FEATURES
                            </h2>

                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>


                            <h2>
                                FEATURES
                            </h2>

                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>



                            <h2>
                                FEATURES
                            </h2>

                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                            <p><a>Email Ticketing</a></p>
                        </div>
                    </div> */}
                <div className='test1'>
                    {sections.map((section, index) => (
                        
                            <div className='footer-column'>
                            {renderSection(section)}
                        </div>
                    ))}

                </div>
                </div>

            </div>

            </div>



            <div className='bottom-footer'>
            <div className='bottom-footer-container'>
                <div className='rows'>
                    <div>
                        <div className='footer-product-list'>
                            <div className='product-list-wrapper'>
                            {items.map((item, index) => (<ul>
                                    <li>
                                        <a>
                                            <img src="https://assets.www.happyfox.com/v2/images/site-nav/helpdesk-logo-2022.svg" alt="Help Desk logo" width="20" height="20" />
                                        </a>
                                        <span>HelpDesk</span>
                                    </li>
                                </ul>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row footer-final-row'>
                    
                </div>
            </div>
        </div>


        </footer>
    </>
  )
}

export default Footer