import Jumbotron from '../components/jumpotron';
import intro from '../tagData/intro.json'

export const JumpotronContainer = () => {
    return (
        <Jumbotron.Container>
        {
          intro.map(item => (
            <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.Content>{item.content}</Jumbotron.Content>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                <Jumbotron.Img src={item.image} ></Jumbotron.Img>
              </Jumbotron.Pane>
            </Jumbotron>
          ))
        }
      </Jumbotron.Container>
    )
}
