"use client"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
  import Image from 'next/image'

export default function CustomizeUrl(){
  
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button onClick={onOpen}>  <Image src="/link1.png" alt="dashboard icon" width={16} height={20} />Customize URL</Button>
      
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Customize Your Url</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className="shrt-url">
                        <div>
                            <label>Enter the  URL you want to customize</label>
                            <input type='url'  placeholder="Enter URL" />
                        </div>

                        <div>
                            <label>custom Name</label>
                            <input type='text'  placeholder="Enter custom Name" />
                            
                        </div>

                        <p> Customized URL</p>
                   
                        <div className='nw-url-cont'>

                            <div className="nw-url">
                                <p>www.bitly.bbbbbhhhh.com</p>
                            </div>
                                <Button colorScheme='blue' mr={3}>
                                    copy
                                </Button>
                        </div>

                    </div>

                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Customize
                  </Button>
                  <Button colorScheme='red' onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }

