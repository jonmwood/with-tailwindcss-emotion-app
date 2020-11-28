import xw from 'xwind'
import ButtonReact from '../components/ButtonReact'
import ButtonStyled from '../components/ButtonStyled'
import { css } from '@emotion/react'
import { jsx } from '@emotion/react'
// import {} from '@emotion/react/types/css-prop'

const Index = () => (
	<div css={xw`grid justify-center items-center h-screen space-y-20`}>
		<div css={xw`space-y-20`}>
			<ButtonReact className="">@emotion/react</ButtonReact>
			<ButtonStyled className="">@emotion/styled</ButtonStyled>
		</div>
	</div>
)

export default Index
