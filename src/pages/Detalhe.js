import React from 'react'
import { apiTMDB } from '../config/api'
import { Title, Input, Header, Container, ContainerList, ContainerItem, TitleItem,ContainerHeaderTitle, ContainerTitle,ContainerLoading } from '../styles';
import { Image, ScrollView, Text, TouchableOpacity, View,ActivityIndicator } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";

export default class Detalhe extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataFilme: [],
            genres:[],
            loading: false

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
                this.setState({ dataFilme: response.data, genres:response.data.genres, loading:false })
            })

            .catch(
                console.log(error),
            );
    }

    _RenderGenres=()=>{
           let i=0;
           let map = []
           for(i=0;i<this.state.genres.length;i++) {
            console.log('gen',this.state.genres[i]);
            map.push(this.state.genres[i].name)
           }
           console.log('Map',map)
           return(
           <Title fontSize="20px" color="black" textAlign="center">{map.toString()}</Title>
           )
    }
    componentDidMount() {
        this.setState({loading:true})
        this._DetalheFilme();
    }
    render() {
        return (
            <Container>
                <Header backgroundColor="#867472">
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>

                        <Icon name="chevron-left" size={30} />

                    </TouchableOpacity>
                    <ContainerHeaderTitle flex={0.9}>
                    <Title fontSize="30px" color="black" textAlign="center">Detalhe filme</Title>
                    </ContainerHeaderTitle>

                </Header>
                {this.state.loading ? (<ContainerLoading><ActivityIndicator size={40} color="#466A84" /></ContainerLoading>) : (

                <ScrollView>
                    <Image
                        style={{ width: 500, height: 800 }}
                        source={{ uri: 'https://image.tmdb.org/t/p/w500' + this.state.dataFilme.poster_path }}
                    />
                    <ContainerTitle flex={1}>
                     <Title fontSize="25px" color="black" textAlign="center">
                        {'Sinopse'}
                    </Title>
                    <Title fontSize="20px" color="black" textAlign="left">
                        {this.state.dataFilme.overview}
                    </Title>
                    </ContainerTitle>
                    <ContainerTitle flex={1}>
                     <Title fontSize="25px" color="black" textAlign="center">
                        {'Gêneros'}
                    </Title>
                    <Title fontSize="20px" color="black" textAlign="center">
                        {this._RenderGenres()}
                    </Title>
                    </ContainerTitle>
                    

                </ScrollView>
                )}
            </Container>
        )
    }
}