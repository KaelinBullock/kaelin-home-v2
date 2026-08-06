import React from 'react';

import { Container, Heading, Box, Textarea, Button, useDisclosure, Collapse, useColorModeValue } from '@chakra-ui/react';

import Endpoints from '../../components/shipments/shipments-endpoints';

import CompanyInput from '../../components/api-inputs/company-input';
import LocationInput from '../../components/api-inputs/location-input';
import ShipmentInput from '../../components/api-inputs/shipment-input';
import { endpoints } from '../../components/assets/constants';
import Layout from '../../components/layouts/animation-layout';
import { getCompaniesByName, getLocationsByName as getLocationsByName, getLocationList, getCompanyList, saveCompany, getShipmentList, saveLocation, saveShipment } from '../../redux/services/shipmentsService';

function callEndpoint(endpoint, payload, setResponse) {
   switch(endpoint) {
      case endpoints.GET_COMPANIES:
        getCompanyList(setResponse);
        break;
      case endpoints.GET_COMPANY_BY_NAME:
        getCompaniesByName(payload.company.name, setResponse);
        break;
      case endpoints.SAVE_COMPANY:
        saveCompany(payload.company, setResponse);
        break;
      case endpoints.GET_LOCATIONS:
        getLocationList(setResponse);
        break;
      case endpoints.GET_LOCATION_BY_NAME:
        getLocationsByName(payload.location.name, setResponse);
        break;
      case endpoints.SAVE_LOCATION:
        saveLocation(payload.location, setResponse);
        break;
      case endpoints.GET_SHIPMENTS:
        getShipmentList(setResponse);
        break;
      case endpoints.SAVE_SHIPMENT:
        saveShipment(payload.shipment, setResponse);
        break;
      default:
         return;
    }
};

function ApiInput(currentEndpoint, setCurrentEndpointPage, setPayload, onOpen, onClose, payload) {
   switch(currentEndpoint) {
      case endpoints.GET_COMPANIES:
         onClose();
         break;
      case endpoints.GET_COMPANY_BY_NAME:
         onOpen();
         setCurrentEndpointPage(<CompanyInput payload={payload} setPayload={setPayload} currentEndpoint={currentEndpoint}/>);
         break;
      case endpoints.SAVE_COMPANY:
         onOpen();
         setCurrentEndpointPage(<CompanyInput payload={payload} setPayload={setPayload} currentEndpoint={currentEndpoint}/>);
         break;
      case endpoints.GET_LOCATIONS:
         onClose();
         break;
      case endpoints.GET_LOCATION_BY_NAME:
         onOpen();
         setCurrentEndpointPage(<LocationInput setPayload={setPayload} currentEndpoint={currentEndpoint}/>);
         break;
      case endpoints.SAVE_LOCATION:
         onOpen();
         setCurrentEndpointPage(<LocationInput setPayload={setPayload} currentEndpoint={currentEndpoint}/>);
         break;
      case endpoints.GET_SHIPMENTS:
         onClose();
         break;
      case endpoints.SAVE_SHIPMENT:
         onOpen();
         setCurrentEndpointPage(<ShipmentInput setPayload={setPayload}/>);
         break;
      default:
         return;
    }
}

function createTitle(currentEndpoint) {
   return currentEndpoint;
}

const Shipment = () => {
   const [response, setResponse] = React.useState('If you would like to make a call, choose an endpoint on the left, and hit the send button');
   const [payload, setPayload] = React.useState({
      'company': {
         'name': '',
         'location': null
      },
      'location': {
         'name': '', 
      }
   });
   const [currentEndpoint, setCurrentEndpoint] = React.useState(null);
   const [currentEndpointPage, setCurrentEndpointPage] = React.useState(null);
   const { isOpen, onOpen, onClose } = useDisclosure();

   if (currentEndpoint === undefined || currentEndpoint === null)  {
      setCurrentEndpoint(endpoints.GET_COMPANIES);
   };

   const switchEndpoint = (event) => {
      setCurrentEndpoint(event);
      ApiInput(event, setCurrentEndpointPage, setPayload, onOpen, onClose, payload);
   };

   const sendPayload = () => {
      var response = JSON.stringify(callEndpoint(currentEndpoint, payload, setResponse), null, '\t');
      setResponse(response);
   };

   return (
      <Layout title="Shipments API" maxWidth='full' w='full'>
         <Container maxWidth='full' w='full' p={4}  maxH='100vh' >
            <Box position='relative' display='flex' maxWidth='full' w='full' mb={20} flexDir={{base:'column', md:'row'}}>
               <Box display='flex' flexDir='column' w={{base:'full', md:'100vw', lg:'500px'}} pr={{base:'0', sm:'1rem'}}>
                  <Heading as='h2' fontWeight='bold' fontSize='1.875rem' lineHeight='2.25rem' textAlign={{base:'center', md:'left'}} p={4}>
                     Endpoints
                  </Heading>
                  <Endpoints onClick={switchEndpoint} setCurrentEndpoint={setCurrentEndpoint}/>
               </Box>
               <Box display='flex' flexDir='column' w={{md:'100vw', lg:'120vw'}} maxW='150vw'>
                  <Collapse in={isOpen}>
                     <Box>
                     {currentEndpointPage}
                     </Box>
                  </Collapse>
                  <Box display='flex'  alignItems='center'>
                     <Heading title={createTitle(currentEndpoint)} as='h2' fontWeight='bold' fontSize='1.875rem' lineHeight='2.25rem' w='full' textAlign={{base:'center', md:'left'}}  p={4}>
                        Calling: {currentEndpoint}
                     </Heading>
                     <Button colorScheme='blue' onClick={sendPayload}>Send</Button>
                  </Box>
                  <Box pl={4} h='300px' w='full'>
                     <Textarea borderColor={useColorModeValue('blackAlpha.500', 'gray.500')} value={JSON.stringify(response, null, '\t')} readOnly cursor='default' h='290px' w='full'>
                     </Textarea>
                  </Box>
               </Box>
            </Box>
         </Container>
      </Layout>
   );
};

export default Shipment;