import {Col, Input, InputGroup, InputGroupAddon, Row} from "reactstrap";
import RestaurantList from "../components/RestaurantList";
import {useState} from "react";
export default () => {
	const [query, updateQuery] = useState('')
	return (
		<div className='container-fluid'>
			<Row>
				<Col>
					<div className='search'>
						<InputGroup>
							<InputGroupAddon addonType='append' >Search</InputGroupAddon>
							<Input onChange={e => updateQuery(e.target.value.toLocaleLowerCase())}
									value={query}>
							</Input>
						</InputGroup>
					</div>
					<RestaurantList search={query}/>
				</Col>
			</Row>
			<style jsx>
				{`
					.search{
						margin: 3rem;
					}
				`}
			</style>
		</div>
	)
}
