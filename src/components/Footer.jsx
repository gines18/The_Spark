import React from 'react'

import './Footer.css'

let data_footer = [


    {
        header: "Contact Us",
        one: '100 Wellington Street',
        two: 'Glasgow',
        three: 'G2 6DH',
        four: '',
        five: '0141 222 21 66',
        six: '',
        seven: '',
     
       
    }, 
    {
        header: "Our Services",
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
        header: "About Us",
        one: 'The Spark Blog',
        two: 'Frequently Asked Questions',
        three: 'Support Us',
        four: 'Work With Us',
        five: 'Meet the Team',
        six: 'Opening Hours',
        seven: 'Counselling Locations',
        eight: " ",
    },
    {
        header: "Legal Stuff",
        one: 'Confidentiality Promise',
        two: 'Child & Vulnerable Adult',
        three: 'Protection',
        four: 'Privacy Policy',
        five: 'Cookie Policy',
        six: 'Terms & Conditions',
        seven: 'Complaints Procedure',
        eight: " ",
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
            {item.data_footer === " " ? <p>{item.four}</p> : <p></p>}
            <p>{item.five}</p>
            {item.data_footer === " " ? <p>{item.six}</p> : <p></p>}
            {item.data_footer === " " ? <p>{item.seven}</p> : <p></p>}
            {item.data_footer === " " ? <p>{item.eight}</p> : <p></p>}
           
        
        </div>
     ))}
        
        </div>
  )
}
