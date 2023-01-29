// aca se arma el componente CArds//

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getCharacters } from "../redux/actions";
import Card from "./Card";

const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    flex-wrap:wrap;
`
//voy a necesitar que render ---> renderice las tarjetas de la API y para esto voy a armar la funcion constructora//
class Cards extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.getCharacters();
    }

    render() {
        return (
            //quiero que cuando el componente se monta...//
            //haga dispacht de la actionCreator que trae los personajes

            <Container>
              {
                this.props.characters.map(character=>{
                       return(
                        <Card
                            name={character.name}
                            gender={character.gender}
                            status={character.status}
                            image={character.image}
                            species={character.species}
                            key={character.id}
                            id={character.id}
                        />

                       ) 
                    })
                
              }
            </Container>
        )

    }
}

const mapStateToProps=(state)=>{
    return{
        characters: state.characters
    }
}

const mapDispatchToProps=(dispatch)=>{

    return {
        getCharacters: () => dispatch(getCharacters()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Cards);
