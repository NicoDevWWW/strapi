import {Button, Alert} from 'reactstrap'

export default () => {
	return (
		<div className='container-fluid'>
			<div>
				<Alert color='primary'>
					Super Projet avec NextJS et Bootstrap
				</Alert>
				&nbsp;<Button color='primary'> Hello from nextjs</Button>
			</div>
		</div>
	)

}
