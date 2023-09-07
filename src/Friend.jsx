export default function Friend({dosto}){
    const {name, email} = dosto;
    return(
        <div style={{border:'2px solid white', padding:'10px', margin:'10px', borderRadius: '20px', backgroundColor: 'orange'}}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}