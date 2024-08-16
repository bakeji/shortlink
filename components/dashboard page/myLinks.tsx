"use client"
import { DashboardContext } from '@/context/dash'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import { useContext } from 'react'

 

export default function MyLinks(){

 interface UrlData {
        id: string;
        data?:{
        originalUrl?: string;
        shortenedUrl?: string;
        createdAt?: string;
        clickCount?: number;
        activity? : string
        }
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const{data}= useContext(DashboardContext)

    return(
        <div className="my-link">
            <Button onClick={onOpen}>My Links</Button>
            <Drawer onClose={onClose} isOpen={isOpen} size="md">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>MY Links</DrawerHeader>
                    <DrawerBody>
                        <div className="links">
                        {data.map((id:number, item:UrlData )=>(
                
                            <div key={id} className='nw-url-cont'>
                               
                                <div className="nw-url">
                                    <p>{item.data?.shortenedUrl
                                    }</p>
                                </div>
                                    {/* <Button colorScheme='blue' mr={3}>
                                        copy
                                    </Button> */}
                            </div>
                        ))}   
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}