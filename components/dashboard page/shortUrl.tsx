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

export default function ShortenUrl(){
  
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button onClick={onOpen}>  <Image src="/link1.png" alt="dashboard icon" width={16} height={20} />Shorten URL</Button>
      
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Shorten Your Url</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className="shrt-url">
                    <label>Enter the long URL you want to shorten</label>
                    <input type='url'  placeholder="Enter URL" />
                   
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
                    Shorten URL
                  </Button>
                  <Button colorScheme='red' onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }

