import {useQuery} from "@apollo/react-hooks";
import {gql} from 'apollo-boost'
import Link from "next/link";
import {
	Card,
	CardBody,
	CardImg,
	CardText,
	CardTitle,
	Row,
	Col
} from "reactstrap";

const QUERY = gql`
{
	restaurants {
		id
		name
		description
		image{
			url
		}
	}
}
`
function RestaurantList(props){
	//Récupération de nos données
	const { loading, error, data } = useQuery(QUERY)
	// Erreur de la requête Graql
	if (error) return "Error loading restaurants"
	//Chargement tant que pas de data
	if (loading) return <h1>Fetching...</h1>
	//Si data OK
	if (data.restaurants && data.restaurants.length) {
		//Filtre pour la barre de recherche
		const searchQuery = data.restaurants.filter((restaurant) =>{
			return restaurant.name.toLowerCase().includes(props.search)
		})
		if (searchQuery.length){
			return (
				<Row>
					{searchQuery.map((restaurant) =>(
							<Col xs='6' sm='4' key={restaurant.id}>
								<Card style={{margin : '0 0.5rem 20px 0.5rem'}}>
									<CardImg
										top
										style={{height:250}}
										src={`${process.env.NEXT_PUBLIC_API_URL}${restaurant.image[0].url}`}>
									</CardImg>
									<CardBody>
										<CardTitle>{restaurant.name}</CardTitle>
										<CardText>{restaurant.description}</CardText>
									</CardBody>
									<div className='card-footer'>
										<Link
											as={`/restaurants/${restaurant.id}`}
											href={`/restaurants?id=${restaurant.id}`}>
											<a className='btn btn-primary'>Voir</a>
										</Link>
									</div>
								</Card>
							</Col>
						))}
					<style jsx global>
						{`
							a{
							color: white;
							}
							a:link{
							text-decoration: none;
							color: white;
							}
							a:hover{
								color: white;
							}
							.card-columns{
								column-count: 3;
							}
						`}
					</style>
				</Row>
			)
		} else{
			return <h1>Pas de restaurants :'( </h1>
		}
	}
	return <h5>Add restaurant</h5>
}

export default RestaurantList
