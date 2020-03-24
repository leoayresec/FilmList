import React from 'react'
import { Title, Input, Header, Container, ContainerList, ContainerItem, TitleItem, ContainerHeaderTitle, ContainerLoading } from '../styles';
import { api } from '../config/api'
import { FlatList, ScrollView, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { Tabs, Tab, TabHeading } from 'native-base';
import { connect } from 'react-redux'
import { setTrending, setAssistidos, setBoxOffice, setAnticipated, setMovies, setIsLoading } from '../config/Redux/actions'
class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    _ListarFilmes = async (tipo) => {
        this.props.dispatch(setIsLoading(true))
        const url = (tipo == 'watched' ? 'movies/' + tipo + '/all' : 'movies/' + tipo + '/?limit=500')
        await api.get(url, {
        })
            .then(response => {
                this.props.dispatch(setMovies(response.data,tipo))
                this.props.dispatch(setIsLoading(false))
            })

            .catch(
                console.log(error),
            );

    }

    componentDidMount() {
        console.log('PROPS', this.props)
        this._ListarFilmes('trending');
        this._ListarFilmes('watched');
        this._ListarFilmes('boxoffice');
        this._ListarFilmes('anticipated');
    }
    _RenderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detalhe', item)}>
                <ContainerItem>
                    <TitleItem>
                        {"Título: " + item.movie.title}
                    </TitleItem>
                    <TitleItem>
                        {"Ano: " + (item.movie.year == null ? "Sem previsão" : item.movie.year)}
                    </TitleItem>
                </ContainerItem>
            </TouchableOpacity>
        )

    }
    _RenderList = (pScreen) => {
        const { trending, watched, boxOffice, anticipated, loading } = this.props
        if (pScreen == 1) {
            return (
                loading ? (<ContainerLoading><ActivityIndicator size={40} color="#466A84" /></ContainerLoading>) : (
                    <ContainerList>
                        <FlatList
                            style={{ width: 500 }}
                            data={trending}
                            extraData={trending}
                            keyExtractor={item => `${item.movie.ids.trakt}`}
                            renderItem={this._RenderItem}
                            refreshing={true}
                        />
                    </ContainerList>)
            );
        }
        else if (pScreen == 2) {
            return (
                this.state.loading ? (<ContainerLoading><ActivityIndicator size={40} color="#466A84" /></ContainerLoading>) : (
                    <ContainerList>
                        <FlatList
                            style={{ width: 500 }}
                            data={watched}
                            extraData={watched}
                            keyExtractor={item => `${item.movie.ids.trakt}`}
                            renderItem={this._RenderItem}
                            refreshing={true}
                        />
                    </ContainerList>)
            );
        }
        else if (pScreen == 3) {
            return (
                this.state.loading ? (<ContainerLoading><ActivityIndicator size={40} color="#466A84" /></ContainerLoading>) : (

                    <ContainerList>
                        <FlatList
                            style={{ width: 500 }}
                            data={boxOffice}
                            extraData={boxOffice}
                            keyExtractor={item => `${item.movie.ids.trakt}`}
                            renderItem={this._RenderItem}
                            refreshing={true}
                        />
                    </ContainerList>
                )
            );
        }
        else if (pScreen == 4) {
            return (
                this.state.loading ? (<ContainerLoading><ActivityIndicator size={40} color="#466A84" /></ContainerLoading>) : (

                    <ContainerList>
                        <FlatList
                            style={{ width: 500 }}
                            data={anticipated}
                            extraData={anticipated}
                            keyExtractor={item => `${item.movie.ids.trakt}`}
                            renderItem={this._RenderItem}
                            refreshing={true}
                        />
                    </ContainerList>
                )
            );
        }
    };

    render() {

        return (
            <Container>
                <Header backgroundColor="#98b7CC">
                    <ContainerHeaderTitle flex={1}>
                        <Title fontSize="30px" color="black" textAlign="center">Lista de filmes</Title>
                    </ContainerHeaderTitle>
                </Header>
                <Tabs style={{ backgroundColor: "#466A84" }}>
                    <Tab heading={<TabHeading style={{ backgroundColor: "#466A84", alignItems: 'center' }}>
                        <Title fontSize="20px" color="#F9F2EC" textAlign="center">Tendência</Title>
                    </TabHeading>}>

                        {this._RenderList(1)}
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: "#466A84", alignItems: 'center' }}>
                        <Title fontSize="20px" color="#F9F2EC" textAlign="center">Mais assistidos</Title>
                    </TabHeading>}>

                        {this._RenderList(2)}

                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: "#466A84", alignItems: 'center' }}>
                        <Title fontSize="20px" color="#F9F2EC" textAlign="center">Bilheteria</Title>
                    </TabHeading>}>
                        {this._RenderList(3)}
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: "#466A84", alignItems: 'center' }}>
                        <Title fontSize="20px" color="#F9F2EC" textAlign="center">Mais esperados</Title>
                    </TabHeading>}>
                        {this._RenderList(4)}
                    </Tab>
                </Tabs>

            </Container>
        )
    }
}
const mapStateToProps = state => {
    console.log('MapState', state)
    return {
        trending: state.trending,
        watched: state.watched,
        boxOffice: state.boxOffice,
        anticipated: state.anticipated,
        loading: state.isLoading
    }
}

export default connect(mapStateToProps)(Home)  