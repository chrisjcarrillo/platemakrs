import Head from "next/head";
import fsPromises from 'fs/promises';
import path from 'path';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import { GetStaticProps } from "next";
import PlateComparison from "../components/PlateComparison/PlateComparison";
import { ImageAndText } from "../components/shared/ImageAndText/ImageAndText";
import MainSlider from "../components/MainSlider/MainSlider";

const MainHead = () => {
	return(
		<Head>
			<title>Platemakrs</title>
			<meta property="og:type"  content="article" />
            <meta property="og:title" content="Platemakrs" />
            <meta property="og:description" content="Platemakrs" />
		</Head>
	)
}

export default function Home(props: any) {
	return (
		<>
			<MainHead />
			<HeroBanner 
				mainText={props.slider.mainText}
				backgroundUrl={props.slider.backgroundUrl}
				buttonLink={props.slider.buttonUrl}
				buttonText={props.slider.buttonText}
			/>
			<PlateComparison 
				plates={props.plateComparison}
			/>
			<ImageAndText 
				title={props.howItWorks.title}
				image={props.howItWorks.image}
			/>
			<MainSlider
				title={props.showcaseSlider.title} 
				swipeImage=""
				swipeText={props.showcaseSlider.swipeText}
				plates={props.showcaseSlider.images}

			/>
		</>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const filePath = path.join(process.cwd(), 'settings.json');
	const jsonData = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(jsonData.toString());
	return {
		props: objectData
	}
}