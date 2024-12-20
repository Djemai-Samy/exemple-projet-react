import { useParams, useSearchParams } from "react-router"

export default function UserPage() {

  // Récuperer les paramètres dynamiques de la route
  // Exemple /1 ou /2 ou /3 ...
  const objet = useParams();

  // Récuperer les données url
  // Exemple: /route?a=1
  let [searchParams] = useSearchParams();

  console.log(searchParams);


  return (
    <h1>ID USER: {objet.id} nom: {searchParams.get('nom')}</h1>
  )
}
