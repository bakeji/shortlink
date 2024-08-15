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

export default function CustomizeUrl(){
    // states
        const [newUrl, setNewUrl] = useState("")
        const [copied, setCopied] = useState(false) 
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [loading, setLoading]= useState(false)
        const [urlInfo, setUrlInfo] = useState({
            url: '',
            customName: ''
        })
      

        // handleChanege function
        function handleChange(e: React.ChangeEvent<HTMLInputElement>){
           setUrlInfo(prev=>{
            return{
                ...prev,
                [e.target.name]: e.target.value
            }
           })
           
        }

            // create customized url function
        async function CreateCustomizedUrl():Promise<void>{
            setLoading(true)
            if(urlInfo.url === "" && urlInfo.customName === ""){
            const options = {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer 7e4ffceb7305af92a548ebf6ae19c489',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "url": urlInfo.url,
                    "custom": urlInfo.customName
                }),
            };
        
            try {
                const response = await fetch('/api/url/add',  options);
                const data = await response.json()
                setNewUrl(data.shorturl)
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
    // clear input fields after closing modal
    function clearInputFields(){
        onClose()
        setUrlInfo({
            url: '',
            customName: ''
        })
        setNewUrl("")

    }
    // copy to clipboard function
    function copyToClipboard(){
        navigator.clipboard.writeText(newUrl)
                setTimeout(()=>{
                    setCopied(true)
                }, 1000)
    }
      
        return (
          <> 
            <Button onClick={onOpen}>  <Image src="/link1.png" alt="dashboard icon" width={16} height={20} />Customize URL</Button>
      
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={clearInputFields}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Customize Your Url</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className="shrt-url">
                        <div>
                            <label>Enter the  URL you want to customize</label>
                            <input
                             type='url'  
                             placeholder="Enter URL"
                             value={urlInfo.url}
                             name='url'
                             onChange={handleChange}
                              />
                        </div>

                        <div>
                            <label>custom Name</label>
                            <input 
                            type='text'  
                            placeholder="Enter custom Name"
                            value={urlInfo.customName}
                            name='customName'
                            onChange={handleChange}
                             />
                            
                        </div>
                        {newUrl !== "" &&
                    <div>
                        <p> Customized URL</p>
                   
                        <div className='nw-url-cont'>

                            <div className="nw-url">
                                <p>{newUrl}</p>
                            </div>
                                <Button onClick={copyToClipboard} colorScheme='blue' mr={3}>
                                    {copied? "Copied!": "Copy"}
                                </Button>
                        </div>

</div>
}

                    </div>
                   

                </ModalBody>
      
                <ModalFooter>
                    {newUrl === "" &&
                  <Button disabled={urlInfo.url === "" && urlInfo.customName === ""} onClick={CreateCustomizedUrl} colorScheme='blue' mr={3}>
                    {loading? <Spinner />: "Customize"}
                  </Button>
}
                  <Button colorScheme='red' onClick={ clearInputFields}>Cancel</Button>
                </ModalFooter>

              </ModalContent>
            </Modal>
          </>
        )
      }

