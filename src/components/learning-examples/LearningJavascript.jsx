const person={
    name:'Tushar',
    address:{
        line1:'Belgaum',
        state:'Karnataka',
        country:'India',
    },
    profiles:['twitter','LinkedIn','Instagram'],
    printProfile: () => {

        person.profiles.map(
            profile =>{
                console.log(profile)
            }
        )
    }
}

export default function LearningJavascript(){
    return(
        <>
        <div>{person.name}</div>
        <div>{person.address.state}</div>
        <div>{person.profiles[1]}</div>
        <div>{person.printProfile()}</div>
        </>

    )

}