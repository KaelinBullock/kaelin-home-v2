import React, { useState } from 'react';

import { RadioGroup, Stack, Radio, Box, Text, Input } from '@chakra-ui/react';
import { endpoints } from '../assets/constants';
import Layout from '../layouts/animation-layout';
import KeyValue from './key-value';

//TODO try putting the payload directly in here instead of setting the location then setting the payload
const LocationInput = ( {currentEndpoint, setPayload} ) => {
   const [location, setLocation] = useState({name:'', street:'', suite:'', city:'', state:'', zipcode:'', timezone:'', latitude:'', longitude:'', locationType:''});
   const handleChange = (e) => {
      
      const { name, value } = e.target;
      setLocation(prevState => ({
            ...prevState,
            [name]: value
      }));
   };

   const setLocationType = (type) => {
      setLocation(prevState => ({
         ...prevState,
         'locationType': type
      }));
   };

   React.useEffect(() => {
      setPayload(prevState => ({
         ...prevState,
         location
      }));
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [location]);

   return (
      <Box mt={4} position='relative' display='flex' maxWidth='full' w='full' flexDir={{base:'column-reverse', sm:'row'}}>
         <Box display='flex' flexDir='column' w='full' borderRadius={8} gap={4} pb={4}>
            <KeyValue/>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='130px'>Name:</Text> 
               <Input name="name" placeholder='Location Name' size='md' value={location.name} onChange={(e) => handleChange(e)}/>
            </Box>
            { currentEndpoint === endpoints.SAVE_LOCATION ? 
               <>
                  <Layout>
                     <Box display='flex' flexDir='column' w='full' borderRadius={8} gap={4} pb={4}>
                        <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
                           <Text w='130px'>Street:</Text> 
                           <Input name="street" placeholder='Street' size='md' value={location.street} onChange={(e) => handleChange(e)}/>
                        </Box>
                        <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
                           <Text w='130px'>Suite:</Text> 
                           <Input name="suite" placeholder='Suite' size='md' value={location.suite} onChange={(e) => handleChange(e)}/>
                        </Box>
                        <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
                           <Text w='130px'>City:</Text> 
                           <Input name="city" placeholder='City' size='md' value={location.city} onChange={(e) => handleChange(e)}/>
                        </Box>
                        <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
                           <Text w='130px'>State:</Text> 
                           <Input name="state" placeholder='State' size='md' value={location.state} onChange={(e) => handleChange(e)}/>
                        </Box>
                        <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
                           <Text w='130px'>Zipcode:</Text> 
                           <Input name="zipcode" placeholder='Zipcode' size='md' value={location.zipcode} onChange={(e) => handleChange(e)}/>
                        </Box>
                        <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
                           <Text w='130px'>Time Zone:</Text> 
                           <Input name="timeZone" placeholder='Time Zone' size='md' value={location.timeZone} onChange={(e) => handleChange(e)}/>
                        </Box>
                        <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
                           <Text w='130px'>Latitude:</Text> 
                           <Input name="latitude" placeholder='Latitude' size='md' value={location.latitude} onChange={(e) => handleChange(e)}/>
                        </Box>
                        <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
                           <Text w='130px'>Longitude:</Text> 
                           <Input name="longitude" placeholder='Longitude' size='md' value={location.longitude} onChange={(e) => handleChange(e)}/>
                        </Box>
                        <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
                           <Text w='130px'>Location Type:</Text> 
                           <RadioGroup name="locationType" onChange={(type) => setLocationType(type)} value={location.locationType}>
                              <Stack direction='row'>
                                 <Radio name="locationType" value='BUSINESS'>Business</Radio>
                                 <Radio name="locationType"  value='RESIDENTIAL'>Residential</Radio>
                                 <Radio name="locationType"  value='STORAGE'>Storage</Radio>
                              </Stack>
                           </RadioGroup>
                        </Box>
                     </Box>
                  </Layout>
               </> :
               <></>
            }
            
         </Box>
      </Box>
   );
};

export default LocationInput;