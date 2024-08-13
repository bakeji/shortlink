"use client"
import { LogInContext } from '@/context/login'
import {
    Alert,
    AlertIcon,
  } from '@chakra-ui/react'
import { useContext } from 'react'
export default function LogInAlert(){

    const { error, loading, success} = useContext(LogInContext) 


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