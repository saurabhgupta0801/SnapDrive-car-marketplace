import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function Header() {
    const {user,isSignedIn}=useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
        <Link to={'/'}>
            <img src='/logo.svg' width={200} height={160} />
        </Link>
        <ul className='hidden  md:flex gap-16'>
            <text style={{ fontWeight: 'bold' , fontStyle : "italic" , fontSize : 30}}>GREAT DEALS - REAL CARS - NO HASSLE </text>
        </ul>

        {isSignedIn?
            <div className='flex items-center gap-5'>
                <UserButton/>
                <Link to={'/profile'}>
                    <Button>Submit Listing</Button>
                </Link>
            </div>
            :
            <SignInButton mode="modal" fallbackRedirectUrl='/profile'>
            <Button>Submit Listing</Button>
            </SignInButton>
        }

    </div>
  )
}

export default Header