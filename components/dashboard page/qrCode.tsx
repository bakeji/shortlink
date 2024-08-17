"use client"
import { DashboardContext } from '@/context/dash'
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
import { useState, useContext } from 'react'

export default function QrCode(){
  
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [link, setLink] = useState("")
        const [qrCode, setQrCode]= useState("")
        const [loading, setLoading]= useState(false)
        const [error, setError] = useState('')
        const {saveUrl} = useContext (DashboardContext)
        const opt: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      

        function handleChange(e: React.ChangeEvent<HTMLInputElement>){
            setLink(e.target.value)
         }

         
            // create customized url function
        async function CreateQrCode():Promise<void>{
            if(link !== ""){
              setLoading(true)
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
                saveUrl({
                  originalUrl: link,
                  shortenedUrl: qrCode,
                  activity: "qrcode",
                  date: new Date().toLocaleDateString('en-US', opt)
              })
            } 
            catch (error: any) {
                console.log(error.message);
            }
            finally{
                setLoading(false)
            }
             }
             else{
              setError("Please enter a link")
             }
       
    }
    function clearInputFields(){
      onClose()
      setLink("")
      setQrCode("")
      setError("")
  }

    function downloadQrCode(){
        const link = document.createElement("a");
        link.href = qrCode;
        link.download = "qrCode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);  
    }




      
        return (
          <>
            <Button onClick={onOpen}>  <Image src="/link1.png" alt="dashboard icon" width={16} height={20} />Qr Code</Button>
      
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={clearInputFields}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create a QR Code</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className="shrt-url">
                    {link === "" && <p className='err'> {error} </p>}
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
                                <Image src={qrCode}  alt="qr code" width={100} height={100} />
                            </div>
                            
                        </div>
                        </>
}

                    </div>

                </ModalBody>
      
                <ModalFooter>
              
                  <Button onClick={qrCode ===""? CreateQrCode : downloadQrCode} colorScheme='blue' mr={3}>
                    {loading? <Spinner />: qrCode===""? "Create Qr Code": "Download"}
                  </Button>

          
                  <Button colorScheme='red' onClick={clearInputFields}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }

