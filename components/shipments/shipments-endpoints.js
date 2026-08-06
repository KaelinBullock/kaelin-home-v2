import { Box, useColorModeValue } from '@chakra-ui/react';

import {
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,
} from '@chakra-ui/react';
import { endpoints } from '../assets/constants';
import React from 'react';

 const GetLabel = () => {return (<a style={{color: '#77ad78'}}>GET</a>);};
 const PostLabel = () => {return (<a style={{color: '#FCBA04'}}>POST</a>);};

const Endpoints = (props) => {
   const [currentEndpoint, setCurrentEndpoint] = React.useState(endpoints.GET_COMPANIES);

   function ChooseEndpoint(value) {
      
      props.onClick?.(value);
      setCurrentEndpoint(value);
    }

    function EndpointPanel(endpointName) {
      const endpointNameValue = Object.values(endpointName)[0];
      const colorMode = useColorModeValue('#7c60ce', '#4c426e');
      
      let displayName = 'Company';
      let label = <GetLabel/>;
      switch(endpointNameValue) {
         case endpoints.GET_COMPANIES:
            displayName = 'Companies';
            break;
         case endpoints.GET_COMPANY_BY_NAME:
            displayName = 'Company By Name';
            break;
         case endpoints.SAVE_COMPANY:
            label = <PostLabel/>;
            break;
         case endpoints.GET_LOCATIONS:
            displayName = 'Locations';
            break;
         case endpoints.GET_LOCATION_BY_NAME:
            displayName = 'Locations By Name';
            break;
         case endpoints.SAVE_LOCATION:
            displayName = 'Save Locations';
            label = <PostLabel/>;
            break;
         case endpoints.GET_SHIPMENTS:
            displayName = 'Shipments';
            break;
         case endpoints.SAVE_SHIPMENT:
            displayName = 'Save Shipments';
            label = <PostLabel/>;
            break;
         default:
            return;
       }

      return (
         <AccordionPanel h='100%' display='flex' alignContent='center' alignItems='center' verticalAlign='center' pl={8} textAlign='center' style={ {backgroundColor: currentEndpoint === endpointNameValue ? colorMode : 'transparent'}}>
            <Box onClick={() => ChooseEndpoint(endpointNameValue, props, setCurrentEndpoint )}> {label} {displayName} </Box>
         </AccordionPanel>
      );
   }


   return (
      <Accordion borderColor={useColorModeValue('blackAlpha.500','gray.500')} defaultIndex={[0]} allowMultiple>
         <AccordionItem cursor='pointer'>
            <h2>
               <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                     Company
                  </Box>
                  <AccordionIcon />
               </AccordionButton>
            </h2>
            <EndpointPanel endpointName={endpoints.GET_COMPANIES} />
            <EndpointPanel endpointName={endpoints.GET_COMPANY_BY_NAME}/>
            <EndpointPanel endpointName={endpoints.SAVE_COMPANY}/>
         </AccordionItem>

         <AccordionItem cursor='pointer'>
            <h2>
               <AccordionButton>
               <Box as="span" flex='1' textAlign='left'>
                  Location
               </Box>
               <AccordionIcon />
               </AccordionButton>
            </h2>
            <EndpointPanel endpointName={endpoints.GET_LOCATIONS} />
            <EndpointPanel endpointName={endpoints.GET_LOCATION_BY_NAME}/>
            <EndpointPanel endpointName={endpoints.SAVE_LOCATION}/>
         </AccordionItem>

         <AccordionItem cursor='pointer'>
            <h2>
               <AccordionButton>
               <Box as="span" flex='1' textAlign='left'>
                  Shipment
               </Box>
               <AccordionIcon />
               </AccordionButton>
            </h2>
            <EndpointPanel endpointName={endpoints.GET_SHIPMENTS} />
            <EndpointPanel endpointName={endpoints.SAVE_SHIPMENT}/>
         </AccordionItem>
      </Accordion>
   );
};

export default Endpoints;