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

export default function QrCode(){
  
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button onClick={onOpen}>  <Image src="/link1.png" alt="dashboard icon" width={16} height={20} />Qr Code</Button>
      
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create a QR Code</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className="shrt-url">
                        <div>
                            <label>Enter the  destination Url</label>
                            <input type='url'  placeholder="Enter URL" />
                        </div>

                       

                        <p> QR Code</p>
                   
                        <div className='nw-url-cont'>

                            <div className="">
                                <Image src="" alt="qr code" width={200} height={200} />
                            </div>
                                <Button colorScheme='blue' mr={3}>
                                    download
                                </Button>
                        </div>

                    </div>

                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Create QR Code
                  </Button>
                  <Button colorScheme='red' onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }

