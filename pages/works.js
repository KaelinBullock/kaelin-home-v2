import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import worksThumb from '../public/images/works/music-stock.png';
import worksAPI from '../public/images/works/shipping-stock.png';
import Layout from '../components/layouts/article';

const Works = () => {
   return (
      <Layout title="Works">
         <Container pt={4}>
            <Heading as='h3' fontSize={20} mb={4}>
               Works
            </Heading>
            <SimpleGrid columns={[1, 1, 1]} gap={4}>
               <Section delay={0.3}>
                  <WorkGridItem id="music" title='Music App' thumbnail={worksThumb}>
                     Music app made using public API
                  </WorkGridItem>
                  <WorkGridItem id="shipment-api" title='Shipment Api' thumbnail={worksAPI}>
                     Shipping API interface using my own API, that I am hosting
                  </WorkGridItem>
               </Section>
            </SimpleGrid>
         </Container>
      </Layout>
   );
};

export default Works;