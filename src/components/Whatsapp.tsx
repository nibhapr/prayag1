import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from "@images/logo4.png";
import { color } from 'framer-motion';
import type { transparent } from 'tailwindcss/colors';

const Whatsapp = () => {
     const logoUrl = logo.src;
    return <FloatingWhatsApp  
    accountName='Prayag Group' 
    phoneNumber='+917559977058' 
    avatar={logoUrl} 
    statusMessage="Live chat now"
    chatMessage="Welcome to Prayag 🤝. How can we help?"
    notificationSound = {true}
    chatboxClassName='floating-orchid'
    chatboxStyle={{
        backgroundColor:'#000000'}}
    />
}

export default Whatsapp;