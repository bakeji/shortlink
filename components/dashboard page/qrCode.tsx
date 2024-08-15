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
    Spinner,
    useDisclosure
  } from '@chakra-ui/react'
  import Image from 'next/image'
import { useState } from 'react'

export default function QrCode(){
  
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [link, setLink] = useState("")
        const [qrCode, setQrCode]= useState("")
        const [loading, setLoading]= useState(false)


        function handleChange(e: React.ChangeEvent<HTMLInputElement>){
            setLink(e.target.value)
         }

         
            // create customized url function
        async function CreateQrCode():Promise<void>{
            setLoading(true)
            if(link !== ""){
            const options = {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "type": "link",
                    "data": link
                }),
            };
        
            try {
                const response = await fetch('/api/qr/add',  options);
                const data = await response.json()
                setQrCode(data.link)
                console.log(data);
            } 
            catch (error: any) {
                console.log(error.message);
            }
            finally{
                setLoading(false)
            }
             }
       
    }

    function downloadQrCode(){
        const link = document.createElement("a");
        link.href = qrCode;
        link.download = "qrCode";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);  
    }




      
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
                            <input
                             type='url' 
                              placeholder="Enter URL"
                              onChange = {handleChange} 
                              value={link}
                              name ="link"/>
                        </div>

                       

{qrCode !== "" &&
<>
                        <p> QR Code</p>
                   
                        <div className='nw-url-cont'>

                            <div className="">
                                <img src={qrCode} alt="qr code" width={200} height={200} />
                            </div>
                            
                                <Button onClick={downloadQrCode} colorScheme='blue' mr={3}>
                                    Download
                                </Button>
                        </div>
                        </>
}

                    </div>

                </ModalBody>
      
                <ModalFooter>
                {qrCode === "" &&
                  <Button disabled={link===""} onClick={CreateQrCode} colorScheme='blue' mr={3}>
                    {loading? <Spinner />: "Create Qr Code"}
                  </Button>
}
          
                  <Button colorScheme='red' onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }

