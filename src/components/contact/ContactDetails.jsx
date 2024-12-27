import React from 'react'

const ContactDetails = () => {
    return (
        <div className='bg-[#FCEBEB] m-20 p-4 shadow-custom rounded-md'>
            <p className='text-4xl font-bold text-[#0c315b]'>Get in Touch</p>
            <div className='p-2'>
                <p className='font-semibold text-[#b20000] text-md'>Visit Us</p>
                <p className='italic text-[#3f3f3f] text-sm'>Come say hello at our office.</p>
                <p className='font-medium text-[#3f3f3f] text-sm'>124-A Katwaria Sarai,
                    New Delhi 110016, India.</p>
            </div>
            <div className='p-2'>
                <p className='font-semibold text-[#b20000] text-md'>Chat With Us</p>
                <p className='italic text-[#3f3f3f] text-sm'>Our friendly team is here to help.</p>
                <a href="mailto:post@mlinfomap.com" className='font-medium text-[#3f3f3f] text-sm'>post@mlinfomap.com</a>
            </div>
            <div className='p-2'>
                <p className='font-semibold text-[#b20000] text-md'>Call Us</p>
                <p className='italic text-[#3f3f3f] text-sm'>Mon-Fri (odd Sat) from 9am to 5:30pm.</p>
                <p className='font-medium text-[#3f3f3f] text-sm'>+91 11 41688592, +91 11 41688593</p>
            </div>
            <div className='p-2'>
                <p className='font-semibold text-[#b20000] text-md'>Connect With Us</p>
                <p className='italic text-[#3f3f3f] text-sm'>Explore more about us.</p>
                <p className='font-medium text-[#3f3f3f] text-sm'>
                    <a href="https://www.linkedin.com/company/ml-infomap-pvt-ltd/">www.linkedin.com/company/ml-infomap-pvt-ltd/</a>
                </p>
            </div>
        </div>
    )
}

export default ContactDetails