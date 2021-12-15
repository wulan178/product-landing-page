import ListClients from '../molecules/ListClients'

export default function Clients() {
    return (
        <div className="container clients text-center">
            <h1 className="clients-heading">What Clients Say</h1>
            <h6 className="clients-subheading mx-auto">Problems trying to resolve the  conflict between the two major realms of Classical physics: Newtonian mechanics </h6>
            <div className="row clients-row">
                <ListClients ava="/images/client1.svg" />
                <ListClients ava="/images/client2.svg" />
                <ListClients ava="/images/client3.svg" />
            </div>
        </div>
    )
}
