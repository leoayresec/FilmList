import React from 'react'
import { apiTMDB } from '../config/api'
import { Title, Input, Header, Container, ContainerList, ContainerItem, TitleItem } from '../styles';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";

export default class Detalhe extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataFilme: []
        }
    }

    _DetalheFilme = async () => {
        const dataFilme = this.props.navigation.state.params
        const url = 'movie/' + dataFilme.movie.ids.tmdb + '?api_key=a2ef983a70ce66550bd2a9bc63549bcd'
        console.log('URL', url)
        await apiTMDB.get(url, {
        })
            .then(response => {
                console.log(response.data);
                this.setState({dataFilme:response.data})
            })

            .catch(
                console.log(error),
            );
    }
    componentDidMount() {
        this._DetalheFilme();
    }
    render() {
        return (
            <Container>
                <Header backgroundColor="#867472">
                    <Icon name="chevron-left" size={30}/>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                    <Title>Voltar</Title>
                    </TouchableOpacity>
                </Header>
                <ScrollView>
                <Image
                    style={{ width: 500, height: 800 }}
                    source={{ uri: 'https://image.tmdb.org/t/p/w500'+this.state.dataFilme.poster_path }}
                />
                <Text>
                    {'Sinopse: ' + this.state.dataFilme.overview}
                </Text>

                </ScrollView>
            </Container>
        )
    }
}