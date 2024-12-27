import React from 'react'
import { TextField, Button } from '@mui/material'

const QueryForm = () => {
    return (
        <div className='m-20 p-4 rounded-md'>
            {/* <p className='text-4xl font-bold text-[#b20000]'>Query Form</p> */}
            <div className="form">
                <div className="py-4 grid grid-cols-2 gap-4">
                    <div>
                        <TextField
                            label="First Name"
                            id="outlined-size-small"
                            size="small"
                            color="tertiary"
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            label="Last Name"
                            id="outlined-size-small"
                            size="small"
                            color="tertiary"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="py-4 grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <TextField
                            label="Company Name"
                            id="outlined-size-small"
                            size="small"
                            color="tertiary"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="py-4 grid grid-cols-2 gap-4">
                    <div>
                        <TextField
                            label="Email"
                            id="outlined-size-small"
                            size="small"
                            color="tertiary"
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            label="Contact"
                            id="outlined-size-small"
                            size="small"
                            color="tertiary"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="py-4 grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            color="tertiary"
                            fullWidth
                        />
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <Button color='primary' variant='contained' >Submit</Button>
                </div>
            </div>

        </div>
    )
}

export default QueryForm