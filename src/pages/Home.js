import React from 'react'
import { Title, Input, Header, Container, ContainerList, ContainerItem,TitleItem } from '../styles';
import {api} from '../config/api'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Tabs, Tab, TabHeading } from 'native-base';
import {Avatar} from 'react-native-elements'

export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataTrending: [],
            dataAssistidos: [],
            dataBoxoffice: [],
            dataAnticipated: []

        }
    }

    _ListarFilmes = async (tipo) => {
        const url = (tipo=='watched'?'movies/'+tipo+'/all':'movies/' + tipo +'/?limit=500')
        await api.get(url, {
        })
            .then(response => {
                console.log(response.data);
                if(tipo==='trending'){
                    this.setState({ dataTrending: response.data });}
                else if(tipo==='watched'){
                    console.log('watched', response.data)
                    this.setState({ dataAssistidos: response.data });
                }
                else if(tipo==='boxoffice'){
                    this.setState({ dataBoxoffice: response.data });
                }
                else if(tipo==='anticipated'){
                    this.setState({ dataAnticipated: response.data });
                }
            })

            .catch(
                console.log(error),
            );

    }

    componentDidMount() {
        this._ListarFilmes('trending');
        this._ListarFilmes('watched');
        this._ListarFilmes('boxoffice');
        this._ListarFilmes('anticipated');
    }
    _RenderItem = ({ item }) => {
        console.log('item', item)
        return (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detalhe', item )}>
            <ContainerItem>
                <TitleItem>
                    {"Título: "+item.movie.title}
                </TitleItem>
                <TitleItem>
                    {"Ano: "+ (item.movie.year==null?"Sem previsão":item.movie.year)}
                </TitleItem>
            </ContainerItem>
            </TouchableOpacity>
        )

    }
    _RenderList = (pScreen) => {
        const { dataTrending, dataAssistidos, dataBoxoffice,dataAnticipated } = this.state
        console.log('Trending', dataAssistidos);
        if (pScreen == 1) {
            return (
                <ContainerList>
                    <FlatList
                        style={{ width: 500 }}
                        data={dataTrending}
                        extraData={dataTrending}
                        keyExtractor={item => `${item.movie.ids.trakt}`}
                        renderItem={this._RenderItem}
                        refreshing={true}
                    />
                </ContainerList>
            );
        }
        else if (pScreen == 2) {
            return (
                <ContainerList>
                    <FlatList
                        style={{ width: 500 }}
                        data={dataAssistidos}
                        extraData={dataAssistidos}
                        keyExtractor={item => `${item.movie.ids.trakt}`}
                        renderItem={this._RenderItem}
                        refreshing={true}
                    />
                </ContainerList>
            );
        }
        else if (pScreen == 3) {
            return (
                <ContainerList>
                    <FlatList
                        style={{ width: 500 }}
                        data={dataBoxoffice}
                        extraData={dataBoxoffice}
                        keyExtractor={item => `${item.movie.ids.trakt}`}
                        renderItem={this._RenderItem}
                        refreshing={true}
                    />
                </ContainerList>
            );
        }
        else if (pScreen == 4) {
            return (
                <ContainerList>
                    <FlatList
                        style={{ width: 500 }}
                        data={dataAnticipated}
                        extraData={dataAnticipated}
                        keyExtractor={item => `${item.movie.ids.trakt}`}
                        renderItem={this._RenderItem}
                        refreshing={true}
                    />
                </ContainerList>
            );
        }
    };

    render() {

        return (
            <Container>
                <Header>
                </Header>
                <Tabs style={{ backgroundColor: "#466A84" }}>
                    <Tab heading={<TabHeading style={{ backgroundColor: "#466A84",alignItems:'center' }}>
                        <Title>Tendência</Title>
                    </TabHeading>}>
                        {this._RenderList(1)}
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: "#466A84",alignItems:'center' }}>
                        <Title>Mais assistidos</Title>
                    </TabHeading>}>
                        
                    {this._RenderList(2)}
                    
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: "#466A84", alignItems:'center' }}>
                        <Title>Bilheteria</Title>
                    </TabHeading>}>
                    {this._RenderList(3)}
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: "#466A84",alignItems:'center' }}>
                        <Title>Mais esperados</Title>
                    </TabHeading>}>
                    {this._RenderList(4)}
                    </Tab>
                </Tabs>

            </Container>
        )
    }
}