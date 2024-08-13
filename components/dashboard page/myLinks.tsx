"use client"
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

export default function MyLinks(){
    const { isOpen, onOpen, onClose } = useDisclosure()
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
                            <div className='nw-url-cont'>
                                <div className="nw-url">
                                    <p>www.bitly.bbbbbhhhh.com</p>
                                </div>
                                    <Button colorScheme='blue' mr={3}>
                                        copy
                                    </Button>
                            </div>

                            <div className='nw-url-cont'>
                                <div className="nw-url">
                                    <p>www.bitly.bbbbbhhhh.com</p>
                                </div>
                                    <Button colorScheme='blue' mr={3}>
                                        copy
                                    </Button>
                            </div>

                            <div className='nw-url-cont'>
                                <div className="nw-url">
                                    <p>www.bitly.bbbbbhhhh.com</p>
                                </div>
                                    <Button colorScheme='blue' mr={3}>
                                        copy
                                    </Button>
                            </div>

                            <div className='nw-url-cont'>
                                <div className="nw-url">
                                    <p>www.bitly.bbbbbhhhh.com</p>
                                </div>
                                    <Button colorScheme='blue' mr={3}>
                                        copy
                                    </Button>
                            </div>

                            <div className='nw-url-cont'>
                                <div className="nw-url">
                                    <p>www.bitly.bbbbbhhhh.com</p>
                                </div>
                                    <Button colorScheme='blue' mr={3}>
                                        copy
                                    </Button>
                            </div>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}