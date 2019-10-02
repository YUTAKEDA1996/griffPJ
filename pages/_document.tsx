import React from 'react'
import Document, {
    Head,
    Main,
    NextScript,
} from 'next/document'

export default class MyDocument extends Document<any> {

    render() {
        return (
            <html>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,viewport-fit=cover"
                />
                <link rel="stylesheet" type="text/css"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
                <link href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho&display=swap" rel="stylesheet"></link>
                <meta name="description" content=""/>
            </Head>
            <body style={{
              }}>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}