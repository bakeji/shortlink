"use client"
import { SignUpContext } from '@/context/signup'
import {
    Alert,
    AlertIcon,
  } from '@chakra-ui/react'
import { useContext } from 'react'
export default function SignUpAlert(){

    const { error, loading, success} = useContext(SignUpContext) 


    return(
        <div className="alrt">

          { error!==""  && !loading && success==="" && <Alert status='error'>
                <AlertIcon />
                {error}
            </Alert>}

           {success!=="" && <Alert status='success'>
                <AlertIcon />
               {success}
            </Alert>}

        </div>
    )

  }