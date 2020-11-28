import Head from 'next/head'
import { Global } from '@emotion/react'
import xw from 'xwind'
import { AppProps } from 'next/app'
import '../styles/base.css'
// import {} from '@emotion/react/types/css-prop'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Tailwindcss Emotion Example</title>
			</Head>
			<Global
				//keyframes + ring and shadow classes variables  ... to global styles
				styles={xw`XWIND_GLOBAL`}
			/>
			<Component {...pageProps} />
		</>
	)
}

export default App
