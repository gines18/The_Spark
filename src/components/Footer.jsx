import React from 'react'

import './Footer.css'

let data_footer = [
    {
        header: "Contact Us",
        one: 'Individual Counselling',
        two: 'Couples Counselling',
        three: 'Marriage Counselling',
        four: 'Family Counselling',
        five: 'Youth Counselling',
        six: 'Counselling for Children',
        seven: 'The Counselling Helpline',
        eight: 'Training Courses',
    },
    {
        header: "Our Services",
        one: 'The Spark Blog',
        two: 'Frequently Asked Questions',
        three: 'Support Us',
        four: 'Work With Us',
        five: 'Meet the Team',
        six: 'Opening Hours',
        seven: 'Counselling Locations',
        eight: undefined,
    },
    {
        header: "About Us",
        one: 'Confidentiality Promise',
        two: 'Child & Vulnerable Adult',
        three: 'Protection',
        four: 'Privacy Policy',
        five: 'Cookie Policy',
        six: 'Terms & Conditions',
        seven: 'Complaints Procedure',
        eight: undefined,
    },
  
]


export default function Footer() {
  return (
    <div id='footer_container'>
        
     {data_footer.map((item) => (
        <div>
            <p>{item.header}</p>
<br />
            <p>{item.one}</p>
            <p>{item.two}</p>
            <p>{item.three}</p>
            <p>{item.four}</p>
            <p>{item.five}</p>
            <p>{item.six}</p>
            <p>{item.seven}</p>
            {item.eight !== undefined ? <p>{item.eight}</p> : <p></p>}
           
        
        </div>
     ))}
        
        </div>
  )
}
