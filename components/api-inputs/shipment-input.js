import React, { useState } from 'react';

import { Box, Text, Input } from '@chakra-ui/react';
import { getContactsList } from '../../redux/services/shipmentsService';
import DropdownMenu from './DropdownMenu';
import KeyValue from './key-value';

const ShipmentInput = ({setPayload}) => {
   const [shipment, setShipment] = useState({
      name: '',
      contact: null
   });

   const [contacts, setContacts] = React.useState(null);

   const setContactOnShipment = (contact) => {
      setShipment(prevState => ({
         ...prevState,
         contact
      }));
   };

   const setShipmentValues = (e) => {
      const { name, value } = e.target;
      setShipment(prevState => ({
            ...prevState,
            [name]: value
      }));
   };

   React.useEffect(() => {
      getContactsList(setContacts);
   }, []);

   React.useEffect(() => {
      setPayload(prevState => ({
         ...prevState,
         shipment
      }));
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [shipment]);

   return (
      <Box mt={4} position='relative' display='flex' maxWidth='full' w='full' flexDir={{base:'column-reverse', sm:'row'}}>
         <Box display='flex' flexDir='column' w='full' borderRadius={8} gap={4} pb={4}>
            <KeyValue/>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='130px'>Name:</Text> 
               <Input placeholder='Name' name="name" size='md' value={shipment.name} onChange={(e) => setShipmentValues(e)}/>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='130px'>Contact:</Text> 
               <DropdownMenu menuItems={contacts} setValue={setContactOnShipment} style={{width: '100%'}}></DropdownMenu>
            </Box>
         </Box>
      </Box>
   );
};

export default ShipmentInput;