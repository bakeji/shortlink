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
    useDisclosure,
    Spinner
  } from '@chakra-ui/react'
  import Image from 'next/image'
import { useState, useContext } from 'react'



export default function ShortenUrl(){

    //   states
    const [shortUrl, setShortUrl]= useState("")
    const [loading, setLoading]= useState(false)
    const [url, setUrl]=useState("")
    const [copied, setCopied] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure() 
    const [error, setError] = useState('')
    const {saveUrl} = useContext(DashboardContext)
    const opt: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      

     // check for empty fields
     const IsEmpty=
     Object.values(url).some(
      (value) => !value)

    // handleChanege function
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setUrl(e.target.value)            
     }

      // clear input fields after closing modal
    function clearInputFields(){
        onClose()
        setShortUrl("")
        setUrl("")
        setError("")
    }
     // copy to clipboard function
     function copyToClipboard(){
            setCopied(true)
        navigator.clipboard.writeText(shortUrl)
                setTimeout(()=>{
                    setCopied(false)
                }, 1000)
    }

    // shorten url function
    async function CreateShortUrl():Promise<void>{
        if(url !== ""){
          setLoading(true)
        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "url": url
            }),
        };
    
        try {
            const response = await fetch('https://urlbae.com/api/url/add',  options);
            const data = await response.json()
            setShortUrl(data.shorturl)
            saveUrl({
                originalUrl: url,
                shortenedUrl: data.shorturl,
                activity: "shorten url",
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
          setError("Please fill in all fields")
         }
   
}
  

      
        return (
          <>
            <Button onClick={onOpen}>  <Image src="/link1.png" alt="dashboard icon" width={16} height={20} />Short URL</Button>
      
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={clearInputFields}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Shorten Your Url</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className="shrt-url">
                      <>
                      {url ==="" && <p className='err'> {error} </p>}
                      </>
                    <label>Enter the long URL you want to shorten</label>
                    <input type='url' 
                     placeholder="Enter URL" 
                     value={url}
                     name="url"
                     onChange={handleChange}
                     />
                   
                    <div className='nw-url-cont'>
                        {shortUrl !== "" &&
                        <>

                        <div className="nw-url">
                            <p>{shortUrl}</p>
                        </div>
                                <Button onClick={copyToClipboard} colorScheme='blue' mr={3}>
                                    {copied? "Copied!": "Copy"}
                                </Button>
                                </>
}
                    </div>
                        

                 </div>

                </ModalBody>
      
                <ModalFooter>
                {shortUrl ==="" &&
                  <Button  onClick={CreateShortUrl} colorScheme='blue' mr={3}>
                    {loading? <Spinner />: "Shorten"}
                  </Button>
}
                  <Button colorScheme='red' onClick={clearInputFields}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }

