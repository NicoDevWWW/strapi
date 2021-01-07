import {HttpLink} from 'apollo-link-http'
import {withData} from 'next-apollo'

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

const config = {
	link: new HttpLink({
		uri: `${NEXT_PUBLIC_API_URL}/graphql`
	})
}

export default withData(config)
