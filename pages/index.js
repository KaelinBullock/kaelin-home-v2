import Layout from '../components/layouts/article';
import MagazinePage from '../components/magazine-page';

import Cover from '../components/cover';
import Story from '../components/story';
import Journey from '../components/journey';
import Classroom from '../components/classroom';
// import Projects from "../components/Projects";
import Resume from '../components/resume';
import Contact from '../components/contact';

export default function Home() {
    return (
        <Layout>

            <MagazinePage id="cover">
                <Cover />
            </MagazinePage>

            <MagazinePage id="story">
                <Story />
            </MagazinePage>

            <MagazinePage id="journey">
                <Journey />
            </MagazinePage>

            <MagazinePage id="classroom">
                <Classroom />
            </MagazinePage>

            <MagazinePage id="resume" startScroll={.9}>
                <Resume />
            </MagazinePage>

            <MagazinePage id="contact">
                <Contact />
            </MagazinePage>

        </Layout>
    );
}