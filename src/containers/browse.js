import React, { useContext, useState, useEffect, useRef} from 'react';
import { FirebaseContext } from '../context/firebase';
import Header from '../components/header';
import logo from '../logo.svg';
import Card from '../components/card';
import Player from '../components/player';
import { FooterContainer } from '../containers/footer';
export function BrowseContainer({ slides }){
    const [category, setCategory] = useState('series');
    const [search, setSearch] = useState('');
    const [slideRows, setSlideRows] = useState([]);
    const  { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    const myRef = useRef(null);

    const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth'})    

    
    return (
        <>
            <Header src='images/home/joker1.jpg'>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to='/' src={logo}></Header.Logo>
                        <Header.TextLink active={category === 'series' ? 'true' : 'false'}
                            onClick={() => {setCategory('series');
                            executeScroll();}}>Series</Header.TextLink>
                        <Header.TextLink active={category === 'films' ? 'true' : 'false'}
                            onClick={() => {setCategory('films');
                            executeScroll()}}>Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search search={ search } setSearch={setSearch}></Header.Search>
                        <Header.Profile>
                            <Header.Picture src='images/home/1.png'></Header.Picture>
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src='images/home/1.png'></Header.Picture>
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>Xem Joker ngay!</Header.FeatureCallOut>
                    <Header.Text>Joker là một bộ phim điện ảnh giật gân tâm lý của Mỹ năm 2019 do Todd Phillips chịu trách nhiệm đạo diễn kiêm sản xuất, dựa trên phần kịch bản do Phillips cùng Scott Silver chấp bút. Bộ phim dựa trên nguyên tác truyện tranh của DC Comics, với Joaquin Phoenix vào vai nhân vật chính Joker.
                    </Header.Text>
                    <Header.PlayButton>PLay</Header.PlayButton>
                </Header.Feature>
               
            </Header>
            <Card.Group>
            {
                <div ref={myRef}></div>
            }
            {
                slideRows.map(slideItem => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>
                        {   
                            slideItem.title
                        }
                        </Card.Title>
                        <Card.Entities>
                        {
                            slideItem.data.map(item => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src='images/films/children/frozen/small.JPG' />
                                    <Card.Meta>
                                        <Card.SubTitle>
                                            {item.title}
                                        </Card.SubTitle>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))
                        }
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src='videos/video.mp4' />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))
            }
            </Card.Group>
            <FooterContainer />
        </>
    );
}