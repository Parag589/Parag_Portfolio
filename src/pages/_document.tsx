import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class IQDocument extends Document
{
    static async getInitialProps(ctx: DocumentContext)
    {
        return await Document.getInitialProps(ctx);
    }

    render(): JSX.Element
    {
        return (
            <Html data-theme='dark'>
                <Head>
                    <meta property='theme-color' content='#5294E2'/>
                    <meta name="robots" content="all" />

                    <meta name='language' content='en'/>
                    <meta name='Classification' content='Portfolio'/>
                    <meta name='subject' content='Parag Agarwal Full-Stack Developer & Graphic Designer'/>
                    <meta name='description' content="Parag Agarwal Full-Stack Developer & Graphic Designer. Parag Agarwal focuses on JavaScript-related technologies like Typescript, NodeJS and React. Parag Agarwal is also an experienced graphic designer and proficient in Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro and Gimp software's."/>
                    <meta name='keywords' content='Parag Agarwal, Parag Agarwal Portfolio, Full-Stack Developer, Developer, Iran Shiraz, JavaScript, TypeScript, Graphic Designer'/>
                    <meta name='author' content='Parag Agarwal'/>

                    <meta property='og:type' content='website'/>
                    <meta property='og:url' content='https://paragportfolio.vercel.app/'/>
                    <meta property='og:title' content='Parag Agarwal'/>
                    <meta property='og:description' content='Parag Agarwal Full-Stack Developer & Graphic Designer'/>
                    <meta property='og:image' content='https://paragportfolio.vercel.app/favicon.png'/>

                    <meta property='twitter:card'/>
                    <meta property='twitter:url' content='https://paragportfolio.vercel.app/'/>
                    <meta property='twitter:title' content='Parag Agarwal'/>
                    <meta property='twitter:description' content='Parag Agarwal Full-Stack Developer & Graphic Designer'/>
                    <meta property='twitter:image' content='https://paragportfolio.vercel.app/favicon.png'/>

                    <link rel='icon' href='/favicon.png' />
                    <link rel='apple-touch-icon' href='https://intelligentquantum.dev/favicon.png'/>
                    <link rel='manifest' href='https://intelligentquantum.dev/manifest.json'/>
                    <link rel='canonical' href='https://paragportfolio.vercel.app' />
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
                    <link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' rel='stylesheet' />

                    <link rel='icon' href='/favicon.png' />
                    <link rel='apple-touch-icon' href='https://intelligentquantum.dev/favicon.png'/>
                    <link rel='manifest' href='https://intelligentquantum.dev/manifest.json'/>
                    <link rel='canonical' href='https://paragportfolio.vercel.app' />
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
                    <link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' rel='stylesheet' />
 
                    <script
                        id='schema-structured-data'
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org/',
                                '@type': 'Person',
                                name: 'IntelligentQuantum',
                                author:
                                {
                                    '@type': 'Person',
                                    name: 'IntelligentQuantum'
                                },
                                email: 'mailto:intelligentquantum@protonmail.com',
                                image: 'https://intelligentquantum.dev/images/IntelligentQuantum.png',
                                jobTitle: 'Full-Stack Developer',
                                url: 'https://intelligentquantum.dev'
                            })
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default IQDocument;
